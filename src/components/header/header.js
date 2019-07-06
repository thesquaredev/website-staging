import React from 'react'
import './header.scss'
import { withPrefix, Link } from 'gatsby' // TODO: this vs relative paths
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
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
                <FontAwesomeIcon icon={faChevronDown} />
              </Link>
              <ul className="nav-submenu">
                <li>
                  <Link to="/generic">
                    <img src={withPrefix('images/brain-icon.png')} alt="" />
                    Knowledge Graphs
                    {/*<FontAwesomeIcon icon={faAngleRight} />*/}
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/pharmacovigilance">
                    <img src={withPrefix('images/pills-icon.png')} alt="" />
                    Pharmacovigilance
                  </Link>
                </li>
                <li>
                  <Link to="/generic">
                    <img src={withPrefix('images/shield-icon.png')} alt="" />
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link to="/generic">
                    <img src={withPrefix('images/databases-icon.png')} alt="" />
                    Master Data Management
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/showcase">Company</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
