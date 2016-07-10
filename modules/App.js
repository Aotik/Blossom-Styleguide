import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import DropElement from './DropElement'
import Home from './Home'

export default React.createClass({
	render() {
		return(
			<div>
				<header className="sidebar fixed top">
					<div className="contain">
						<div className="logo">
							<img src="/css/logo.png"/>
						</div>
						<ul className="links">
							<DropElement to="/start">Getting Started</DropElement>
							<DropElement to="/elements">Elements</DropElement>
							<DropElement to="/design">Design</DropElement>
							<DropElement to="/utility">Utility</DropElement>
						</ul>
					</div>
				</header>
				<header className="sidebar fixed subbar">
					<div className="contain">
						<div className="sub">
							{this.props.header}
						</div>
						<div className="link">
							<Link to="/github"><i className="fa fa-commenting-o"></i> Changelog</Link>
						</div>
					</div>
				</header>

				<div className="main-content">
					<div className="contain">
						<aside className="sidebar breakpoint-m-hide">
							<div className="fixed">
								<h6>Resources</h6>
								{this.props.sidebar}
							</div>
						</aside>

						<div className="page">
							{this.props.main || <Home/>}
						</div>
					</div>
					<footer className="footer">
						<div className="contain">
							<div className="inner">
								<ul className="list horizontal links">
									<li><a>Contact</a></li>
									<li><a>GitHub Repo</a></li>
									<li><a>Submit an issue</a></li>
									<li><a>Suggestions</a></li>
									<li className="float-right madeby"><a className="text-grey">Made with <i className="fa fa-heart-o text-red"/> by <span className="aotik">aotik</span></a></li>
								</ul>
							</div>
						</div>
					</footer>
				</div>
			</div>
		)
	}
})
