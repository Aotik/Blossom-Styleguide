import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from './BaseComponent'

class Title extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="outer-title">
        <h2 className="title">{this.props.title}</h2>
        <p {...this.props}>
           {this.props.children}
        </p>
      </div>
    )
  }
}

Title.contextTypes = {
  router: React.PropTypes.object
}

export default Title
