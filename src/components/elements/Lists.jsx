import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Lists extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Lists">A button indicates a possible user action</Title>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Unstyled lists</h6>
						<p>A list with no symbol for each item</p>
					</div>
					<div className="module collapsed">
						<ul className="list">
							<li className="item">Item 1</li>
							<li className="item">Item 2</li>
							<li className="item">Item 3</li>
							<li className="item">Item 4</li>
						</ul>
						<div className="footer">
						</div>
					</div>

				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Bulleted lists</h6>
						<p>A list styled with bullet points</p>
					</div>
					<div className="module collapsed">
						<ul className="list bulleted">
							<li className="item">Item 1</li>
							<li className="item">Item 2</li>
							<li className="item">Item 3</li>
							<ul className="list bulleted">
								<li className="item">Item 1</li>
								<li className="item">Item 2</li>
								<li className="item">Item 3</li>
								<li className="item">Item 4</li>
							</ul>
							<li className="item">Item 4</li>
						</ul>
					<div className="footer">
					</div>
				</div>
				</div>

				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Numbered lists</h6>
						<p>A numbered list structured by <code>div</code>tags</p>
					</div>
					<div className="module collapsed">
						<div className="list ordered">
							<div className="item">Item 1</div>
							<div className="item">Item 2</div>
							<div className="item">Item 3
							<div className="list ordered">
								<div className="item">Item 1</div>
								<div className="item">Item 2</div>
								<div className="item">Item 3</div>
							</div>
							</div>
							<div className="item">Item 4</div>
						</div>
					<div className="footer">
					</div>
				</div>
				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Numbered lists</h6>
						<p>A numbered list structured by <code>ol</code>tags</p>
					</div>
					<div className="module collapsed">
						<ol className="list ordered">
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3
							<ol className="list ordered">
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
							</ol>
							</li>
							<li>Item 4</li>
						</ol>
					<div className="footer">
					</div>
				</div>
				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Defined lists</h6>
						<p>A list with styling overidden by the <code>value</code>property</p>
					</div>
					<div className="module collapsed">
						<ol className="list ordered">
							<li value="*">Item 1</li>
							<li value="*">Item 2</li>
							<li value="*">Item 3
							<ol className="list ordered">
								<li value="-">Item 1</li>
								<li value="-">Item 2</li>
								<li value="-">Item 3</li>
							</ol>
							</li>
							<li value="*">Item 4</li>
						</ol>
					<div className="footer">
					</div>
				</div>
				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Vertical links list</h6>
						<p>A list of links laid out vertically</p>
					</div>
					<div className="module collapsed">
						<ul className="list links">
							<li className="item active"><a>Item 1</a></li>
							<li className="item"><a>Item 2</a></li>
							<li className="item"><a>Item 3</a></li>
							<li className="item"><a>Item 4</a></li>
						</ul>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Horizontal links list</h6>
						<p>A list of links laid out horizontally</p>
					</div>
					<div className="module collapsed">
						<ul className="list links horizontal">
							<li className="item active"><a>Item 1</a></li>
							<li className="item"><a>Item 2</a></li>
							<li className="item"><a>Item 3</a></li>
							<li className="item"><a>Item 4</a></li>
						</ul>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Headered lists</h6>
						<p>A list of items with a header</p>
					</div>
					<div className="module collapsed">
						<ul className="list">
							<li className="item">
								<div className="header">
									Item 1 Header
								</div>
								This is item 1 with a header!</li>
							<li className="item">
								<div className="header">
									Item 2 Header
								</div>
								This is item 2 with a header!</li>
							<li className="item">
								<a className="header">
									Item 2 Header
								</a>
								Headers can even be links!</li>
						</ul>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Divided lists</h6>
						<p>A list with items being divided by a border</p>
					</div>
					<div className="module collapsed">
						<ul className="list divided spaced">
							<li className="item">
								<i className="icon large fa fa-github"></i>
								<div className="content">
									<a className="header">
										Aotik/Blossom
									</a>
									Updated 22 seconds ago
								</div>
								</li>
							<li className="item">
								<i className="icon large fa fa-github"></i>
								<div className="content">
									<a className="header">
										Aotik/Blossom
									</a>
									Updated 22 seconds ago
								</div>
								</li>
							<li className="item">
								<i className="icon large fa fa-github"></i>
								<div className="content">
									<a className="header">
										Aotik/Blossom
									</a>
									Updated 22 seconds ago
								</div>
								</li>
						</ul>
						<div className="footer">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Lists
