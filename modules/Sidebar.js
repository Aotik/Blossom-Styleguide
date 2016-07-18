import React from 'react'
import NavLink from './NavLink'

export const sbElements = React.createClass({
	render() {
		return (
			<aside className="sidebar clearfix breakpoint-m-hide">
				<div className="fixed top">
					<div className="inner">
						<h6>Resources</h6>
						<ul>
							<NavLink to="/elements/buttons">Buttons</NavLink>
							<NavLink to="/elements/lists">Lists</NavLink>
							<NavLink to="/elements/dividers">Dividers</NavLink>
							<NavLink to="/elements/labels">Labels</NavLink>
							<NavLink to="/elements/comments">Comments</NavLink>
							<NavLink to="/elements/cards">Cards</NavLink>
							<NavLink to="/elements/input">Input</NavLink>
							<NavLink to="/elements/menus">Menus</NavLink>
							<NavLink to="/elements/progress-bars">Progress bars</NavLink>
							<NavLink to="/elements/images">Images</NavLink>
							<NavLink to="/elements/messages">Messages</NavLink>
							<NavLink to="/elements/loaders">Loaders</NavLink>
							<NavLink to="/elements/tables">Tables</NavLink>
							<NavLink to="/elements/dropdown">Dropdown</NavLink>
							<NavLink to="/elements/stages">Stages</NavLink>
						</ul>
					</div>
				</div>
			</aside>
		)
	}
})

export const sbAnimations = React.createClass({
	render() {
		return (
			<aside className="sidebar clearfix breakpoint-m-hide">
				<div className="fixed top">
					<div className="inner">
						<h6>Resources</h6>
						<ul>
							<NavLink to="/design/scheme">Color Scheme</NavLink>
							<NavLink to="/design/typography">Typography</NavLink>
							<NavLink to="/design/animations">Animations & Effects</NavLink>
							<NavLink to="/design/grid">Grid</NavLink>
							<NavLink to="/design/breakpoints">Breakpoints</NavLink>
						</ul>
					</div>
				</div>
			</aside>
		)
	}
})

export const sbUtility = React.createClass({
	render() {
		return (
			<aside className="sidebar clearfix breakpoint-m-hide">
				<div className="fixed top">
					<div className="inner">
						<h6>Resources</h6>
						<ul>
							<NavLink to="/utility/js">Blossom JS</NavLink>
							<NavLink to="/utility/center">Center elements</NavLink>
							<NavLink to="/utility/hide">Hide elements</NavLink>
							<NavLink to="/utility/layout">Layout</NavLink>
						</ul>
					</div>
				</div>
			</aside>
		)
	}
})
