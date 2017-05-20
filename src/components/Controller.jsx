import React from 'react'
import $ from 'jquery'

import BaseComponent from './common/BaseComponent'
import NavBar from './NavBar'
import NavFooter from './NavFooter'
import Landing from './Landing'
import Start from './Start'
import Customization from './Customization'
import Changelog from './Changelog'
import Switch from './Switch'

class Controller extends BaseComponent {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<NavBar/>
				<div className="main-content">
					{this.props.route.home && <Landing/>}
					{this.props.route.start && <Start/>}
					{this.props.route.customization && <Customization/>}
					{this.props.route.changelog && <Changelog/>}
					{this.props.route.resource && <Switch type={this.props.children.props.route.path} nav={this.props.route.path}/>}
					<NavFooter/>
				</div>
			</div>
		)
	}
}

Controller.contextTypes = {
	router: React.PropTypes.object
}

Controller.propTypes = {
	location: React.PropTypes.object,
	url: React.PropTypes.string
}

export default Controller
