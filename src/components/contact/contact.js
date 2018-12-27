import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './contact.scss'

class Contact extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    console.log('Submit entered')
  }

  render() {
    const { heading, form, address, elemId } = this.props
    const responseText = ''
    return (
      <section id={elemId} className="contact">
        <div className="container">
          <h1 className="text-center pb-60">{heading}</h1>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="pb-15">{form.title}</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="mt-15">
                  <input
                    name="name"
                    type="text"
                    placeholder={form.namePlaceholder}
                    required
                    maxLength="120"
                    className="single-input"
                  />
                  <small className="form-text text-muted">
                    Please enter your name
                  </small>
                </div>
                <div className="mt-15">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={form.emailPlaceholder}
                    maxLength="120"
                    className="single-input"
                  />
                  <small className="form-text text-muted">
                    Please enter an email address
                  </small>
                  <small className="form-text text-muted">
                    Please provide a valid email
                  </small>
                </div>
                <div className="mt-15 pb-25">
                  <textarea
                    name="message"
                    required
                    placeholder={form.messagePlaceholder}
                    maxLength="1000"
                    rows="5"
                    className="single-textarea"
                  />
                  <small className="form-text text-muted">
                    Please enter a message to send
                  </small>
                </div>
                <div className="contact__actions">
                  {/*[ngClass]="{'expanded': responseText}"*/}
                  <h5 className="contact__actions__response">{responseText}</h5>
                  {/*[disabled]="!contactForm.valid && !responseText"*/}
                  <button type=" submit" className="primary-btn">
                    {responseText ? 'OK' : form.submitBtnTxt}
                  </button>
                </div>
              </form>
            </div>
            <div className="contact__address col-lg-6">
              <h4 className="pb-15">{address.title}</h4>
              <div className="d-flex pt-15">
                <div className="contact__address__icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                  {/*<i class="{{ 'fa fa-' +address?.addressIcon }}"></i>*/}
                </div>
                <div className="pl-30">
                  <div className="pb-10">{address.line1}</div>
                  <div className="pb-10">{address.line2}</div>
                  <div className="pb-10">{address.country}</div>
                </div>
              </div>
              <div className="d-flex pt-15">
                <div className="contact__address__icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                  {/*<i class="{{ 'fa fa-' +address?.emailIcon }}"></i>*/}
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

export default Contact
