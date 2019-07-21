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
                    <Link to="/solutions/life-sciences">
                      <img src={'/icons/pills-icon.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Life sciences</span>
                        <span>Leverage data-driven innovation</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/financial-services">
                      <img src={'/icons/bank.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Financial services</span>
                        <span>Meet data challenges with AI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/5g.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Telecommunications</span>
                        <span>Your network is a graph</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/truck.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Logistics & manufacturing</span>
                        <span>Intelligent product management</span>
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
                  <li>
                    <Link to="/generic">
                      <img src={'/icons/user-shield.png'} alt="" />
                      <div className="nav-submenu__item">
                        <span>Data protection</span>
                        <span>Ensure GDPR compliance</span>
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
              <Link to="/technology">
                <img src={'/icons/flask.png'} alt="" />
                Labs
              </Link>
            </li>
            <li>
              <Link to="/showcase">
                <img src={'/icons/mailbox.png'} alt="" />
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
