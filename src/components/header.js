import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavigationButtons from "./NavButtons.js"
import "./layoutManual.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className ="header-div">
      <ul className="header-list">
        <li className="header-list-item">
          <Link to="/" >{siteTitle}</Link>
        </li> 
        <li className="header-list-item">
          <Link to="/projects/">Projects</Link>
        </li>
        <li className="header-list-item">
          <Link to="/about/">About</Link>
        </li>
        <li className="header-list-item" style={{ right:'0' }}>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `My site`,
}

export default Header
