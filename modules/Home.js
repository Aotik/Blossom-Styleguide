import React from 'react'

export default React.createClass({
	render() {
		return (
			<div className="homepage">
				<section className="hero">
					<span className="label green">1.0.0</span>
					<h1>Blossom UI</h1>
					<h3>Build websites intuitvely & efficiently</h3>
					<div className="button-group">
						<a className="button violet labeled"><i className="fa fa-play"/> Get started</a>
						<a className="button primary outlined">Download blossom.min.css</a>
					</div>
				</section>
				<section className="features">
					<div className="grid-row">
						<div className="contain">
							<div className="row">
								<div className="clm-xs-12 clm-s-4 column">
										<h4>Perfect for customisability</h4>
										<p>Being built on Stylus, customising the Blossom theme is dead easy</p>
										<a className="button">Check</a>
								</div>
								<div className="clm-xs-12 clm-s-4 column">
										<h2>New 123</h2>
										<p>ahahah hahaha aha</p>
										<a className="button">Check</a>
								</div>
								<div className="clm-xs-12 clm-s-4 column">
										<h2>New 123</h2>
										<p>ahahah hahaha aha</p>
										<a className="button">Check</a>
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
