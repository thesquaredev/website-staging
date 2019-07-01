import React from 'react'
import './header.scss'
import { withPrefix, Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../logo'

const Header = ({ isScrolled }) => (
  <header className={isScrolled ? 'header header-scrolled' : 'header'}>
    <div className="container">
      <div className="row align-items-center justify-content-between d-flex">
        <div className="header__logo">
          <AnchorLink href="/">
            <Logo className="logo" />
          </AnchorLink>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu sf-arrows">
            {/*<li className="menu-active">*/}
            {/*<AnchorLink href="#banner1">Home</AnchorLink>*/}
            {/*</li>*/}
            <li className="menu-has-children">
              <Link to="">
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
                  <Link to="/generic">
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
              <AnchorLink href="#imageText3">Company</AnchorLink>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
