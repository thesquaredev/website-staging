import React from 'react'
import './header.scss'
import { Link } from 'gatsby'
import classNames from 'classnames'
import Logo from '../common/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

/**
 * Utility to return classes for header element
 * @param isScrolled Boolean that is true when user scrolls down more than 10px {@link Layout}
 * @param isMobileMenuVisible Boolean that is true when mobile menu is open {@link Layout}
 * @returns {string}
 */
const getHeaderClass = (isScrolled, isMobileMenuVisible) =>
  classNames({
    header: true,
    'header-scrolled': isScrolled,
    'mobile-menu-visible': isMobileMenuVisible,
  })

/**
 * Utility to return classes for toggle icon in header
 * @param isMobileMenuVisible Boolean that is true when mobile menu is open {@link Layout}
 * @returns {string}
 */
const getToggleClass = isMobileMenuVisible =>
  classNames({
    nav__toggle: true,
    'mobile-menu-visible': isMobileMenuVisible,
  })

/**
 * Utility that returns the navigation icon in small devices
 * @param isMobileMenuVisible Boolean that is true when mobile menu is open {@link Layout}
 * @returns {IconDefinition}
 */
const getToggleIcon = isMobileMenuVisible =>
  isMobileMenuVisible ? faTimes : faBars

/**
 * Utility to return classes for nav element
 * @param isMobileMenuVisible Boolean that is true when mobile menu is open {@link Layout}
 * @returns {string}
 */
const getNavClass = isMobileMenuVisible =>
  classNames({
    nav__menu: true,
    'nav__menu--mobile': isMobileMenuVisible,
  })

const Header = ({ isScrolled, isMobileMenuVisible, toggleMobileMenu }) => (
  <header className={getHeaderClass(isScrolled, isMobileMenuVisible)}>
    <div className="container">
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div
          className={getToggleClass(isMobileMenuVisible)}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={getToggleIcon(isMobileMenuVisible)} />
        </div>
        <nav className={getNavClass(isMobileMenuVisible)}>
          <ul className="nav-menu sf-arrows">
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li className="menu-has-children">
              {/* <h5 className="menu-has-children__title">Technology</h5> */}
              <ul className="nav-submenu">
                <span className="nav-submenu__col">
                  <h6>Research</h6>
                  <li>
                    <Link to="/technology/artificial-intelligence">
                      <img src={'/icons/robot-head-bold-green.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Explainable AI</span>
                        <span>
                          Solve problems intelligently. AI is no longer a black
                          box
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology/linked-open-data">
                      <img src={'/icons/brain-bold-green.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Linked Open Data</span>
                        <span>
                          Semantically connected data that provide insights
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology/graphs">
                      <img src={'/icons/databases-bold-green.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Graphs at Scale</span>
                        <span>AI powered graphs at scale</span>
                      </div>
                    </Link>
                  </li>
                </span>
                <span className="nav-submenu__col">
                  <h6>Engineering</h6>
                  <li>
                    <Link to="/technology/data-science">
                      <img src={'/icons/visualizations.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Data Science & Engineering</span>
                        <span>
                          Convert data into value and capitalise on your data
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology/software-systems">
                      <img src={'/icons/server.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Software Systems</span>
                        <span>Intelligent applications that deliver value</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology/serverless-computing">
                      <img src={'/icons/network-live.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Serverless Computing</span>
                        <span>Reduce price, increase expansion</span>
                      </div>
                    </Link>
                  </li>
                </span>
              </ul>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/company/#contact2">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
