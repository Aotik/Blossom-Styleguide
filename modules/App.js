import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import DropElement from './DropElement'
import Home from './Home'
// <header className="sidebar fixed subbar">
// 		<div className="contain">
// 			<div className="sub">
// 				{this.props.header}
// 			</div>
// 			<div className="link">
// 				<Link to="/github"><i className="fa fa-ellipsis-h"></i> Changelog</Link>
// 			</div>
// 		</div>
// 	</header>
export default React.createClass({
	render() {
		return(
			<div>
				<header className="sidebar fixed top">
					<div className="contain">
						<Link to="/" className="logo">
							<img src="/examples/logo-dark.png"/>
						</Link>
						<ul className="links">
							<DropElement to="/start">Getting Started</DropElement>
							<DropElement to="/elements">Elements</DropElement>
							<DropElement to="/design">Design</DropElement>
							<DropElement to="/utility">Utility</DropElement>
						</ul>
					</div>
				</header>


				<div className="main-content">
					<div className="contain">
						{this.props.sidebar}
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
