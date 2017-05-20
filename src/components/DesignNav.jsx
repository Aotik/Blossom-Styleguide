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
			<aside className="sidebar clearfix breakpoint-m-hide">
				<div className="fixed top">
					<div className="inner">
						<h6>Resources</h6>
						<ul>
							<LinkElement to="/design/animations">Animations & Effects</LinkElement>
							<LinkElement to="/design/breakpoints">Breakpoints</LinkElement>
							<LinkElement to="/design/colors">Color palette</LinkElement>
							<LinkElement to="/design/grid">Grid system</LinkElement>
							<LinkElement to="/design/typography">Typography</LinkElement>
						</ul>
					</div>
				</div>
			</aside>
		)
	}
}

export default DesignNav
