import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './contact.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      errors: [],
      formIsValid: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let errors = []
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    if (!name) {
      errors.push('nameIsEmpty')
    }
    if (!email) {
      errors.push('emailIsEmpty')
    } else if (
      !email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
      )
    ) {
      errors.push('emailIsNotFormatted')
    }
    if (!message) {
      errors.push('messageIsEmpty')
    }
    if (errors.length > 0) {
      this.setState({ errors })
    } else {
      this.setState({ errors: [] })
      const data = new FormData(form)
      this.sendToSimpleForm(data)
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    const form = this.state.form
    this.setState({ [name]: value })
  }

  sendToSimpleForm(data) {
    fetch(
      // 'https://getsimpleform.com/messages?form_api_token=9275a162832af0980b4902f51972cebc',
      'https://formsubmit.io/send/kostas.siabanis@gmail.com',
      {
        method: 'POST',
        // mode: 'no-cors',
        redirect: 'manual',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: data,
      }
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      console.log(jsonResponse);
    }).catch (error => {
      console.log(error)
    })
  }

  render() {
    const {
      meta: { heading, form, address },
      elemId,
    } = this.props
    const { name, email, message, errors } = this.state
    return (
      <section id={elemId} className="contact">
        <div className="container">
          <h1 className="text-center pb-60">{heading}</h1>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="pb-15">{form.title}</h4>
              <form
                name="contactForm"
                onSubmit={this.handleSubmit}
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
                <button type="submit" className="primary-btn" disabled={false}>
                  {form.submitBtnTxt}
                </button>
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
