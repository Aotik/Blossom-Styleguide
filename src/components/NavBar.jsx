import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from './common/BaseComponent'
import LinkElement from './LinkElement'

class NavBar extends BaseComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <header className="sidebar">
        <div className="contain">
          <Link to="/" className="logo">
            <span className="toggle"><img src="/images/logo.svg"/><i className="fa fa-bars"/></span>
          </Link>
          <ul className="links left">
            <LinkElement to="/introduction">Introduction</LinkElement>
            <LinkElement to="/customization">Customization</LinkElement>
          </ul>
          <ul className="links">
            <LinkElement to="/elements">Elements</LinkElement>
            <LinkElement to="/design">Design</LinkElement>
            <LinkElement to="/utility">Utility</LinkElement>
          </ul>
        </div>
      </header>
    )
  }
}

export default NavBar
