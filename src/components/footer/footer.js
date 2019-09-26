import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './footer.scss'
import { Link } from 'gatsby'

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
            <div className="footer__menu__col__split">
              <ul>
                <li>
                  <Link to="/solutions/credit-scoring">
                    <div className="footer__menu__item">
                      <span>Credit Scoring</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/lending">
                    <div className="footer__menu__item">
                      <span>Lending</span>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/solutions/machine-learning">
                    <div className="footer__menu__item">
                      <span>Machine learning</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/knowledge-graphs">
                    <div className="footer__menu__item">
                      <span>Knowledge graphs</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/open-banking-api">
                    <div className="footer__menu__item">
                      <span>Open Banking API</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__menu__col">
            <h5>Company</h5>
            <ul>
              <li>
                <Link to="/company">
                  <div className="footer__menu__item">
                    <span>About us</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/company/#contact2">
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
              <a
                href="https://twitter.com/thesquaredev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/company/thesquaredev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/thesquaredev"
                target="_blank"
                rel="noopener noreferrer"
              >
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
