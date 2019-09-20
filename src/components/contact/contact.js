import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faEnvelope,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import './contact.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'
import {
  COMPANY_IS_EMPTY,
  COMPANY_IS_EMPTY_USER_ERROR,
  CONTACT_FORM_RESPONSE_FAILURE,
  CONTACT_FORM_RESPONSE_SUCCESS,
  EMAIL_FORMAT_REGEX,
  EMAIL_IS_EMPTY,
  EMAIL_IS_EMPTY_USER_ERROR,
  EMAIL_IS_NOT_FORMATTED,
  EMAIL_IS_NOT_FORMATTED_USER_ERROR,
  FORM_SUBMIT_URL,
  MESSAGE_IS_EMPTY,
  MESSAGE_IS_EMPTY_USER_ERROR,
  NAME_IS_EMPTY,
  NAME_IS_EMPTY_USER_ERROR,
  SUBMIT_BTNTXT_OK,
} from '../common/constants'
import classNames from 'classnames'

/**
 * Utility to return classes for response area
 * @param responseText The response shown to the user after form submission
 * @returns {string}
 */
const getResponseClass = responseText =>
  classNames({
    contact__actions__response: true,
    expanded: responseText,
  })

/**
 * Utility to return classes for submit button
 * @param loading Boolean while an AJAX call is in progress
 * @returns {string}
 */
const getSubmitButtonClass = () =>
  classNames({
    'primary-btn': true,
    contact__actions__spinner: false,
  })

/**
 * The component that renders the form's actions bar. It contains the submit button and a message area
 * @param loading Boolean while an AJAX call is in progress
 * @param responseText The response shown to the user after form submission
 * @param submitBtnTxt User provided text of the submit button
 */
const FormActions = ({ loading, responseText, submitBtnTxt }) => {
  const btnTxt = responseText ? SUBMIT_BTNTXT_OK : submitBtnTxt
  const content = loading ? (
    <FontAwesomeIcon className="contact__actions__spinner" icon={faSpinner} />
  ) : (
    btnTxt
  )
  return (
    <div className="contact__actions">
      <div className={getResponseClass(responseText)}>{responseText}</div>
      <button
        type="submit"
        className={getSubmitButtonClass(loading)}
        disabled={loading}
      >
        {content}
      </button>
    </div>
  )
}

/**
 * The class that renders the contact form
 */
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      company: '',
      job: '',
      email: '',
      message: '',
      errors: [],
      responseText: '',
      loading: false,
    }
  }

  /**
   * Method to handle form submission. In the form data object
   * there is also a hidden field with the route value.
   * This is used so that we know what page the form was submitted from
   * @param e React's synthetic event
   * @param responseText The response shown to the user after form submission
   */
  handleSubmit = (e, responseText) => {
    e.preventDefault()
    if (responseText) {
      this.setState({ responseText: '' })
      return
    }
    const form = e.target
    const errors = this.validateForm(form)
    if (errors.length > 0) {
      this.setState({ errors })
    } else {
      this.setState({ errors: [] })
      const data = new FormData(form)
      this.sendToEmailService(data)
    }
  }

  /**
   * Method to handle input change
   * @param e React's synthetic event
   */
  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  /**
   * Method to validate form
   * @param form The HTML form element
   * @returns an array containing error strings
   */
  validateForm(form) {
    let errors = []
    !form.name.value && errors.push(NAME_IS_EMPTY)
    !form.company.value && errors.push(COMPANY_IS_EMPTY)
    !form.email.value && errors.push(EMAIL_IS_EMPTY)
    form.email.value &&
      !form.email.value.match(EMAIL_FORMAT_REGEX) &&
      errors.push(EMAIL_IS_NOT_FORMATTED)
    !form.message.value && errors.push(MESSAGE_IS_EMPTY)
    return errors
  }

  /**
   * Method used to submit contact for to an external email service
   * @param data The form data
   */
  sendToEmailService(data) {
    this.setState({ loading: true })
    fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: data,
    })
      .then(response => {
        this.resetFormAndSetResponse(CONTACT_FORM_RESPONSE_SUCCESS)
      })
      .catch(error => {
        this.resetFormAndSetResponse(CONTACT_FORM_RESPONSE_FAILURE)
      })
  }

  getContactFormClass(showAddress) {
    return classNames({
      contact__form: true,
      'contact__form--center': !showAddress,
    })
  }

  resetFormAndSetResponse(responseText) {
    this.setState({
      responseText,
      loading: false,
      name: '',
      email: '',
      message: '',
      company: '',
      job: '',
    })
  }

  render() {
    const {
      location: { pathname },
      meta: { heading, icon, description, form, address, showAddress },
      elemId,
    } = this.props
    const {
      name,
      email,
      job,
      company,
      message,
      errors,
      responseText,
      loading,
    } = this.state
    return (
      <section id={elemId} className="contact">
        <div className="container">
          <div className="contact__header">
            {icon && <img src={`/icons/${icon}`} alt="" />}
            {heading && <h2 className="contact__header__heading">{heading}</h2>}
          </div>
          {description && <p className="contact__description">{description}</p>}
          <div className="row contact__wrapper">
            <div className={this.getContactFormClass(showAddress)}>
              {form.title && <h4 className="pb-15">{form.title}</h4>}
              <form
                name="contactForm"
                onSubmit={e => this.handleSubmit(e, responseText)}
                noValidate
              >
                <div className="mt-15">
                  <input
                    name="name"
                    type="text"
                    placeholder={form.namePlaceholder}
                    maxLength="120"
                    className="single-input"
                    onChange={this.handleChange}
                    value={name}
                    required
                  />
                  {errors.includes(NAME_IS_EMPTY) && (
                    <small className="form-text text-danger">
                      {NAME_IS_EMPTY_USER_ERROR}
                    </small>
                  )}
                </div>
                <div className="mt-15">
                  <input
                    name="company"
                    type="text"
                    placeholder={form.companyPlaceholder}
                    maxLength="120"
                    className="single-input"
                    onChange={this.handleChange}
                    value={company}
                    required
                  />
                  {errors.includes(COMPANY_IS_EMPTY) && (
                    <small className="form-text text-danger">
                      {COMPANY_IS_EMPTY_USER_ERROR}
                    </small>
                  )}
                </div>
                <div className="mt-15">
                  <input
                    name="job"
                    type="text"
                    placeholder={form.jobPlaceholder}
                    maxLength="120"
                    className="single-input"
                    onChange={this.handleChange}
                    value={job}
                    required
                  />
                </div>
                <div className="mt-15">
                  <input
                    type="email"
                    name="email"
                    placeholder={form.emailPlaceholder}
                    maxLength="120"
                    className="single-input"
                    onChange={this.handleChange}
                    value={email}
                    required
                  />
                  {errors.includes(EMAIL_IS_EMPTY) && (
                    <small className="form-text text-danger">
                      {EMAIL_IS_EMPTY_USER_ERROR}
                    </small>
                  )}
                  {errors.includes(EMAIL_IS_NOT_FORMATTED) && (
                    <small className="form-text text-danger">
                      {EMAIL_IS_NOT_FORMATTED_USER_ERROR}
                    </small>
                  )}
                </div>
                <div>
                  <input type="hidden" name="route" value={pathname} />
                </div>
                <div className="mt-15 pb-25">
                  <textarea
                    name="message"
                    placeholder={form.messagePlaceholder}
                    maxLength="1000"
                    rows="5"
                    className="single-textarea"
                    onChange={this.handleChange}
                    value={message}
                    required
                  />
                  {errors.includes(MESSAGE_IS_EMPTY) && (
                    <small className="form-text text-danger">
                      {MESSAGE_IS_EMPTY_USER_ERROR}
                    </small>
                  )}
                </div>
                <FormActions
                  loading={loading}
                  responseText={responseText}
                  submitBtnTxt={form.submitBtnTxt}
                />
                <input
                  name="_formsubmit_id"
                  type="text"
                  style={{ display: 'none' }}
                />
              </form>
            </div>
            {showAddress && (
              <div className="contact__address">
                {address.title && <h4 className="pb-15">{address.title}</h4>}
                <div className="d-flex pt-15">
                  <div className="contact__address__icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="pl-30">
                    <div className="pb-10">{address.line1}</div>
                    <div className="pb-10">{address.line2}</div>
                    <div className="pb-10">{address.country}</div>
                  </div>
                </div>
                <div className="d-flex pt-15">
                  <div className="contact__address__icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="pl-30">{address.email}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default withLocation(withShowcase(Contact))
