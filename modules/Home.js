import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div className="homepage">
				<section className="hero clearfix">
					<span className="label green">1.0.0</span>
					<h1>Blossom UI</h1>
					<h3>Build websites intuitvely & efficiently</h3>
					<div className="button-group">
						<a className="button violet labeled"><i className="fa fa-play"/> Get started</a>
						<a className="button primary outlined">Download blossom.min.css</a>
					</div>
				</section>
				<section className="about">
					<div className="contain text-center">
						<h3>What is Blossom?</h3>
						<p>Blossom is a brand new framework that make lives easy for designers by being able to simply build responsive and awesome websites without having to re-code elements over and over again. Blossom also allows developers to easily customise their own version as it is built on Stylus.</p>
					</div>
				</section>
				<section className="features">
					<div className="contain">
						<div className="grid-row">
							<div className="row">
								<div className="clm-xs-12 clm-m-4 column">
										<h4>Perfect for customisability</h4>
										<p>Being built on Stylus, customising Blossom&#39;s look and feel is dead easy to accomplish</p>
										<a className="button">Learn how</a>
								</div>
								<div className="clm-xs-12 clm-m-4 column">
										<h4>Tons of<br/>components</h4>
										<p>With over 60+ components and utility classes, Blossom covers as much as you need with minimal coding required to build a beautiful website</p>
										<Link to="/elements/buttons" className="button primary">Browse components</Link>
								</div>
								<div className="clm-xs-12 clm-m-4 column">
										<h4>It&#39;s free and open source!</h4>
										<p>With Blossom being open source, anyone is welcome to input their expertise into improving it as a product</p>
										<a className="button">View the repo</a>
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
