import React from 'react'
import './header.scss'
import { Link } from 'gatsby'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Logo from '../common/logo'

const Header = ({ isScrolled }) => (
  <header className={isScrolled ? 'header header-scrolled' : 'header'}>
    <div className="container">
      <div className="row align-items-center justify-content-between d-flex">
        <div className="header__logo">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu sf-arrows">
            {/*<li className="menu-active">*/}
            {/*<AnchorLink href="#banner1">Home</AnchorLink>*/}
            {/*</li>*/}
            <li className="menu-has-children">
              <Link to="/solutions">
                <span>Solutions</span>
                {/*<FontAwesomeIcon icon={faChevronDown} />*/}
              </Link>
              <ul className="nav-submenu">
                <span className="nav-submenu__col">
                  <h6>By Industry</h6>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/brain-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Knowledge Graphs</span>
                        <span>Your data is now smarter</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/pharmacovigilance">
                      <img src={'/icons/pills-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Pharmacovigilance</span>
                        <span>Predict Adverse Events</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/shield-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>GDPR Compliance</span>
                        <span>Shield your privacy</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/databases-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Master Data Management</span>
                        <span>Unify your data</span>
                      </div>
                    </Link>
                  </li>
                </span>
                <span className="nav-submenu__col">
                  <h6>By Technology</h6>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/shield-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>GDPR Compliance</span>
                        <span>Shield your privacy</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/databases-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Master Data Management</span>
                        <span>Unify your data</span>
                      </div>
                    </Link>
                  </li>
                </span>
              </ul>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/showcase">Company</Link>
            </li>
            <li>
              <Link to="/showcase">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
