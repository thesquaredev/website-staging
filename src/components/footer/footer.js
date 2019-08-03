import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './footer.scss'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
// import { withPrefix } from 'gatsby'

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row">
        <div className="footer__logo col-md-3">
          <img src={'/images/logo.png'} alt="Squaredev" />
        </div>
        <nav className="footer__menu col-md-9">
          <div className="footer__menu__col">
            <h5>Solutions</h5>
            <ul>
              <li>
                <Link to="/solutions/life-sciences">
                  <div className="footer__menu__item">
                    <span>Pharmacovigilance</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/solutions/financial-services">
                  <div className="footer__menu__item">
                    <span>KYC / Customer 360</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>Data privacy</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>Knowledge graphs</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>AI & machine learning</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>Data engineering</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu__col">
            <h5>Company</h5>
            <ul>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>About us</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>Mission</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/generic">
                  <div className="footer__menu__item">
                    <span>Contact us</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu__col">
            <h5>Follow us</h5>
            <div className="footer__social">
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
        </nav>
      </div>
      <div className="row">
        <div className="footer__text col-12">
          Copyright © {new Date().getFullYear()} Squaredev, All rights reserved
          | Cookies | Policy
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
