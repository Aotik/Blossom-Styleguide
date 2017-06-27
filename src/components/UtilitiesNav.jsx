import React from 'react'
import Link from 'react-router/lib/Link'
import BaseComponent from './common/BaseComponent'

import LinkElement from './LinkElement'

class UtilitiesNav extends React.Component {
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
            <LinkElement to="/utility/js">Blossom JS</LinkElement>
              <LinkElement to="/utility/alignment">Element alignment</LinkElement>
              <LinkElement to="/utility/helpers">Helper classes</LinkElement>
              <LinkElement to="/utility/layout">Layout</LinkElement>
            </ul>
            <a className="resources breakpoint-m-show"><i className="ion-chevron-down"/></a>
          </div>
        </div>
      </aside>
    )
  }
}

export default UtilitiesNav
