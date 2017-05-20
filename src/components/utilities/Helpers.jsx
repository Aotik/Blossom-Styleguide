import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Visibility extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Helper classes">Helpers are defined to perform common re-usable functions</Title>
				<div className="example alignment">
					<div className="explanation">
						<h6>Alignment classes</h6>
						<p>Use left, center & right alignment classes to align your text</p>
					</div>
					<div className="module">
						<p className="text-left">
							Left aligned text
						</p>
						<p className="text-right">
							Right aligned text
						</p>
						<p className="text-center">
							Center aligned text
						</p>
						<p className="text-justify">
							Blossom is the coolest design framework for developers, right? Right?
						</p>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example transformtext">
					<div className="explanation">
						<h6>Transform classes</h6>
						<p>Use helper classes to transform your text</p>
					</div>
					<div className="module">
						<p className="transform lowercase">
							lowercase text
						</p>
						<p className="transform uppercase">
							uppercase text
						</p>
						<p className="transform capitalize">
							capitalized text
						</p>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example layout">
					<div className="explanation">
						<h6>Hide elements completely</h6>
						<p>By using <code>.hidden</code> you can prevent elements from being shown as well as collapsing its space it would take up</p>
						<div className="module">
							<span className="block-grey hidden"></span>
								<div className="footer">
								</div>
						</div>
					</div>
				</div>
				<div className="example layout">
					<div className="explanation">
						<h6>Visually hide elements</h6>
						<p>By using <code>.invisible</code> you can prevent elements from being shown but its space will still be taken up as normal</p>
						<div className="module">
							<span className="block-grey invisible"></span>
							<div className="footer">
							</div>
						</div>
					</div>
				</div>
				<div className="example layout">
					<div className="explanation">
						<h6>Block display</h6>
						<p>Force elements to stack over eachother</p>
						<div className="module">
							<div className="block-green block"></div>
							<div className="block-yellow block"></div>
							<div className="block-purple block"></div>
							<div className="footer">
							</div>
						</div>
					</div>
				</div>
				<div className="example layout">
					<div className="explanation">
						<h6>Inline block display</h6>
						<p>Position elements in a single file</p>
						<div className="module">
							<div className="block-green inline"></div>
							<div className="block-yellow inline"></div>
							<div className="block-purple inline"></div>
							<div className="footer">
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Visibility
