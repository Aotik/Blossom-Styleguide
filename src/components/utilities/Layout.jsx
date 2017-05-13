import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Layout extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Layout">Utility classes to assist in positioning elements within your layout</Title>
				<div className="row opening-message">
					<div className="message info">
						<h6>Position attributes</h6>
						<p>
							You can also use <code>.relative</code><code>.absolute</code> <code>.fixed</code> to change the position attribute of an element
						</p>
					</div>
				</div>
				<div className="row example layout">
					<div className="explanation">
						<h6>Clearfix</h6>
						<p>To expand parents which have floating children elements, you can use <code>.clearfix</code></p>
					</div>
					<div className="module">
						<div className="clearfix">
							<span className="block-grey float-left"></span>
							<span className="block-grey float-right"></span>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example layout">
					<div className="explanation">
						<h6>Pin elements</h6>
						<p>Use <code>.pin</code> to move an element in any direction. Specify the direction by using <code>.top .left .right .bottom</code></p>
					</div>
					<div className="module">
						<div className="relative">
							<span className="block-grey pin top left"></span>
							<span className="block-grey pin top right"></span>
							<span className="block-grey pin bottom right"></span>
							<span className="block-grey pin bottom left"></span>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example layout">
					<div className="explanation">
						<h6>Stackable elements</h6>
						<p>The class <code>.stackable</code> can be added to a parent to force all children to stack over eachother and push them towards the middle</p>
					</div>
					<div className="module">
						<div className="stackable">
							<span className="block-green"></span>
							<span className="block-yellow"></span>
							<span className="block-purple"></span>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Layout
