import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<section className="hero clearfix borderless">
					<div className="contain">
						<h1>Getting started</h1>
						<h3>A guide into how to install and use Blossom</h3>
						<div className="button-group breakpoint-xs-stackable">
							<a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom" className="button medium outlined">View the Blossom UI repo</a>
							<a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom-Styleguide/raw/master/blossom.zip" className="button medium primary labeled"><i className="fa fa-arrow-down"/> Download</a>
						</div>
					</div>
				</section>
				<section className="installing">
					<div className="contain">
						<h4>Installation</h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>Using Blossom UI as a dependancy</strong></h6>
								<p>If you are using Blossom UI just as a dependancy, you can easily install the <a>ZIP</a> and just include it anywhere you need it.</p>

								<p>Once you&#39;ve downloaded it, you can easily include it in your HTML like so:</p>
							</div>

							<code className="text-purple">
								&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=<span className="text-teal">&quot;/path/to/folder/blossom.min.css&quot;</span>/&gt;
							</code>

							<br/>
							<br/>
							<code className="text-purple">
								&lt;script src=<span className="text-teal">&quot;/path/to/folder/blossom.js&quot;</span>&gt;&lt;/script&gt;
							</code>
						</div>
						<div className="module">
							<div className="explanation">
								<h6><strong>Install Gulp</strong></h6>
								<p>Blossom uses <a rel="noopener noreferrer" target="_blank" href="http://gulpjs.com/">Gulp</a> to provide command line scripts for building edited versions, making developers feel right at home.</p>

								<p>Gulp should be installed globally (recommended), or it will be installed alongside Blossom (not recommended).</p>
							</div>

							<code className="text-purple">
								npm install -g <span className="text-teal">gulp</span>
							</code>

						</div>
						<div className="module">
							<div className="explanation">
								<h6><strong>Install Blossom with Node.js</strong></h6>
								<p>If you have limited experience or are unfamiliar with Node, you can follow these steps or <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/download/">download from nodejs.org</a>.</p>

								<p>With Node you can easily install Blossom UI from the command line and save it to your package.json.</p>
							</div>

							<code className="text-purple">
								npm install <span className="text-teal">blossom-ui</span> --save
							</code>

						</div>
					</div>
					<div className="contain">
						<h4>Updating</h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>Updating Blossom via NPM</strong></h6>
								<p>With NPM, you can easily update to the newest released version of Blossom without interferring with your current version</p>
							</div>

							<code className="text-purple">
								npm update
							</code>
						</div>
					</div>
					<div className="contain">
						<h4>Uninstalling Blossom <i className="text-red fa fa-frown-o"/></h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>Uninstalling via NPM</strong></h6>
								<p>Sorry to see you go, but it will be a short goodbye. Just use the command below.</p>
							</div>

							<code className="text-purple">
								npm uninstall <span className="text-teal">blossom-ui</span> --save
							</code>
						</div>
					</div>
				</section>
			</div>
		)
	}
})
