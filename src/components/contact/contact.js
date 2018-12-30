import React from 'react'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './contact.scss'

const responseText = ''

const Contact = ({ heading, form: myForm, address, elemId }) => (
  <section id={elemId} className="contact">
    <div className="container">
      <h1 className="text-center pb-60">{heading}</h1>
      <div className="row">
        <div className="col-lg-6">
          <h4 className="pb-15">{myForm.title}</h4>

          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={values => {
              let errors = {}
              if (!values.email) {
                errors.email = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(42)
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mt-15">
                  <input
                    name="name"
                    type="text"
                    placeholder={myForm.namePlaceholder}
                    maxLength="120"
                    className="single-input"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && touched.name}
                  <small className="form-text text-muted">
                    Please enter your name
                  </small>
                </div>
                <div className="mt-15">
                  <input
                    type="email"
                    name="email"
                    placeholder={myForm.emailPlaceholder}
                    maxLength="120"
                    className="single-input"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
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
                    placeholder={myForm.messagePlaceholder}
                    maxLength="1000"
                    rows="5"
                    className="single-textarea"
                    onChange={handleChange}
                    value={values.message}
                  />
                  {errors.message && touched.message}
                  <small className="form-text text-muted">
                    Please enter a message to send
                  </small>
                </div>
                {/*<div className="contact__actions">*/}
                  {/*<h5 className="contact__actions__response">{responseText}</h5>*/}
                  <button type="submit" className="primary-btn" disabled={isSubmitting}>
                    {responseText ? 'OK' : myForm.submitBtnTxt}
                  </button>
                {/*</div>*/}
              </form>
            )}
          </Formik>
        </div>
        <div className="contact__address col-lg-6">
          <h4 className="pb-15">{address.title}</h4>
          <div className="d-flex pt-15">
            <div className="contact__address__icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
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
              <FontAwesomeIcon icon={faEnvelope} />
              {/*<i class="{{ 'fa fa-' +address?.emailIcon }}"></i>*/}
            </div>
            <div className="pl-30">{address.email}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
