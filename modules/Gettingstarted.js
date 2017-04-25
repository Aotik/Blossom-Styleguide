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
							<a rel="noopener noreferrer" target="_blank" href="http://d1fb9glqs1l0dr.cloudfront.net/blossom-1.2.2.zip" className="button medium primary labeled"><i className="fa fa-arrow-down"/> Download ZIP</a>
						</div>
					</div>
				</section>
				<section className="installing">
					<div className="contain">
						<h4>Dependancies</h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>jQuery</strong></h6>
								<p>To get <b>Blossom JS</b> working correctly you will need to include the jQuery dependancy to your markup. You can download the latest version of jQuery by <a rel="noopener noreferrer" target="_blank" href="https://jquery.com/download/">downloading it directly</a> or you can use a <a rel="noopener noreferrer" target="_blank" href="https://www.jsdelivr.com/projects/jquery">CDN link</a> for the latest version.</p>
								<p><small><b>Recommended: </b>Use jquery.min.js in production as it is optimized for faster page load speeds</small></p>
							</div>
							<code className="text-teal">
								&lt;script src=<span className="text-primary">&quot;/path/to/jquery.min.js&quot;</span>&gt;&lt;/script&gt;
							</code>
						</div>
					</div>
					<div className="contain">
						<h4>Installation</h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>Install Gulp</strong></h6>
								<p>Blossom uses <a rel="noopener noreferrer" target="_blank" href="http://gulpjs.com/">Gulp</a> to provide command line scripts for building edited versions, making developers feel right at home.</p>

								<p>Gulp should be installed globally (recommended), or it will be installed alongside Blossom (not recommended).</p>
							</div>

							<code className="text-teal">
								npm install -g <span className="text-primary">gulp</span>
							</code>

						</div>
						<div className="module">
							<div className="explanation">
								<h6><strong>Install Blossom with Node.js</strong></h6>
								<p>If you have limited experience or are unfamiliar with Node, you can follow these steps or <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/download/">download from nodejs.org</a>.</p>

								<p>With Node you can easily install Blossom UI from the command line and save it to your package.json.</p>
							</div>

							<code className="text-teal">
								npm install <span className="text-primary">blossom-ui</span> --save
							</code>

						</div>
						<div className="module">
							<div className="explanation">
								<h6><strong>Including Blossom in HTML markup</strong></h6>
								<p>If you are using Blossom UI just as a dependancy, you can easily install the <a>ZIP</a> and just include it anywhere you need it.</p>

								<p>Once you&#39;ve downloaded it, you can easily include it in your HTML like so:</p>
							</div>

							<code className="text-teal">
								&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=<span className="text-primary">&quot;/path/to/folder/blossom.min.css&quot;</span>/&gt;
							</code>

							<br/>
							<br/>
							<code className="text-teal">
								&lt;script src=<span className="text-primary">&quot;/path/to/jquery.min.js&quot;</span>&gt;&lt;/script&gt;
							</code>
							<br/>
							<br/>
							<code className="text-teal">
								&lt;script src=<span className="text-primary">&quot;/js/blossom.min.js&quot;</span>&gt;&lt;/script&gt;
							</code>
						</div>
					</div>
					<div className="contain">
						<h4>Updating</h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>Updating Blossom via NPM</strong></h6>
								<p>Ensure that you are running the latest stable version of Blossom UI by changing the version number of the dependancy in your <code>package.json</code> to <code>"latest"</code></p>
							</div>
							<pre>
							<code className="text-teal">
								{'"dependencies": {\n\t...\n\t"blossom-ui": "latest"\n\t...\n}'}
							</code>
							</pre>
							<br/>
							<div className="explanation">
								<p>Update to the latest version using NPM, note that this also depends on how your dependancies are structured.</p>
							</div>
							<code className="text-teal">
								npm update
							</code>
						</div>
					</div>
					<div className="contain">
						<h4>Uninstalling</h4>
						<div className="divider"/>
						<div className="module">
							<div className="explanation">
								<h6><strong>Uninstalling via NPM</strong></h6>
								<p>Sorry to see you go, but it will be a short goodbye. Just use the command below.</p>
							</div>
							<code className="text-teal">
								npm uninstall <span className="text-primary">blossom-ui</span> --save
							</code>
						</div>
					</div>
				</section>
			</div>
		)
	}
})
