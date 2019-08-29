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
  CONTACT_FORM_RESPONSE_FAILURE,
  CONTACT_FORM_RESPONSE_SUCCESS,
  EMAIL_FORMAT_REGEX,
  EMAIL_IS_EMPTY,
  EMAIL_IS_NOT_FORMATTED,
  FORM_SUBMIT_URL,
  MESSAGE_IS_EMPTY,
  NAME_IS_EMPTY,
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
  const btnTxt = responseText ? 'OK' : submitBtnTxt
  const content = loading ? (
    <FontAwesomeIcon className={'contact__actions__spinner'} icon={faSpinner} />
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
      email: '',
      message: '',
      errors: [],
      responseText: '',
      loading: false,
    }
  }

  /**
   * Method to handle form submission
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
    const form = this.state.form
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
        this.setState({
          responseText: CONTACT_FORM_RESPONSE_SUCCESS,
          loading: false,
          name: '',
          email: '',
          message: '',
        })
      })
      .catch(error => {
        this.setState({
          responseText: CONTACT_FORM_RESPONSE_FAILURE,
          loading: false,
          name: '',
          email: '',
          message: '',
        })
      })
  }

  render() {
    const {
      meta: { heading, form, address },
      elemId,
    } = this.props
    const { name, email, message, errors, responseText, loading } = this.state
    return (
      <section id={elemId} className="contact">
        <div className="container">
          <h1 className="text-center pb-60">{heading}</h1>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="pb-15">{form.title}</h4>
              <form
                name="contactForm"
                onSubmit={e => this.handleSubmit(e, responseText)}
                action="https://formspree.io/hello@thesquaredev.com"
                method="POST"
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
                  {errors.includes('nameIsEmpty') && (
                    <small className="form-text text-muted">
                      Please enter your name
                    </small>
                  )}
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
                  {errors.includes('emailIsEmpty') && (
                    <small className="form-text text-muted">
                      Please enter an email address
                    </small>
                  )}
                  {errors.includes('emailIsNotFormatted') && (
                    <small className="form-text text-muted">
                      Please provide a valid email
                    </small>
                  )}
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
                  {errors.includes('messageIsEmpty') && (
                    <small className="form-text text-muted">
                      Please enter a message to send
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
            <div className="contact__address col-lg-6">
              <h4 className="pb-15">{address.title}</h4>
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
          </div>
        </div>
      </section>
    )
  }
}

export default withLocation(withShowcase(Contact))
