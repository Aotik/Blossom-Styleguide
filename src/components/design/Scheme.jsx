import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Scheme extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Color scheme">Primary colors to be used in conjunction with other Blossom elements.</Title>
				<div className="row example">
					<div className="explanation">
						<h6>UI colors</h6>
						<p>Light, standard and dark colors used in Blossom UI</p>
					</div>
					<div className="schemes">
						<div className="scheme red light">
							<p>Light red</p>
						</div>
						<div className="scheme red">
							<p>Red</p>
						</div>
						<div className="scheme red dark">
							<p>Dark red</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme orange light">
							<p>Light orange</p>
						</div>
						<div className="scheme orange">
							<p>Orange</p>
						</div>
						<div className="scheme orange dark">
							<p>Dark orange</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme yellow light">
							<p>Light yellow</p>
						</div>
						<div className="scheme yellow">
							<p>Yellow</p>
						</div>
						<div className="scheme yellow dark">
							<p>Dark yellow</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme green light">
							<p>Light green</p>
						</div>
						<div className="scheme green">
							<p>Green</p>
						</div>
						<div className="scheme green dark">
							<p>Dark green</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme teal light">
							<p>Light teal</p>
						</div>
						<div className="scheme teal">
							<p>Teal</p>
						</div>
						<div className="scheme teal dark">
							<p>Dark teal</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme blue light">
							<p>Light blue</p>
						</div>
						<div className="scheme blue">
							<p>Blue</p>
						</div>
						<div className="scheme blue dark">
							<p>Dark blue</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme violet light">
							<p>Light violet</p>
						</div>
						<div className="scheme violet">
							<p>Violet</p>
						</div>
						<div className="scheme violet dark">
							<p>Dark violet</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme purple light">
							<p>Light purple</p>
						</div>
						<div className="scheme purple">
							<p>Purple</p>
						</div>
						<div className="scheme purple dark">
							<p>Dark purple</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme pink light">
							<p>Light pink</p>
						</div>
						<div className="scheme pink">
							<p>Pink</p>
						</div>
						<div className="scheme pink dark">
							<p>Dark pink</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme brown light">
							<p>Light brown</p>
						</div>
						<div className="scheme brown">
							<p>Brown</p>
						</div>
						<div className="scheme brown dark">
							<p>Dark brown</p>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation">
						<h6>Gray colors</h6>
						<p>Light, standard and dark grays used in Blossom UI</p>
					</div>
					<div className="schemes">
						<div className="scheme ash light">
							<p>Light ash</p>
						</div>
						<div className="scheme ash">
							<p>Ash</p>
						</div>
						<div className="scheme ash dark">
							<p>Dark ash</p>
						</div>
					</div>
					<div className="schemes dark">
						<div className="scheme smoke light">
							<p>Light smoke</p>
						</div>
						<div className="scheme smoke">
							<p>Smoke</p>
						</div>
						<div className="scheme smoke dark">
							<p>Dark smoke</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Scheme
