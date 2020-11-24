import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
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
            <h5>Technology</h5>
            <div className="footer__menu__col__split">
              <ul>
                <li>
                  <Link to="/technology/artificial-intelligence">
                    <div className="footer__menu__item">
                      <span>Explainable AI</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/technology/knowledge-graphs">
                    <div className="footer__menu__item">
                      <span>Knowledge Graphs</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/technology/software-2">
                    <div className="footer__menu__item">
                      <span>Software 2.0</span>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/technology/machine-learning-engineering">
                    <div className="footer__menu__item">
                      <span>ML engineering</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/technology/natural-language-processing">
                    <div className="footer__menu__item">
                      <span>NLP applications</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/technology/software-systems">
                    <div className="footer__menu__item">
                      <span>Software systems</span>
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
                <Link to="/research">
                  <div className="footer__menu__item">
                    <span>Research</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/company">
                  <div className="footer__menu__item">
                    <span>About us</span>
                  </div>
                </Link>
              </li>
              <li>
                <a
                  href="https://medium.com/squaredev-publications"
                  target="_blank"
                >
                  <div className="footer__menu__item">
                    <span>Blog</span>
                  </div>
                </a>
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
                href="https://www.linkedin.com/company/squaredev/"
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
          {/* | Cookies | Policy */}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
