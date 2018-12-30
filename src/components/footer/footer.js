import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row footer-bottom d-flex justify-content-between align-items-center">
        <div className="footer__text col-lg-9 col-sm-12 footer-text">
          <span>
            Copyright © {new Date().getFullYear()} Squaredev, All rights
            reserved | Cookies | Policy
          </span>
          <span>
            Template by{' '}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {` | Icons by `}
            <a href="https://www.freepik.com/" target="_blank">
              Freepik
            </a>
          </span>
        </div>
        <div className="col-lg-3 col-sm-12 footer__social">
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
