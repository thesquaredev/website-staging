import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './footer.scss'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { withPrefix } from 'gatsby'

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="container">
      <div className="footer__contact row d-flex justify-content-between align-items-center">
        <div className="footer__logo">
            <img src={withPrefix('images/logo.png')} alt="Squaredev" />
        </div>
        <div className="footer__address col-sm-12 col-md-6">
          <h5 className="pb-15">Get in touch with us</h5>
          <div className="d-flex pt-15 justify-content-center justify-content-md-end">
            <div className="footer__address__icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="pl-md-3">
              <div className="pb-1">Aarschotsestraat 52 / 004</div>
              <div className="pb-1">1800 Vilvoorde</div>
              <div className="pb-1">Belgium</div>
            </div>
          </div>
          <div className="d-flex pt-15 justify-content-center justify-content-md-end">
            <div className="footer__address__icon">
              <FontAwesomeIcon icon={faEnvelope} />
              {/*<i class="{{ 'fa fa-' +address?.emailIcon }}"></i>*/}
            </div>
            <div className="pl-md-3">hello@thesquaredev.com</div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="footer__text col-md-9 col-sm-12 footer-text order-1 order-md-0">
          <span>
            Copyright © {new Date().getFullYear()} Squaredev, All rights
            reserved | Cookies | Policy
          </span>
        </div>
        <div className="col-md-3 col-sm-12 footer__social">
          <a href="https://twitter.com/thesquaredev" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/company/thesquaredev/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/thesquaredev" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
