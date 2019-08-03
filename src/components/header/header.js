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
              <h5 className="menu-has-children__title">Solutions</h5>
              <ul className="nav-submenu">
                <span className="nav-submenu__col">
                  <h6>By Use Case</h6>
                  <li>
                    <Link to="/solutions/life-sciences">
                      <img src={'/icons/pills-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Pharmacovigilance</span>
                        <span>Leverage data-driven innovation</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/financial-services">
                      <img src={'/icons/user-credit-card-bold-green.png'} alt="" />
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
                    <Link to="/generic">
                      <img src={'/icons/brain-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Knowledge graphs</span>
                        <span>Break down data silos</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/robot-head.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>AI & machine learning</span>
                        <span>Lorem ipsum dolor sit amet</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/visualizations.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Data engineering</span>
                        <span>Lorem ipsum dolor sit amet</span>
                      </div>
                    </Link>
                  </li>
                </span>
              </ul>
            </li>
            <li>
              <Link to="/showcase">Company</Link>
            </li>
            <li>
              <Link to="/showcase">
                {/*<img src={'/icons/mailbox.png'} alt="" />*/}
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
