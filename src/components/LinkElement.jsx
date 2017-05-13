import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from './common/BaseComponent'

class LinkElement extends React.Component {
	constructor() {
		super()
	}

	render() {
		let isActive = this.context.router.isActive(this.props.to)
		let className = isActive ? "active link" : "link"

		return (
			<li className={className}>
				<Link {...this.props}>
					{this.props.children}
				</Link>
			</li>
		)
	}
}

LinkElement.contextTypes = {
	router: React.PropTypes.object
}

export default LinkElement
