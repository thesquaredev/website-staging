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
              <h5 className="menu-has-children__title">Solutions</h5>
              <ul className="nav-submenu">
                <span className="nav-submenu__col">
                  <h6>By Use Case</h6>
                  <li>
                    <Link to="/solutions/pharmacovigilance">
                      <img src={'/icons/pills-icon-bold-green.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Pharmacovigilance</span>
                        <span>Leverage data-driven innovation</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/know-your-customer">
                      <img
                        src={'/icons/user-credit-card-bold-green.png'}
                        alt=""
                      />
                      <div className="nav-submenu__item">
                        <span>KYC / Customer 360</span>
                        <span>Meet data challenges with AI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/user-shield.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Data privacy</span>
                        <span>Ensure GDPR compliance</span>
                      </div>
                    </Link>
                  </li>
                </span>
                <span className="nav-submenu__col">
                  <h6>By Technology</h6>
                  <li>
                    <Link to="/solutions/knowledge-graphs">
                      <img src={'/icons/brain-icon-bold-green.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Knowledge graphs</span>
                        <span>Transform data to knowledge</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/machine-learning">
                      <img src={'/icons/robot-head-bold-green.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Machine Learning</span>
                        <span>Solve problems intelligently</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/data-engineering">
                      <img src={'/icons/visualizations.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Data engineering</span>
                        <span>Make large scale processing easy</span>
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
