import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Loaders extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Loaders">Loaders are used to indicate a state of progress</Title>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Simple loader</h6>
						<p>A <code>.loader.small.dark</code> on a non-dimmed background</p>
					</div>
					<div className="module">
						<img src="/images/wireframe.png" alt="" />
						<div className="hold"><div className="loader small dark"></div></div>
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Small inverted loader</h6>
						<p>An inverted dimmed module containing a centered <code>.loader.small</code></p>
					</div>
					<div className="module">
						<div className="dimmed"><div className="hold"><div className="loader small"></div></div></div>
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Standard inverted loader</h6>
							<p>An inverted dimmed module containing a centered default <code>.loader</code></p>
					</div>
					<div className="module">
						<div className="dimmed"><div className="hold"><div className="loader"></div></div></div>
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Large inverted loader</h6>
						<p>An inverted dimmed module containing a centered <code>.loader.large</code></p>
					</div>
					<div className="module">
						<div className="dimmed"><div className="hold"><div className="loader large"></div></div></div>
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Small loader</h6>
						<p>A dimmed module containing a centered <code>.loader.small.dark</code></p>
					</div>
					<div className="module">
						<div className="dimmed inverted"><div className="hold"><div className="loader small dark"></div></div></div>
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Standard loader</h6>
						<p>A dimmed module containing a centered <code>.loader.dark</code></p>
					</div>
					<div className="module">
						<div className="dimmed inverted"><div className="hold"><div className="loader dark"></div></div></div>
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Large loader</h6>
						<p>A dimmed module containing a centered <code>.loader.large.dark</code></p>
					</div>
					<div className="module">
						<div className="dimmed inverted"><div className="hold"><div className="loader large dark"></div></div></div>
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
						<img src="/images/wireframe.png" alt="" />
					</div>
				</div>
			</div>
		)
	}
}

export default Loaders
