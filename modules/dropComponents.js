import React from 'react'
import { Link } from 'react-router'

import NavLink from './NavLink'

export default React.createClass({
	render() {
		return (
			<ul>
				<li><NavLink to="/tables">Tables</NavLink></li>
			</ul>
		)
	}
})
