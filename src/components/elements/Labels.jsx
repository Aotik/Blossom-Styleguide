import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Labels extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Labels">A button indicates a possible user action</Title>
				<div className="example labels">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Colored labels</h6>
						<p>Labels can be colored to represent its state</p>
					</div>
					<div className="module collapsed">
						<div className="label">Pending</div>
						<div className="label green">New features</div>
						<div className="label red">Bug fixes</div>
						<div className="label orange">Improvements</div>
						<div className="label blue">Message sent</div>
						<div className="label yellow">Incoming message</div>
						<div className="label teal">Connection established</div>
						<div className="label violet">Enchancements</div>
						<div className="label purple">No team members</div>
						<div className="label pink">Features</div>
						<div className="label brown">New coffee daily!</div>
						<div className="label grey">Map available</div>
						<div className="label black">Project obscured</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example labels">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Labels with icons</h6>
						<p>A label with an icon to enchance its visual state</p>
					</div>
					<div className="module collapsed">
						<div className="label">
							<i className="fa fa-circle-o-notch fa-spin"></i>
							Sending message
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example labels">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Labeled labels</h6>
						<p>Labelception, a label within a label</p>
					</div>
					<div className="module collapsed">
						<div className="label green">
							New messaged recieved
							<div className="detail">From Daniel</div>
						</div>
						<div className="label primary">
							Package arrived
							<div className="detail">13:49PM</div>
						</div>
						<div className="label red">
							Comments bug
							<div className="detail">Fixed</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example labels">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Labels with links</h6>
						<p>Quick link straight from a label</p>
					</div>
					<div className="module collapsed">
						<div className="label">
							<i className="fa fa-envelope"></i>
							14 Unread
							<a>View mail</a>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example labels">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Circular labels</h6>
						<p>Rounded off labels, great for showing stats</p>
					</div>
					<div className="module collapsed">
						<div className="label red circular">
							1
						</div>
						<div className="label orange circular">
							2
						</div>
						<div className="label yellow circular">
							3
						</div>
						<div className="label green circular">
							4
						</div>
						<div className="label teal circular">
							5
						</div>
						<div className="label blue circular">
							6
						</div>
						<div className="label violet circular">
							7
						</div>
						<div className="label purple circular">
							8
						</div>
						<div className="label pink circular">
							9
						</div>
						<div className="label brown circular">
							a
						</div>
						<div className="label grey circular">
							b
						</div>
						<div className="label black circular">
							c
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Labels
