import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import DropElement from './DropElement'
import Home from './Home'

export default React.createClass({
	renderContent() {
		return (
			<div className="contain">
				{this.props.sidebar}
				<div className="page">
					{this.props.main}
				</div>
			</div>
		)
	},
	renderHomepage() {
		return (
			<div className="wrap">
			 {this.props.page}
			</div>
		);
	},
	toRender() {
		if (this.props.main == null) {
			return this.renderHomepage()
		} else {
			return this.renderContent()
		}
	},
	render() {
		return(
			<div>
				<header className="sidebar fixed top">
					<div className="contain">
						<Link to="/" className="logo">
							<img src="/examples/logo.svg"/>
						</Link>
						<ul className="links">
							<DropElement to="/start">Getting started</DropElement>
							<DropElement to="/elements">Elements</DropElement>
							<DropElement to="/design">Design</DropElement>
							<DropElement to="/utility">Utility</DropElement>
						</ul>
					</div>
				</header>


				<div className="main-content">
						{this.toRender()}
					<footer className="footer">
						<div className="contain">
							<div className="inner">
								<ul className="list horizontal links">
									<li><a rel="noopener noreferrer" target="_blank" href="http://m.me/cindr.io">Support</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom">GitHub Repo</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/issues/new">Submit an issue</a></li>
									<li className="float-right madeby"><a className="text-grey" rel="noopener noreferrer" target="_blank" href="https://cindr.io">Developed by <span className="cindr">Cindr.io</span></a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/commits/master">Changelog</a></li>
								</ul>
							</div>
						</div>
					</footer>
				</div>
			</div>
		)
	}
})
