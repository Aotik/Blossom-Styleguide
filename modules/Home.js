import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<section className="hero clearfix">
					<div className="contain">
						<span className="label green">v1.1.7</span>
						<h1>Blossom UI</h1>
						<h3>A simply beautiful, themeable design framework built from the ground up in Stylus, with performance in mind.</h3>
						<div className="button-group breakpoint-xs-stackable">
							<Link to="/start" className="button medium outlined">Get started</Link>
							<a rel="noopener noreferrer" target="_blank" className="button medium primary labeled" href="https://github.com/Aotik/Blossom-Styleguide/raw/master/blossom.zip"><i className="fa fa-arrow-down"/> Download Blossom bundle</a>
						</div>
					</div>
				</section>
				<section className="size">
					<span className="puzzles-left centered vertical breakpoint-l-hide"><img src="/examples/365cons_puzzle.svg"/></span>
					<span className="puzzles centered vertical breakpoint-l-hide"><img src="/examples/365cons_puzzle.svg"/></span>
					<div className="contain">
						<div className="row">
							<div className="xs-12 m-8 col">
								<h3>The first piece of your puzzle</h3>
								<p>Weighing in at just under 70kb, Blossom provides the basis needed to build your new project with a non-invasive, consistent and responsive user interface.</p>
								<br/>
								<p>With its easy-to-use HTML, natural language CSS and efficient Javascript, beginner to advanced users are able to create all kinds of responsive awesomeness without having to re-code elements over and over again.</p>
								<div className="button-group">
									<Link className="button medium" to="/elements">Start browsing the UI</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="features">
					<div className="contain">
						<div className="row">
							<div className="xs-12 m-4 col column">
									<i className="text-yellow fa fa-edit"/>
									<h4>Perfect for customisability</h4>
									<p>Being built on Stylus, the task of customizing Blossom&#39;s look and feel to fit the vision of your next project is incredibly easy to take on.</p>
									<Link to="/customize" className="button outlined">About theming</Link>
							</div>
							<div className="xs-12 m-4 col column">
									<i className="text-purple fa fa-th"/>
									<h4>Building block galore!</h4>
									<p>With over 60+ components and utility classes, Blossom covers as much as you need with minimal coding required to build a beautiful website.</p>
									<Link to="/elements" className="button outlined primary">Browse components</Link>
							</div>
							<div className="xs-12 m-4 col column">
									<i className="text-blue fa fa-github"/>
									<h4>It&#39;s free and open source!</h4>
									<p>With Blossom being open source, anyone is welcome to input their expertise into improving the Blossom framework as a whole.</p>
									<a href="https://github.com/Aotik/Blossom" className="button outlined">View the repo</a>
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
								<h5>Check out Amy if you haven&#39;t already, she is an extremely talented Visual Designer. All artwork within Blossom was designed by Amy as part of her awesome on-going project <a rel="noopener noreferrer" target="_blank" href="http://www.365cons.com/"><strong>365cons</strong></a></h5>
								<a rel="noopener noreferrer" target="_blank" href="http://www.adevereux.com/" className="button blue labeled labeled-right">Check out her work <i className="fa fa-chevron-right"/> </a>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
})
