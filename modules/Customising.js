import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<section className="hero clearfix borderless">
					<div className="contain">
						<h1>Customisation</h1>
						<h3>Learn how to customise Blossom to fit your needs</h3>
					</div>
				</section>
				<section className="installing">
					<div className="contain">
						<h4>Theming</h4>
						<div className="divider"/>
						<div className="module">
							<h4 className="text-blue">Coming soon</h4>
						</div>
					</div>
					<div className="contain">
						<h4>Building</h4>
						<div className="divider"/>
						<div className="module">
							<h4 className="text-blue">Coming soon</h4>
						</div>
					</div>
				</section>
			</div>
		)
	}
})
