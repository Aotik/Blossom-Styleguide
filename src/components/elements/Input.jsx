import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Input extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Input">A field to get a response from a user</Title>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Transparent inputs</h6>
						<p>An input with no background or border</p>
					</div>
					<div className="module collapsed">
						<div className="input transparent">
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Standard inputs</h6>
						<p>A standard input with a border</p>
					</div>
					<div className="module collapsed">
						<div className="input">
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Disabled inputs</h6>
						<p>A disabled input using the <code>.disabled</code> class</p>
					</div>
					<div className="module collapsed">
						<div className="input disabled">
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Disabled inputs</h6>
						<p>A disabled input using the <code>disabled</code> property</p>
					</div>
					<div className="module collapsed">
						<div className="input">
							<input disabled type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Input with a button</h6>
						<p>A standard input with an ajoined default button</p>
					</div>
					<div className="module collapsed">
						<div className="input action">
							<input type="text" name="name" placeholder="Search..."/>
							<a className="button">Search</a>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Input with an outlined button</h6>
						<p>A standard input with an ajoined default outlined button</p>
					</div>
					<div className="module collapsed">
						<div className="input action">
							<input type="text" name="name" placeholder="Search..."/>
							<a className="button outlined">Search</a>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Input with an icon button</h6>
						<p>A standard input with an ajoined icon button</p>
					</div>
					<div className="module collapsed">
						<div className="input action">
							<input type="text" name="name" placeholder="Search..."/>
							<a className="icon button"><i className="fa fa-search"></i></a>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Input with an left aligned button</h6>
						<p>A standard input with an ajoined left aligned button</p>
					</div>
					<div className="module collapsed">
						<div className="input action">
							<a className="button">Search</a>
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Input with a left aligned labeled button</h6>
						<p>A standard input with an ajoined left aligned, colored labeled button</p>
					</div>
					<div className="module collapsed">
						<div className="input action">
							<a className="button blue labeled">
								Copy
								<i className="fa fa-clone"></i>
							</a>
							<input type="text" name="name" value="http://short.url/123"/>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Input with a labeled button</h6>
						<p>A standard input with an ajoined colored labeled button</p>
					</div>
					<div className="module collapsed">
						<div className="input action">
							<input type="text" name="name" value="http://short.url/123"/>
							<a className="button blue labeled labeled-right">
								Copy
								<i className="fa fa-clone"></i>
							</a>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Input
