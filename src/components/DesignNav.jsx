import React from 'react'
import Link from 'react-router/lib/Link'
import BaseComponent from './common/BaseComponent'

import LinkElement from './LinkElement'

class DesignNav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <aside className="sidebar clearfix">
        <div className="fixed top">
          <div className="inner">
            <h6>Resources</h6>
            <ul>
              <LinkElement to="/design/animations">Animations & Effects</LinkElement>
              <LinkElement to="/design/breakpoints">Breakpoints</LinkElement>
              <LinkElement to="/design/colors">Color scheme</LinkElement>
              <LinkElement to="/design/grid">Grid system</LinkElement>
              <LinkElement to="/design/typography">Typography</LinkElement>
            </ul>
            <a className="resources breakpoint-m-show"><i className="fa fa-caret-down"/></a>
          </div>
        </div>
      </aside>
    )
  }
}

export default DesignNav
