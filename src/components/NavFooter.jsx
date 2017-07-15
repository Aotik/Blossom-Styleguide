import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from './common/BaseComponent'

class NavFooter extends BaseComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <footer className="footer">
        <div className="contain">
          <div className="inner">
            <ul className="list horizontal links">
              <li><a rel="noopener noreferrer" target="_blank" href="http://m.me/cindr.io">Support</a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/aotik/Blossom">Open-source</a></li>
              <li className="float-right madeby"><a className="text-grey" rel="noopener noreferrer" target="_blank" href="https://cindr.io">Built with <i className="ion-heart text red animation-pulse inline"/> by <span className="cindr">Cindr.io</span></a></li>
              <li><Link to="/changelog">Changelog</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default NavFooter
