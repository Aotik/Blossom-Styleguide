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
			<div className="outer-title row">
				<h3 className="title">{this.props.title}</h3>
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
