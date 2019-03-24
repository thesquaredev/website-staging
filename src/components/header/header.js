import React from 'react'
import './header.scss'
import { withPrefix, Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

const Header = ({ isScrolled }) => (
  <header className={isScrolled ? 'header header-scrolled' : 'header'}>
    <div className="container">
      <div className="row align-items-center justify-content-between d-flex">
        <div className="header__logo">
          <AnchorLink href="#banner1">
            <img src={withPrefix('images/logo.png')} alt="Squaredev" />
          </AnchorLink>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu sf-arrows">
            <li className="menu-active">
              <AnchorLink href="#banner1">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#grid2">Solutions</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#imageText3">Our Vision</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#imageText4">Open Source</AnchorLink>
            </li>
            {/*<li className="menu-has-children">*/}
            {/*<Link to="">*/}
            {/*<span>Open Source</span>*/}
            {/*<FontAwesomeIcon icon={faChevronDown} />*/}
            {/*</Link>*/}
            {/*<ul>*/}
            {/*<li><Link to="/generic">Generic Page</Link></li>*/}
            {/*</ul>*/}
            {/*</li>*/}
            {/*<li><Link to="#contact">Contact</Link></li>*/}
          </ul>
        </nav>
        {/*<button type="button" id="mobile-nav-toggle">*/}
          {/*<FontAwesomeIcon icon={faGripLines} />*/}
        {/*</button>*/}
        {/*<nav id="mobile-nav">*/}
          {/*<ul style={{ touchAction: 'pan-y' }}>*/}
            {/*<li>*/}
              {/*<Link to="#home">Home</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="#offer">We Offer</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="#about">About</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="#project">Project</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="#price">Price</Link>*/}
            {/*</li>*/}
            {/*<li className="menu-has-children">*/}
              {/*<i className="lnr lnr-chevron-up" />*/}
              {/*<a href className="sf-with-ul menu-item-active">*/}
                {/*Pages*/}
              {/*</a>*/}
              {/*<ul style={{}}>*/}
                {/*<li>*/}
                  {/*<a href="generic.html">Generic</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                  {/*<a href="elements.html">Elements</a>*/}
                {/*</li>*/}
              {/*</ul>*/}
            {/*</li>*/}
          {/*</ul>*/}
        {/*</nav>*/}
      </div>
    </div>
  </header>
)

export default Header
