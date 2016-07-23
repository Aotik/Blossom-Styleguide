import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<section className="hero clearfix">
					<div className="contain">
						<span className="label green">0.0.1</span>
						<h1>Blossom UI</h1>
						<h3>Build websites intuitively & efficiently</h3>
						<div className="button-group breakpoint-xs-stackable">
							<Link to="/start" className="button medium outlined">Get started</Link>
							<a className="button medium primary labeled"><i className="fa fa-arrow-down"/> Download blossom.min.css</a>
						</div>
					</div>
				</section>
				<section className="about light smoke">
					<img className="breakpoint-m-hide leftcut" src="/examples/365cons_move.svg"/>
					<div className="contain text-center">
						<h3>Make a smart move towards simplicity.</h3>
						<p>Blossom is a brand new framework that makes life simple for designers and enables developers to find their creativity with theming. With its easy-to-use HTML, natural language CSS and efficient Javascript anyone can create all kinds of responsive awesomeness  without having to re-code elements over and over again.</p>
						<a className="button large">Start browsing the UI</a>
					</div>
					<img className="breakpoint-m-hide rightcut" src="/examples/365cons_move.svg"/>
				</section>
				<section className="size">
					<span className="large60 centered vertical"><img src="/examples/lessthan60.png"/></span>
					<div className="contain">
						<div className="grid-row">
							<div className="xs-12 m-7">
								<h3>Oh, not all great things come in small sizes, but this does.</h3>
								<p>With <strong>blossom.min.css</strong> weighing in at just under 60kb, you don&#39;t have to break a sweat worrying about your users having a sluggish experience.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="features">
					<div className="contain">
						<div className="grid-row">
							<div className="row">
								<div className="xs-12 m-4 column">
										<i className="text-yellow fa fa-edit"/>
										<h4>Perfect for customisability</h4>
										<p>Being built on Stylus, customising Blossom&#39;s look and feel is dead easy to accomplish.</p>
										<a className="button">Learn how</a>
								</div>
								<div className="xs-12 m-4 column">
										<i className="text-purple fa fa-th"/>
										<h4>Tons of<br/>components</h4>
										<p>With over 60+ components and utility classes, Blossom covers as much as you need with minimal coding required to build a beautiful website.</p>
										<Link to="/elements" className="button primary">Browse components</Link>
								</div>
								<div className="xs-12 m-4 column">
										<i className="text-blue fa fa-github"/>
										<h4>It&#39;s free and open source!</h4>
										<p>With Blossom being open source, anyone is welcome to input their expertise into improving it as a product.</p>
										<a href="https://github.com/Aotik/Blossom" className="button">View the repo</a>
								</div>
							</div>

						</div>
					</div>
				</section>
				<section className="icons">
					<div className="iconsoverlay">
						<div className="contain bind">
							<div className="centered">
								<i className="fa fa-large fa-thumbs-o-up"/>
								<h3>Massive thanks to Amy Devereux!</h3>
								<h5>Check out Amy if you haven&#39;t already, she is an extremely talented Visual Designer. All artwork within Blossom UI is designed by her as part of her ongoing project <a href="http://www.365cons.com/"><strong>365cons</strong></a></h5>
								<a href="http://www.adevereux.com/" className="button blue labeled labeled-right">See her work <i className="fa fa-chevron-right"/> </a>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
})
