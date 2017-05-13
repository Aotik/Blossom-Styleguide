import React from 'react'
import Link from 'react-router/lib/Link'

import BaseComponent from './common/BaseComponent'
import {HighlightCode} from './common/Helpers'

import NavFooter from './NavFooter'

class Start extends BaseComponent {
	constructor() {
		super()
	}

	componentDidMount() {
		HighlightCode()
	}

	render() {
		return (
			<div>
			<section className="hero clearfix light dent-container">
				<div className="dent-cover">
					<div className="contain">
						<h1>Introduction</h1>
						<h3>A guide into how to install and use Blossom</h3>
						<div className="button-group breakpoint-xs-stackable">
							<a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom" className="button medium outlined">Open-source repository</a>
							<a rel="noopener noreferrer" target="_blank" href="http://d1fb9glqs1l0dr.cloudfront.net/blossom-1.2.61.zip" className="button medium primary labeled"><i className="fa fa-arrow-down"/> Download Blossom.zip</a>
						</div>
					</div>
				</div>
				<div className="dent bg">
					<img src="/images/dent.svg"/>
				</div>
			</section>
				<section className="guide">
					<div className="contain">
						<h4>Dependancies</h4>
						<div className="divider"/>
						<div className="stages vertical fluid">
							<div className="stage">
								<div className="content">
									<div className="header">jQuery</div>
										To get <b>Blossom JS</b> working correctly you will need to include the jQuery dependancy to your markup. You can download the latest version of jQuery by <a rel="noopener noreferrer" target="_blank" href="https://jquery.com/download/">downloading it directly</a> or you can use a <a rel="noopener noreferrer" target="_blank" href="https://www.jsdelivr.com/projects/jquery">CDN link</a> for the latest version.
										<small><b>Recommended: </b>Use jquery.min.js in production as it is optimized for faster page load speeds</small>
									<pre>
										<code className="html">
										{'<script src="/path/to/jquery.min.js"></script>'}
										</code>
									</pre>
								</div>
							</div>
							<div className="stage">
								<div className="content">
									<div className="header">Gulp JS</div>
										Blossom uses <a rel="noopener noreferrer" target="_blank" href="http://gulpjs.com/">Gulp</a> to provide command line scripts for building edited versions, making developers feel right at home.

										Gulp should be installed globally (recommended), or it will be installed alongside Blossom.
										<pre>
											<code className="cmake">
											{'$ npm install -g gulp'}
											</code>
										</pre>
								</div>
							</div>
						</div>
					</div>
					<div className="contain">
						<h4>Setting it all up</h4>
						<div className="divider"/>
						<div className="stages vertical fluid">
							<div className="stage">
								<div className="content">
									<div className="header">Installing Blossom via NPM</div>
									If you have limited experience or are unfamiliar with Node, you can follow these steps or <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/download/">download from nodejs.org</a>.

									With Node you can easily install Blossom UI from the command line and save it to your package.json.

									<pre>
										<code className="cmake">
										{'$ npm install blossom-ui --save'}
										</code>
									</pre>
								</div>
							</div>
							<div className="stage">
								<div className="content">
									<div className="header">Installing Blossom via static .zip</div>
										If you are using Blossom UI just as a dependancy, you can download the <a rel="noopener noreferrer" target="_blank" href="http://d1fb9glqs1l0dr.cloudfront.net/blossom-1.2.61.zip">zip</a> and just include it anywhere you need it.
										Once you&#39;ve downloaded Blossom.zip, move it to your working project directory and include the below 3 files changing the path where applicable.
										<pre>
											<code className="html hljs">
											{'<link rel="stylesheet" type="text/css" href="/css/blossom.min.css"/>'}
											</code>
										</pre>
										<pre>
											<code className="html hljs">
											{'<script src="/path/to/jquery.min.js"></script>'}
											</code>
										</pre>
										<pre>
											<code className="html hljs">
											{'<script src="/js/blossom.min.js"></script>'}
											</code>
										</pre>
								</div>
							</div>
							<div className="stage">
								<div className="content">
									<div className="header">Basic template</div>
										The basic template is a guideline into how to structure pages after installing Blossom. All the bits needed to get started are included in the markup below.
										<pre>
											<code className="html hljs">
											{`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Getting started template for Blossom UI">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>My new Blossom website</title>

		<!-- Include Blossom CSS -->
		<link href="/css/blossom.min.css" rel="stylesheet">
	</head>
	<body>
		<h1>Hello Blossom!</h1>

		<!-- Include jQuery & Blossom JS -->
		<script src="https://cdn.jsdelivr.net/jquery/3.2.1/jquery.min.js"></script>
		<script src="/js/blossom.min.js"></script>
	</body>
</html>`}
											</code>
										</pre>
								</div>
							</div>
						</div>
					</div>
					<div className="contain">
						<h4>Updating the package</h4>
						<div className="divider"/>
						<div className="stages vertical fluid">
							<div className="stage">
								<div className="content">
									<div className="header">Keeping the version up to date</div>
									Ensure that you are running the latest stable version of Blossom UI by changing the version number of the dependancy in your <code>package.json</code> to <code>"latest"</code>
									<pre>
										<code className="json">
											{'"dependencies": {\n\t...\n\t"blossom-ui": "latest"\n\t...\n}'}
										</code>
									</pre>

								</div>
							</div>
							<div className="stage">
								<div className="content">
									<div className="header">Updating to the latest version via NPM</div>
									Update to the latest version using NPM, note that this also depends on how your dependancies are structured.
									<pre>
										<code className="cmake">
										{'$ npm install blossom-ui@latest'}
										</code>
									</pre>
									</div>
							</div>
							<div className="stage">
								<div className="content">
									<div className="header">Updating manually via .zip</div>
									If you have opted to download the .zip bundle from the start, just revisit Blossom's main website to get the latest version again.
								</div>
							</div>
						</div>
					</div>
					<div className="contain">
						<h4>Uninstalling Blossom</h4>
						<div className="divider"/>
						<div className="stages vertical fluid">
							<div className="stage">
								<div className="content">
									<div className="header">1. Uninstall package via NPM</div>
									Sorry to see you go, hope it's only a short goodbye.
									<pre>
										<code className="cmake">
										{'$ npm uninstall blossom-ui --save'}
										</code>
									</pre>
								</div>
							</div>
							<div className="stage">
								<div className="content">
									<div className="header">2. Delete the <b>blossom-ui</b> folder </div>
										Find the 'blossom-ui' folder in your working directory and delete it.
									</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Start
