import React from 'react'
import Home from './Home'
import Title from './Title'
import Highlight from 'react-highlight'
import { Link } from 'react-router'

export const elMain = React.createClass({
	render() {
		return (
			<div>{this.props.children || <div>Elements</div>}</div>
		)
	}
})

export const elHeader = React.createClass({
	render() {
		return (
			<div>Elements</div>
		)
	}
})

const elDefault = React.createClass({
	render() {
		return <div>Elements</div>
	}
})

export const elMessages = React.createClass({
	render() {
		return (
			<div>
				<Title title="Messages">A simple way to alert a user with a certain behaviour</Title>
				<div className="row example messages">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Headerless default message</h6>
						<p>A default message without a header</p>
					</div>
					<div className="module collapsed">
						<div className="message">
							<p>
								Our privacy policy has changed. <a>Click here</a> to view and accept the updated version.
							</p>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="message">\n\t<p>\n\t\tOur privacy policy has changed. <a>Click here</a> to view and\naccept the updated version.\n\t</p>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example messages">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Default message</h6>
						<p>A standard neutral message</p>
					</div>
					<div className="module collapsed">
						<div className="message">
							<h6>Subscribe!</h6>
							<p>
								Subscribe to our blog to get daily news updates straight to your inbox!
							</p>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="message">\n\t<h6>Subscribe!</h6>\n\t<p>\n\t\tSubscribe to our blog to get daily news updates straight to your inbox!\n\t</p>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example messages">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Information message</h6>
						<p>An information message to pass on a helpful tip</p>
					</div>
					<div className="module collapsed">
						<div className="message info">
							<h6>Did you know?</h6>
							<p>
								You might of noticed the rapid speed increase of our platform today! Yes, we are on version 3.0!
							</p>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="message info">\n\t<h6>Did you know?</h6>\n\t<p>\n\t\tYou might of noticed the rapid speed increase of our platform today! Yes, we are on version 3.0!\n\t</p>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example messages">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Warning message</h6>
						<p>A warning message to let the user know to take a precaution</p>
					</div>
					<div className="module collapsed">
						<div className="message warning">
							<h6>Scheduled maintenance</h6>
							<p>
								We have scheduled server maintenance between 04:00am - 09:00am so our platform will be down. We apologize for any inconvenience caused!
							</p>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="message warning">\n\t<h6>Scheduled maintenance</h6>\n\t<p>\n\t\tWe have scheduled server maintenance between 04:00am - 09:00am so our platform will be down. We apologize for any inconvenience caused!\n\t</p>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example messages">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Important message</h6>
						<p>An important message to warn the user of an error relating to an action</p>
					</div>
					<div className="module collapsed">
						<div className="message important">
							<h6>There were some issues with your submission</h6>
							<p>
								Your message exceeded the world limit. Please try re-sending the form by keeping to the 300 character limit.
							</p>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="message important">\n\t<h6>There were some issues with your submission</h6>\n\t<p>\n\t\tYour message exceeded the world limit. Please try re-sending the form by keeping to the 300 character limit.\n\t</p>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example messages">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Success message</h6>
						<p>A success message to promote a pleasant message</p>
					</div>
					<div className="module collapsed">
						<div className="message success">
							<h6>Coupon applied!</h6>
							<p>
								You have successfully added the coupon <strong>BLOSSOMROCKS</strong> to your order for a 20% discount.
							</p>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="message success">\n\t<h6>Coupon applied!</h6>\n\t<p>\n\t\tYou have successfully added the coupon <strong>BLOSSOMROCKS</strong> to your order for a 20% discount.\n\t</p>\n</div>'}
							</Highlight>
						</div>
					</div>
					</div>
				</div>
			)
		}
	})

export const elDropdown = React.createClass({
	componentDidMount: function() {
		$(document).ready(function() {
			$('.dropdown').dropdown();
		})
	},
	render() {
		return(
			<div>
				<Title title="Dropdown">A dropdown allows a user to select an option from a list of values</Title>
				<div className="row opening-message">
					<div className="message info">
						<h6>Dropdown utility</h6>
						<p>
							Learn more about using Blossom JS to initialise manipulate dropdowns <Link to="/utility">here</Link>
						</p>
					</div>
				</div>
				<div className="row example dropdowns">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Dropdown</h6>
						<p>Simple dropdown with a simple toggle</p>
					</div>
					<div className="module collapsed">
						<div className="dropdown">
							<a className="toggle">File <i className="fa fa-caret-down"/></a>
							<ul className="menu">
								<li><a>New...</a></li>
								<li><a>Open</a></li>
								<li><a>Open project folder</a></li>
								<li><a>Save as...</a></li>
							</ul>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="dropdown">\n\t<a class="toggle">File <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t</ul>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example dropdowns">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Dropdown features</h6>
						<p>Dropdowns can also have headers, dividers and icons within them</p>
					</div>
					<div className="module collapsed">
						<div className="dropdown">
							<a className="toggle">File &nbsp; <i className="fa fa-caret-down"/></a>
							<ul className="menu">
								<li className="header">Choose an action</li>
								<li><a>New...</a></li>
								<li><a>Open</a></li>
								<li><a>Open project folder</a></li>
								<li><a>Save as...</a></li>
								<li className="divider"></li>
								<li><a>Export file...</a></li>
								<li><a>Quick export</a></li>
								<li className="divider"></li>
								<li className="header">Share file</li>
								<li><a><i className="fa fa-facebook-official"/> Facebook</a></li>
								<li><a><i className="fa fa-twitter"/> Twitter</a></li>
								<li><a><i className="fa fa-linkedin-square"/> LinkedIn</a></li>
							</ul>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="dropdown">\n\t<a class="toggle">File &nbsp; <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li><a>Export file...</a></li>\n\t\t<li><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example dropdowns">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Dropdown toggles</h6>
						<p>Toggles can come in any shape or form</p>
					</div>
					<div className="module collapsed">
						<div className="stack">
							<div className="dropdown floating">
								<a className="toggle button">Menu</a>
								<ul className="menu">
									<li className="header">Choices</li>
									<li><a>Choice 1</a></li>
									<li><a>Choice 2</a></li>
									<li><a>Choice 3</a></li>
									<li><a>Choice 4</a></li>
								</ul>
							</div>
						</div>
						<div className="stack">
							<div className="dropdown floating">
								<div className="toggle button green labeled">
									<i className="fa fa-gift"></i>
									Select your free gift
								</div>
								<ul className="menu">
									<li className="header">Choices</li>
									<li><a>Choice 1</a></li>
									<li><a>Choice 2</a></li>
									<li><a>Choice 3</a></li>
									<li><a>Choice 4</a></li>
								</ul>
							</div>
						</div>
						<div className="stack">
							<div className="dropdown">
								<div className="toggle label teal">
									<i className="fa fa-home"></i>
									Select your address
								</div>
								<ul className="menu">
									<li className="header">Choices</li>
									<li><a>Choice 1</a></li>
									<li><a>Choice 2</a></li>
									<li><a>Choice 3</a></li>
									<li><a>Choice 4</a></li>
								</ul>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="dropdown floating">\n\t<a class="toggle button">Menu</a>\n\t<ul class="menu">\n\t\t<li class="header">Choices</li>\n\t\t<li><a>Choice 1</a></li>\n\t\t<li><a>Choice 2</a></li>\n\t\t<li><a>Choice 3</a></li>\n\t\t<li><a>Choice 4</a></li>\n\t</ul>\n</div>\n<div class="dropdown floating">\n\t<div class="toggle button green labeled">\n\t\t<i class="fa fa-gift"></i>\n\t\tSelect your free gift\n\t</div>\n\t<ul class="menu">\n\t\t<li class="header">Choices</li>\n\t\t<li><a>Choice 1</a></li>\n\t\t<li><a>Choice 2</a></li>\n\t\t<li><a>Choice 3</a></li>\n\t\t<li><a>Choice 4</a></li>\n\t</ul>\n</div>\n<div class="dropdown">\n\t<div class="toggle label">\n\t\t<i class="fa fa-home"></i>\n\t\tSelect your address\n\t</div>\n\t<ul class="menu">\n\t\t<li class="header">Choices</li>\n\t\t<li><a>Choice 1</a></li>\n\t\t<li><a>Choice 2</a></li>\n\t\t<li><a>Choice 3</a></li>\n\t\t<li><a>Choice 4</a></li>\n\t</ul>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example dropdowns">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Disabled</h6>
						<p>You can disable the dropdown altogether by targeting the toggle, or disable items in the menu individually</p>
					</div>
					<div className="module collapsed">
						<div className="stack">
							<div className="dropdown floating disabled">
								<a className="toggle button blue labeled labeled-right">
									Menu
									<i className="fa fa-caret-down"/>
								</a>
								<ul className="menu">
									<li className="header">Choose an action</li>
									<li><a>New...</a></li>
									<li><a>Open</a></li>
									<li><a>Open project folder</a></li>
									<li><a>Save as...</a></li>
									<li className="divider"></li>
									<li><a>Export file...</a></li>
									<li><a>Quick export</a></li>
									<li className="divider"></li>
									<li className="header">Share file</li>
									<li><a><i className="fa fa-facebook-official"/> Facebook</a></li>
									<li><a><i className="fa fa-twitter"/> Twitter</a></li>
									<li><a><i className="fa fa-linkedin-square"/> LinkedIn</a></li>
								</ul>
							</div>
						</div>
						<div className="stack">
							<div className="dropdown floating">
								<a className="toggle button blue labeled labeled-right">
									Menu
									<i className="fa fa-caret-down"/>
								</a>
								<ul className="menu">
									<li className="header">Choose an action</li>
									<li><a>New...</a></li>
									<li><a>Open</a></li>
									<li><a>Open project folder</a></li>
									<li><a>Save as...</a></li>
									<li className="divider"></li>
									<li className="disabled"><a>Export file...</a></li>
									<li className="disabled"><a>Quick export</a></li>
									<li className="divider"></li>
									<li className="header">Share file</li>
									<li><a><i className="fa fa-facebook-official"/> Facebook</a></li>
									<li><a><i className="fa fa-twitter"/> Twitter</a></li>
									<li><a><i className="fa fa-linkedin-square"/> LinkedIn</a></li>
								</ul>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="dropdown floating disabled">\n\t<a class="toggle button blue labeled labeled-right">\n\t\tMenu\n\t\t<i class="fa fa-caret-down"/>\n\t</a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li><a>Export file...</a></li>\n\t\t<li><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>\n<div class="dropdown floating">\n\t<a class="toggle button blue labeled labeled-right">\n\t\tMenu\n\t\t<i class="fa fa-caret-down"/>\n\t</a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="disabled"><a>Export file...</a></li>\n\t\t<li class="disabled"><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example dropdowns">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Right aligned dropdown</h6>
						<p>Dropdown menus can also be pushed to be flush with the right side</p>
					</div>
					<div className="module collapsed">
						<div className="dropdown right">
							<a className="toggle">File <i className="fa fa-caret-down"/></a>
							<ul className="menu">
								<li><a>New...</a></li>
								<li><a>Open</a></li>
								<li><a>Open project folder</a></li>
								<li><a>Save as...</a></li>
							</ul>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="dropdown right">\n\t<a class="toggle">File <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t</ul>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example dropdowns">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Upward dropdowns</h6>
						<p>Flip your dropdown to the top of the toggle using <code>.upward</code></p>
					</div>
					<div className="module collapsed">
						<div className="dropdown upward">
							<a className="toggle">File &nbsp; <i className="fa fa-caret-down"/></a>
							<ul className="menu">
								<li className="header">Choose an action</li>
								<li><a>New...</a></li>
								<li><a>Open</a></li>
								<li><a>Open project folder</a></li>
								<li><a>Save as...</a></li>
								<li className="divider"></li>
								<li><a>Export file...</a></li>
								<li><a>Quick export</a></li>
								<li className="divider"></li>
								<li className="header">Share file</li>
								<li><a><i className="fa fa-facebook-official"/> Facebook</a></li>
								<li><a><i className="fa fa-twitter"/> Twitter</a></li>
								<li><a><i className="fa fa-linkedin-square"/> LinkedIn</a></li>
							</ul>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="dropdown upward">\n\t<a class="toggle">File &nbsp; <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li><a>Export file...</a></li>\n\t\t<li><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const elInput = React.createClass({
	render() {
		return(
			<div>
				<Title title="Input">A field to get a response from a user</Title>
				<div className="row example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Transparent inputs</h6>
						<p>An input with no background or border</p>
					</div>
					<div className="module collapsed">
						<div className="input transparent">
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="input transparent">\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Standard inputs</h6>
						<p>A standard input with a border</p>
					</div>
					<div className="module collapsed">
						<div className="input">
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="input">\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Disabled inputs</h6>
						<p>A disabled input using the <code>.disabled</code> class</p>
					</div>
					<div className="module collapsed">
						<div className="input disabled">
							<input type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="input disabled">\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Disabled inputs</h6>
						<p>A disabled input using the <code>disabled</code> property</p>
					</div>
					<div className="module collapsed">
						<div className="input">
							<input disabled type="text" name="name" placeholder="Search..."/>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="input">\n\t<input disabled type="text" name="name" placeholder="Search..."/>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
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
							<Highlight className="html">
								{'<div class="input action">\n\t<input type="text" name="name" placeholder="Search..."/>\n\t<a class="button">Search</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
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
							<Highlight className="html">
								{'<div class="input action">\n\t<input type="text" name="name" placeholder="Search..."/>\n\t<a class="button outlined">Search</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
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
							<Highlight className="html">
								{'<div class="input action">\n\t<input type="text" name="name" placeholder="Search..."/>\n\t<a class="icon button"><i class="fa fa-search"></i></a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
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
							<Highlight className="html">
								{'<div class="input action">\n\t<a class="button">Search</a>\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
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
							<Highlight className="html">
								{'<div class="input action">\n\t<a class="button blue labeled">\n\t\tCopy\n\t\t<i class="fa fa-clone"></i>\n\t</a>\n\t<input type="text" name="name" value="http://short.url/123"/>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example inputs">
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
							<Highlight className="html">
								{'<div class="input action">\n\t<input type="text" name="name" value="http://short.url/123"/>\n\t<a class="button blue labeled labeled-right">\n\t\tCopy\n\t\t<i class="fa fa-clone"></i>\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
export const elTables = React.createClass({
		render() {
			return(
				<div>
					<Title title="Tables">Orgnanise data into something more readable</Title>
					<div className="row example tables">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Striped tables</h6>
							<p>Stripled tables with a single header using the <code>colspan</code> property</p>
						</div>
						<div className="module collapsed">
							<table className="striped table">
								<thead>
									<tr>
										<th colSpan="3">
											New files added
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<i className="fa fa-file-o"></i> logo.svg
										</td>
										<td>
											SVG
										</td>
										<td className="right aligned">
											2 hours ago
										</td>
									</tr>
									<tr>
										<td>
											<i className="fa fa-file-o"></i>
											app.js
										</td>
										<td>
											Javascript
										</td>
										<td className="right aligned">
											3 hours ago
										</td>
									</tr>
								</tbody>
							</table>
							<div className="footer">
								<Highlight className="html">
									{'<table class="striped table">\n\t<thead>\n\t\t<tr>\n\t\t\t<th colSpan="3">\n\t\t\t\tNew files added\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i> logo.svg\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tSVG\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t2 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i>\n\t\t\t\tapp.js\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tJavascript\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t3 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example tables">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Celled tables</h6>
							<p>Fully celled tables, horizontally and vertically</p>
						</div>
						<div className="module collapsed">
							<table className="table cells">
								<thead>
									<tr>
										<th>
											File name
										</th>
										<th>
											File type
										</th>
										<th>
											Date added
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<i className="fa fa-file-o"></i> logo.svg
										</td>
										<td>
											SVG
										</td>
										<td className="right aligned">
											2 hours ago
										</td>
									</tr>
									<tr>
										<td>
											<i className="fa fa-file-o"></i> app.js
										</td>
										<td>
											Javascript
										</td>
										<td className="right aligned">
											3 hours ago
										</td>
									</tr>
								</tbody>
							</table>
							<div className="footer">
								<Highlight className="html">
									{'<table class="table cells">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tFile name\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tFile type\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDate added\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i> logo.svg\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tSVG\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t2 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i> app.js\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tJavascript\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t3 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example tables">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Crowded tables</h6>
							<p>Tables will automatically adjust their cell sizes to accompany their content</p>
						</div>
						<div className="module collapsed">
							<table className="table cells">
								<thead>
									<tr>
										<th>
											Name
										</th>
										<th>
											Type
										</th>
										<th>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											Frog
										</td>
										<td>
											Amphibian
										</td>
										<td>
											Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.
										</td>
									</tr>
									<tr>
										<td>
											Duck
										</td>
										<td>
											Anatidae
										</td>
										<td>
											Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.
										</td>
									</tr>
								</tbody>
							</table>
							<div className="footer">
								<Highlight className="html">
									{'<table class="table cells">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tType\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tFrog\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAmphibian\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tFrogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDuck\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAnatidae\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tDuck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example tables">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Simple tables</h6>
							<p>Simple tables have no background color and only horizontal borders</p>
						</div>
						<div className="module collapsed">
							<table className="table simple">
								<thead>
									<tr>
										<th>
											Name
										</th>
										<th>
											Type
										</th>
										<th>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											Frog
										</td>
										<td>
											Amphibian
										</td>
										<td>
											Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.
										</td>
									</tr>
									<tr>
										<td>
											Duck
										</td>
										<td>
											Anatidae
										</td>
										<td>
											Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.
										</td>
									</tr>
								</tbody>
							</table>
							<div className="footer">
								<Highlight className="html">
									{'<table class="table simple">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tType\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tFrog\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAmphibian\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tFrogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDuck\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAnatidae\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tDuck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example tables">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Basic tables</h6>
							<p>Basic tables convey simple information and is the most basic variation of a table</p>
						</div>
						<div className="module collapsed">
							<table className="table basic">
								<thead>
									<tr>
										<th>
											Name
										</th>
										<th>
											Type
										</th>
										<th>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											Frog
										</td>
										<td>
											Amphibian
										</td>
										<td>
											Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.
										</td>
									</tr>
									<tr>
										<td>
											Duck
										</td>
										<td>
											Anatidae
										</td>
										<td>
											Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.
										</td>
									</tr>
								</tbody>
							</table>
							<div className="footer">
								<Highlight className="html">
									{'<table class="table basic">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tType\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tFrog\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAmphibian\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tFrogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDuck\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAnatidae\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tDuck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>'}
								</Highlight>
							</div>
						</div>
					</div>
				</div>
			)
		}
})
export const elLabels = React.createClass({
		render() {
			return(
				<div>
					<Title title="Labels">A button indicates a possible user action</Title>
					<div className="row example labels">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Default labels</h6>
							<p>Standard grey labels</p>
						</div>
						<div className="module collapsed">
							<div className="label">
								Your reservation is ready
							</div>
							<div className="footer">
								<Highlight className="html">
									{'<div class="label">\n\tYour reservation is ready\n</div>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example labels">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Labels with icons</h6>
							<p>A label with visual aid</p>
						</div>
						<div className="module collapsed">
							<div className="label">
								<i className="fa fa-envelope"></i>
								You have 34 unread mail
							</div>
							<div className="footer">
								<Highlight className="html">
									{'<div class="label">\n\t<i class="fa fa-envelope"></i>\n\tYou have 34 unread mail\n</div>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example labels">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Labeled labels</h6>
							<p>A label with its own label!</p>
						</div>
						<div className="module collapsed">
							<div className="label pink">
								Adrianne
								<div className="detail">Teacher</div>
							</div>
							<div className="label blue">
								Your package has arrived
								<div className="detail">13:49PM</div>
							</div>
							<div className="label red">
								Comments are here!
								<div className="detail">New!</div>
							</div>
							<div className="footer">
								<Highlight className="html">
									{'<div class="label pink">\n\tAdrianne\n\t<div class="detail">Teacher</div>\n</div>\n<div class="label blue">\n\tYour package has arrived\n\t<div class="detail">13:49PM</div>\n</div>\n<div class="label red">\n\tComments are here!\n\t<div class="detail">New!</div>\n</div>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example labels">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Labels with links</h6>
							<p>Quick link straight from a label</p>
						</div>
						<div className="module collapsed">
							<div className="label">
								<i className="fa fa-envelope"></i>
								14
								<a>View mail</a>
							</div>
							<div className="footer">
								<Highlight className="html">
									{'<div class="label">\n\t<i class="fa fa-envelope"></i>\n\t14\n\t<a>View mail</a>\n</div>'}
								</Highlight>
							</div>
						</div>
					</div>
					<div className="row example labels">
						<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
							<h6>Circular labels</h6>
							<p>Rounded off labels, great for showing stats</p>
						</div>
						<div className="module collapsed">
							<div className="label red circular">
								1
							</div>
							<div className="label orange circular">
								2
							</div>
							<div className="label yellow circular">
								3
							</div>
							<div className="label green circular">
								4
							</div>
							<div className="label teal circular">
								5
							</div>
							<div className="label blue circular">
								6
							</div>
							<div className="label violet circular">
								7
							</div>
							<div className="label purple circular">
								8
							</div>
							<div className="label pink circular">
								9
							</div>
							<div className="label brown circular">
								a
							</div>
							<div className="label grey circular">
								b
							</div>
							<div className="label black circular">
								c
							</div>
							<div className="footer">
								<Highlight className="html">
									{'<div className="label red circular">\n\t1\n</div>\n<div className="label orange circular">\n\t2\n</div>\n<div className="label yellow circular">\n\t3\n</div>\n<div className="label green circular">\n\t4\n</div>\n<div className="label teal circular">\n\t5\n</div>\n<div className="label blue circular">\n\t6\n</div>\n<div className="label violet circular">\n\t7\n</div>\n<div className="label purple circular">\n\t8\n</div>\n<div className="label pink circular">\n\t9\n</div>\n<div className="label brown circular">\n\ta\n</div>\n<div className="label grey circular">\n\tb\n</div>\n<div className="label black circular">\n\tc\n</div>'}
								</Highlight>
							</div>
						</div>
					</div>
				</div>
			)
		}
})

export const elImages = React.createClass({
	render() {
		return(
			<div>
				<Title title="Images">A button indicates a possible user action</Title>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Top aligned image</h6>
						<p>Align content to the top when inline with an image</p>
					</div>
					<div className="image-tiny align-top">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
					<span>Top aligned</span>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Middle aligned image</h6>
						<p>Align content to the middle when inline with an image</p>
					</div>
					<div className="image-tiny align-middle">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
					<span>Middle aligned</span>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Bottom aligned image</h6>
						<p>Align content to the bottom when inline with an image</p>
					</div>
					<div className="image-tiny align-bottom">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
					<span>Bottom aligned</span>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Mini sized image</h6>
						<p>Forces the image to be sized to <code>35px</code></p>
					</div>
					<div className="image-mini">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Tiny sized image</h6>
						<p>Forces the image to be sized to <code>70px</code></p>
					</div>
					<div className="image-tiny">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Small sized image</h6>
						<p>Forces the image to be sized to <code>140px</code></p>
					</div>
					<div className="image-small">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Medium sized image</h6>
						<p>Forces the image to be sized to <code>280px</code></p>
					</div>
					<div className="image-medium">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Large sized image</h6>
						<p>Forces the image to be sized to <code>400px</code></p>
					</div>
					<div className="image-large">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Big sized image</h6>
						<p>Forces the image to be sized to <code>600px</code></p>
					</div>
					<div className="image-big">
						<img src="/examples/365cons_placeholder.jpg" alt="" />
					</div>
				</div>
				<div className="row example images">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Other sized images</h6>
						<p>Blossom also supports larger types of images, <code>Huge</code> and <code>Massive</code> are sized <code>840px</code> and <code>940px</code> respectively</p>
					</div>
				</div>
			</div>
		)
	}
})

export const elComments = React.createClass({
	render() {
		return(
			<div>
				<Title title="Comments">Comments display user feedback on a website</Title>
				<div className="row example comments">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Full feature comments</h6>
						<p>Comments with headers, content and metadata are classified as full feature comments</p>
					</div>
					<div className="module collapsed">
						<div className="comment">
							<div className="avatar">
								<img src="/examples/365cons_otter.jpg" alt="" />
							</div>
							<div className="content">
								<a className="creator">Johnny Grimes</a>
								<span className="meta">Wednesday at 4:32PM</span>
								<p className="text">
									Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
								</p>
								<div className="actions">
									<a className="action">Reply</a>
									<a className="action">Share</a>
									<a className="action">Delete</a>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="comment">\n\t<div class="avatar">\n\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t</div>\n\t<div class="content">\n\t\t<a class="creator">Johnny Grimes</a>\n\t\t<span class="meta">Wednesday at 4:32PM</span>\n\t\t<p class="text">\n\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business,\nlooking forward to working with you all.\n\t\t</p>\n\t\t<div class="actions">\n\t\t\t<a class="action">Reply</a>\n\t\t\t<a class="action">Share</a>\n\t\t\t<a class="action">Delete</a>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example comments">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Minimal comments</h6>
						<p>Minimal comments do not contain actions or metadata</p>
					</div>
					<div className="module collapsed">
						<div className="comment">
							<div className="avatar">
								<img src="/examples/365cons_otter.jpg" alt="" />
							</div>
							<div className="content">
								<a className="creator">Johnny Grimes</a>
								<p className="text">
									Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
								</p>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="comment">\n\t<div class="avatar">\n\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t</div>\n\t<div class="content">\n\t\t<a class="creator">Johnny Grimes</a>\n\t\t<p class="text">\n\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business,\nlooking forward to working with you all.\n\t\t</p>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example comments">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Comment replies</h6>
						<p>Replies to comments are indented inwards</p>
					</div>
					<div className="module collapsed">
						<div className="comment">
							<div className="avatar">
								<img src="/examples/365cons_dino.jpg" alt="" />
							</div>
							<div className="content">
								<a className="creator">Isabelle Jenkins</a>
								<span className="meta">Wednesday at 5:17PM</span>
								<p className="text">
									Welcome Johnny, good to have you onboard.
								</p>
								<div className="actions">
									<a className="action">Reply</a>
								</div>
								<div className="replies">
									<div className="comment">
										<div className="avatar">
											<img src="/examples/365cons_otter.jpg" alt="" />
										</div>
										<div className="content">
											<a className="creator">Johnny Grimes</a>
											<span className="meta">Thursday at 8:28AM</span>
											<span className="meta"></span>
											<p className="text">
												Thank you Isabelle!
											</p>
											<div className="actions">
												<a className="action">Reply</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="comment">\n\t<div class="avatar">\n\t\t<img src="/examples/365cons_dino.jpg" alt="" />\n\t</div>\n\t<div class="content">\n\t\t<a class="creator">Isabelle Jenkins</a>\n\t\t<span class="meta">Wednesday at 5:17PM</span>\n\t\t<p class="text">\n\t\t\tWelcome Johnny, good to have you onboard.\n\t\t</p>\n\t\t<div class="actions">\n\t\t\t<a class="action">Reply</a>\n\t\t</div>\n\t\t<div class="replies">\n\t\t\t<div class="comment">\n\t\t\t\t<div class="avatar">\n\t\t\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t\t\t</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t\t\t<span class="meta">Thursday at 8:28AM</span>\n\t\t\t\t\t<span class="meta"></span>\n\t\t\t\t\t<p class="text">\n\t\t\t\t\t\tThank you Isabelle!\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="actions">\n\t\t\t\t\t\t<a class="action">Reply</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example forum">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Embedded reply</h6>
						<p>Replies to a specific comment are indented within a comment</p>
					</div>
					<div className="module collapsed">
						<div className="comments">
							<div className="comment">
								<div className="avatar">
									<img src="/examples/365cons_otter.jpg" alt="" />
								</div>
								<div className="content">
									<a className="creator">Johnny Grimes</a>
									<span className="meta">Wednesday at 4:32PM</span>
									<p className="text">
										Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
									</p>
									<div className="actions">
										<a className="action active">Reply</a>
										<a className="action">Share</a>
										<a className="action">Hide</a>
									</div>
									<div className="reply">
										<div className="input">
											<textarea name="reply"></textarea>
										</div>
										<div className="group">
											<div className="submit button blue labeled">
												<i className="fa fa-edit"></i>
												Send reply
											</div>
											<div className="discard button default float-right">
												Discard
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="comments">\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t<span class="meta">Wednesday at 4:32PM</span>\n\t\t\t<p class="text">\n\t\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action active">Reply</a>\n\t\t\t\t<a class="action">Share</a>\n\t\t\t\t<a class="action">Hide</a>\n\t\t\t</div>\n\t\t\t<div class="reply">\n\t\t\t\t<div class="input">\n\t\t\t\t\t<textarea name="reply"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class="group">\n\t\t\t\t\t<div class="submit button blue labeled">\n\t\t\t\t\t\t<i class="fa fa-edit"></i>\n\t\t\t\t\t\tSend reply\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="discard button default float-right">\n\t\t\t\t\t\tDiscard\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example comments">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Full width reply</h6>
						<p>Replies to a comment thread take up the width of a container</p>
					</div>
					<div className="module collapsed">
						<div className="comments">
							<div className="comment">
								<div className="avatar">
									<img src="/examples/365cons_otter.jpg" alt="" />
								</div>
								<div className="content">
									<a className="creator">Johnny Grimes</a>
									<span className="meta">Wednesday at 4:32PM</span>
									<p className="text">
										Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
									</p>
									<div className="actions">
										<a className="action">Reply</a>
									</div>
								</div>
							</div>
							<div className="comment">
								<div className="avatar">
									<img src="/examples/365cons_dino.jpg" alt="" />
								</div>
								<div className="content">
									<a className="creator">Isabelle Jenkins</a>
									<span className="meta">Wednesday at 5:17PM</span>z
									<p className="text">
										Welcome Johnny, good to have you onboard.
									</p>
									<div className="actions">
										<a className="action">Reply</a>
									</div>
									<div className="replies">
										<div className="comment">
											<div className="avatar">
												<img src="/examples/365cons_otter.jpg" alt="" />
											</div>
											<div className="content">
												<a className="creator">Johnny Grimes</a>
												<span className="meta">Thursday at 8:28AM</span>
												<span className="meta"></span>
												<p className="text">
													Thank you Isabelle!
												</p>
												<div className="actions">
													<a className="action">Reply</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="comment">
								<div className="avatar">
									<img src="/examples/365cons_panda.jpg" alt="" />
								</div>
								<div className="content">
									<a className="creator">Stuee Brown</a>
									<span className="meta">Friday at 10:36AM</span>
									<p className="text">
										What&#39;s up Johnny!
									</p>
									<div className="actions">
										<a className="action">Reply</a>
									</div>
								</div>
							</div>
							<div className="reply">
								<div className="input">
									<textarea name="reply"></textarea>
								</div>
								<div className="group">
									<div className="submit button blue labeled">
										<i className="fa fa-edit"></i>
										Send reply
									</div>
									<div className="discard button default float-right">
										Discard
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="comments">\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t<span class="meta">Wednesday at 4:32PM</span>\n\t\t\t<p class="text">\n\t\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action">Reply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_dino.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Isabelle Jenkins</a>\n\t\t\t<span class="meta">Wednesday at 5:17PM</span>\n\t\t\t<p class="text">\n\t\t\t\tWelcome Johnny, good to have you onboard.\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action">Reply</a>\n\t\t\t</div>\n\t\t\t<div class="replies">\n\t\t\t\t<div class="comment">\n\t\t\t\t\t<div class="avatar">\n\t\t\t\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t\t\t\t<span class="meta">Thursday at 8:28AM</span>\n\t\t\t\t\t\t<span class="meta"></span>\n\t\t\t\t\t\t<p class="text">\n\t\t\t\t\t\t\tThank you Isabelle!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class="actions">\n\t\t\t\t\t\t\t<a class="action">Reply</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_panda.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Stuee Brown</a>\n\t\t\t<span class="meta">Friday at 10:36AM</span>\n\t\t\t<p class="text">\n\t\t\t\tWhat&#39;s up Johnny!\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action">Reply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="reply">\n\t\t<div class="input">\n\t\t\t<textarea name="reply"></textarea>\n\t\t</div>\n\t\t<div class="group">\n\t\t\t<div class="submit button blue labeled">\n\t\t\t\t<i class="fa fa-edit"></i>\n\t\t\t\tSend reply\n\t\t\t</div>\n\t\t\t<div class="discard button default float-right">\n\t\t\t\tDiscard\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const elStages = React.createClass({
	render() {
		return(
			<div>
				<Title title="Stages">A button indicates a possible user action</Title>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Basic stage</h6>
						<p>A single stage with a description</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage">
								<div className="content">
									Shipping
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage">\n\t\t<div class="content">\n\t\t\tShipping\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Headered stage</h6>
						<p>A single stage can also contain a header</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage">
								<div className="content">
									<div className="header">
										Shipment
									</div>
									Finalise your items
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage">\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Disabled stage</h6>
						<p>A disabled stage is greyed out for the user</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage disabled">
								<div className="content">
									<div className="header">
										Add-ons
									</div>
									Not applicable with your order
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage disabled">\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tAdd-ons\n\t\t\t</div>\n\t\t\tNot applicable with your order\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Complete stage</h6>
						<p>A stage with a completed state</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage completed">
								<div className="icon">
									<i className="fa fa-check"></i>
								</div>
								<div className="content">
									<div className="header">
										Billing
									</div>
									Enter billing information
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tBilling\n\t\t\t</div>\n\t\t\tEnter billing information\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Active stage</h6>
						<p>A stage with an active state</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage active">
								<div className="icon">
									<i className="fa fa-credit-card"></i>
								</div>
								<div className="content">
									<div className="header">
										Billing
									</div>
									Enter billing information
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-credit-card"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tBilling\n\t\t\t</div>\n\t\t\tEnter billing information\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Grouped stages</h6>
						<p>Grouped stages allow the user to follow a path to the final stage by activating each one along the way</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage">
								<div className="icon">
									<i className="fa fa-truck"></i>
								</div>
								<div className="content">
									<div className="header">
										Shipment
									</div>
									Finalise your items
								</div>
							</div>
							<div className="stage active">
								<div className="icon">
									<i className="fa fa-credit-card"></i>
								</div>
								<div className="content">
									<div className="header">
										Payment
									</div>
									Enter your billing details
								</div>
							</div>
							<div className="stage disabled">
								<div className="icon">
									<i className="fa fa-check"></i>
								</div>
								<div className="content">
									<div className="header">
										Confirmation
									</div>
									Verify order details
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-truck"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-credit-card"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tPayment\n\t\t\t</div>\n\t\t\tEnter your billing details\n\t\t</div>\n\t</div>\n\t<div class="stage disabled">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tConfirmation\n\t\t\t</div>\n\t\t\tVerify order details\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Completed stages</h6>
						<p>Completed stages show the user that the stage has been completed and does not need revisiting</p>
					</div>
					<div className="module collapsed">
						<div className="stages">
							<div className="stage completed">
								<div className="icon">
									<i className="fa fa-check"></i>
								</div>
								<div className="content">
									<div className="header">
										Shipment
									</div>
									Finalise your items
								</div>
							</div>
							<div className="stage completed">
								<div className="icon">
									<i className="fa fa-check"></i>
								</div>
								<div className="content">
									<div className="header">
										Payment
									</div>
									Enter your billing details
								</div>
							</div>
							<div className="stage active">
								<div className="icon">
									<i className="fa fa-info"></i>
								</div>
								<div className="content">
									<div className="header">
										Confirmation
									</div>
									Verify your final order
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages">\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tPayment\n\t\t\t</div>\n\t\t\tEnter your billing details\n\t\t</div>\n\t</div>\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-info"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tConfirmation\n\t\t\t</div>\n\t\t\tVerify your final order\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Vertical stages</h6>
						<p>Grouped stages can also be vertical aligned</p>
					</div>
					<div className="module collapsed">
						<div className="stages vertical">
							<div className="stage completed">
								<div className="icon">
									<i className="fa fa-check"></i>
								</div>
								<div className="content">
									<div className="header">
										Shipment
									</div>
									Finalise your items
								</div>
							</div>
							<div className="stage completed">
								<div className="icon">
									<i className="fa fa-check"></i>
								</div>
								<div className="content">
									<div className="header">
										Payment
									</div>
									Enter your billing details
								</div>
							</div>
							<div className="stage active">
								<div className="icon">
									<i className="fa fa-info"></i>
								</div>
								<div className="content">
									<div className="header">
										Confirmation
									</div>
									Verify your final order
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="stages vertical">\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tPayment\n\t\t\t</div>\n\t\t\tEnter your billing details\n\t\t</div>\n\t</div>\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-info"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tConfirmation\n\t\t\t</div>\n\t\t\tVerify your final order\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const elLoaders = React.createClass({
	render() {
		return(
			<div>
				<Title title="Loaders">Loaders are used to indicate a state of progress</Title>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Simple loader</h6>
						<p>A <code>.loader.small.dark</code> on a non-dimmed background</p>
					</div>
					<div className="module">
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
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
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Standard inverted loader</h6>
							<p>An inverted dimmed module containing a centered default <code>.loader</code></p>
					</div>
					<div className="module">
						<div className="dimmed"><div className="hold"><div className="loader"></div></div></div>
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Large inverted loader</h6>
						<p>An inverted dimmed module containing a centered <code>.loader.large</code></p>
					</div>
					<div className="module">
						<div className="dimmed"><div className="hold"><div className="loader large"></div></div></div>
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Small loader</h6>
						<p>A dimmed module containing a centered <code>.loader.small.dark</code></p>
					</div>
					<div className="module">
						<div className="dimmed inverted"><div className="hold"><div className="loader small dark"></div></div></div>
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Standard loader</h6>
						<p>A dimmed module containing a centered <code>.loader.dark</code></p>
					</div>
					<div className="module">
						<div className="dimmed inverted"><div className="hold"><div className="loader dark"></div></div></div>
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
					</div>
				</div>
				<div className="row example loaders">
					<div className="explanation">
						<h6>Large loader</h6>
						<p>A dimmed module containing a centered <code>.loader.large.dark</code></p>
					</div>
					<div className="module">
						<div className="dimmed inverted"><div className="hold"><div className="loader large dark"></div></div></div>
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
						<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png" alt="" />
					</div>
				</div>
			</div>
		)
	}
})

export const elCards = React.createClass({
	render() {
		return(
			<div>
				<Title title="Cards">A button indicates a possible user action</Title>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Full cards</h6>
						<p>Full cards contain an image, title, subtitle, description and a footer</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card">
								<div className="header image">
									<img src="../examples/365cons_pinata.jpg" alt="" />
								</div>
								<div className="content">
									<h6 className="header">
										Jessie
									</h6>
									<div className="sub">
										Sassy pi&ntilde;ata
									</div>
									<p>
										Please don&#39;t just friend me so you can hit me, I&#39;ll just hand over the candy, I swear.
									</p>
								</div>
								<div className="content footer">
									<div className="float-left">
										<i className="fa fa-users"></i>
										34 friends
									</div>
									<div className="float-right">
										Joined 2 days ago
									</div>
								</div>
							</div>
							<div className="card">
								<div className="header image">
									<img src="../examples/365cons_cow.jpg" alt="" />
								</div>
								<div className="content">
									<h6 className="header">
										Wally
									</h6>
									<div className="sub">
										Happy cow
									</div>
									<p>
										Don&#39;t know why people are scared of me... I&#39;m just your typical friendly neighbour.
									</p>
								</div>
								<div className="content footer">
									<div className="float-left">
										<i className="fa fa-users"></i>
										6 friends
									</div>
									<div className="float-right">
										Joined 3 weeks ago
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="cards">\n\t<div class="card">\n\t\t<div class="header image">\n\t\t\t<img src="../examples/365cons_pinata.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tJessie\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tSassy pi&ntilde;ata\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tPlease don&#39;t just friend me so you can hit me, I&#39;ll just hand over the candy, I swear.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="content footer">\n\t\t\t<div class="float-left">\n\t\t\t\t<i class="fa fa-users"></i>\n\t\t\t\t34 friends\n\t\t\t</div>\n\t\t\t<div class="float-right">\n\t\t\t\tJoined 2 days ago\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="card">\n\t\t<div class="header image">\n\t\t\t<img src="../examples/365cons_cow.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tWally\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tHappy cow\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tDon&#39;t know why people are scared of me... I&#39;m just your typical friendly neighbour.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="content footer">\n\t\t\t<div class="float-left">\n\t\t\t\t<i class="fa fa-users"></i>\n\t\t\t\t6 friends\n\t\t\t</div>\n\t\t\t<div class="float-right">\n\t\t\t\tJoined 3 weeks ago\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Action cards</h6>
						<p>A card can be used to display information as well as list a call to action</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card">
								<div className="content">
									<h6 className="header">
										Can&#39;t log in!
									</h6>
									<div className="sub">
										Created by Michelle
									</div>
									<p>
										There is an issue with logging in to my account. I have already tried resetting the password.
									</p>
								</div>
								<div className="content footer button">
									View issue
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="cards">\n\t<div class="card">\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tCan&#39;t log in!\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tCreated by Michelle\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tThere is an issue with logging in to my account. I have already tried resetting the password.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="content footer button">\n\t\t\tView issue\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Basic cards</h6>
						<p>Basic cards are used to display simple information</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card">
								<div className="content">
									<h6 className="header">
										Koi
									</h6>
									<div className="sub">
										Fish
									</div>
									<p>
										Koi or more specifically nishikigoi, are ornamental varieties of domesticated common carp that are kept for decorative purposes in outdoor koi ponds or water gardens.
									</p>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="cards">\n\t<div class="card">\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tKoi\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tFish\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tKoi or more specifically nishikigoi, are ornamental varieties of domesticated common carp that are kept for decorative purposes in outdoor koi ponds or water gardens.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Fluid cards</h6>
						<p>Cards can also take up the width of the container by adding the <code>fluid</code> class</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card fluid">
								<div className="content">
									<h6 className="header">
										Peafowl
									</h6>
									<a className="sub">
										https://en.wikipedia.org/wiki/Peafowl
									</a>
									<p>
										The Peafowl include two Asiatic bird species (the blue or Indian peafowl originally of India and Sri Lanka and the green peafowl of Myanmar, Indochina, and Java) and one African species (the Congo peafowl native only to the Congo Basin) of bird in the genera Pavo and Afropavo of the Phasianidae family, the pheasants and their allies, known for the male&#39;s piercing call and, among the Asiatic species, his extravagant eye-spotted tail covert feathers which he displays as part of a courtship ritual. The term peacock is properly reserved for the male; the female is known as a peahen, and the immature offspring are sometimes called peachicks.
									</p>
								</div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="cards">\n\t<div class="card fluid">\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tPeafowl\n\t\t\t</h6>\n\t\t\t<a class="sub">\n\t\t\t\thttps://en.wikipedia.org/wiki/Peafowl\n\t\t\t</a>\n\t\t\t<p>\n\t\t\t\tThe Peafowl include two Asiatic bird species (the blue or Indian peafowl originally of India and Sri Lanka and the green peafowl of Myanmar, Indochina, and Java) and one African species (the Congo peafowl native only to the Congo Basin) of bird in the genera Pavo and Afropavo of the Phasianidae family, the pheasants and their allies, known for the male&#39;s piercing call and, among the Asiatic species, his extravagant eye-spotted tail covert feathers which he displays as part of a courtship ritual. The term peacock is properly reserved for the male; the female is known as a peahen, and the immature offspring are sometimes called peachicks.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
export const elLists = React.createClass({
	render() {
		return(
			<div>
				<Title title="Lists">A button indicates a possible user action</Title>
				<div className="row show-lists example">
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
							<Highlight className="html">
								{'<ul class="list">\n\t<li class="item">Item 1</li>\n\t<li class="item">Item 2</li>\n\t<li class="item">Item 3</li>\n\t<li class="item">Item 4</li>\n</ul>'}
							</Highlight>
						</div>
					</div>

				</div>
				<div className="row show-lists example">
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
						<Highlight className="html">
							{'<ul class="list bulleted">\n\t<li class="item">Item 1</li>\n\t<li class="item">Item 2</li>\n\t<li class="item">Item 3</li>\n\t<ul class="list bulleted">\n\t\t<li class="item">Item 1</li>\n\t\t<li class="item">Item 2</li>\n\t\t<li class="item">Item 3</li>\n\t\t<li class="item">Item 4</li>\n\t</ul>\n\t<li class="item">Item 4</li>\n</ul>'}
						</Highlight>
					</div>
				</div>
				</div>
				<div className="row show-lists example">
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
						<Highlight className="html">
							{'<div className="list ordered">\n\t<div className="item">Item 1</div>\n\t<div className="item">Item 2</div>\n\t<div className="item">Item 3\n\t<div className="list ordered">\n\t\t<div className="item">Item 1</div>\n\t\t<div className="item">Item 2</div>\n\t\t<div className="item">Item 3</div>\n\t</div>\n\t</div>\n\t<div className="item">Item 4</div>\n</div>'}
						</Highlight>
					</div>
				</div>
				</div>
				<div className="row show-lists example">
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
						<Highlight className="html">
							{'<ol class="list ordered">\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n\t<li>Item 3\n\t<ol class="list ordered">\n\t\t<li>Item 1</li>\n\t\t<li>Item 2</li>\n\t\t<li>Item 3</li>\n\t</ol>\n\t</li>\n\t<li>Item 4</li>\n</ol>'}
						</Highlight>
					</div>
				</div>
				</div>
				<div className="row show-lists example">
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
						<Highlight className="html">
							{'<ol class="list ordered">\n\t<li value="*">Item 1</li>\n\t<li value="*">Item 2</li>\n\t<li value="*">Item 3\n\t<ol class="list ordered">\n\t\t<li value="-">Item 1</li>\n\t\t<li value="-">Item 2</li>\n\t\t<li value="-">Item 3</li>\n\t</ol>\n\t</li>\n\t<li value="*">Item 4</li>\n</ol>'}
						</Highlight>
					</div>
				</div>
				</div>
				<div className="row show-lists example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Links lists</h6>
						<p>A list of horizontal links</p>
					</div>
					<div className="module collapsed">
						<ul className="list links">
							<li className="item active"><a>Item 1</a></li>
							<li className="item"><a>Item 2</a></li>
							<li className="item"><a>Item 3</a></li>
							<li className="item"><a>Item 4</a></li>
						</ul>
						<div className="footer">
							<Highlight className="html">
								{'<ul class="list links">\n\t<li class="item active"><a>Item 1</a></li>\n\t<li class="item"><a>Item 2</a></li>\n\t<li class="item"><a>Item 3</a></li>\n\t<li class="item"><a>Item 4</a></li>\n</ul>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row show-lists example">
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
							<Highlight className="html">
								{'<ul class="list">\n\t<li class="item">\n\t\t<div class="header">\n\t\t\tItem 1 Header\n\t\t</div>\n\t\tThis is item 1 with a header!</li>\n\t<li class="item">\n\t\t<div class="header">\n\t\t\tItem 2 Header\n\t\t</div>\n\t\tThis is item 2 with a header!</li>\n\t<li class="item">\n\t\t<a class="header">\n\t\t\tItem 2 Header\n\t\t</a>\n\t\tHeaders can even be links!</li>\n</ul>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row show-lists example">
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
							<Highlight className="html">
								{'<ul class="list divided spaced">\n\t<li class="item">\n\t\t<i class="icon large fa fa-github"></i>\n\t\t<div class="content">\n\t\t\t<a class="header">\n\t\t\t\tAotik/Blossom\n\t\t\t</a>\n\t\t\tUpdated 22 seconds ago\n\t\t</div>\n\t\t</li>\n\t<li class="item">\n\t\t<i class="icon large fa fa-github"></i>\n\t\t<div class="content">\n\t\t\t<a class="header">\n\t\t\t\tAotik/Blossom\n\t\t\t</a>\n\t\t\tUpdated 22 seconds ago\n\t\t</div>\n\t\t</li>\n\t<li class="item">\n\t\t<i class="icon large fa fa-github"></i>\n\t\t<div class="content">\n\t\t\t<a className="header">\n\t\t\t\tAotik/Blossom\n\t\t\t</a>\n\t\t\tUpdated 22 seconds ago\n\t\t</div>\n\t\t</li>\n</ul>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const elDividers = React.createClass({
	render() {
		return(
			<div>
				<Title title="Dividers">Dividers are used to split information into readable sections</Title>
				<div className="row example dividers">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Default divider</h6>
						<p>Basic one line divider</p>
					</div>
					<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png"/>
					<div className="divider"></div>
					<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png"/>
				</div>
				<div className="row example dividers">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Divider with text</h6>
						<p>Horizontal dividers can contain text</p>
					</div>
					<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png"/>
					<div className="divider horizontal">Specification</div>
					<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png"/>
					<div className="divider horizontal"><code>Dividers fully adapt to the length of text between them</code></div>
					<img src="http://semantic-ui.com/images/wireframe/short-paragraph.png"/>
				</div>
			</div>
		)
	}
})

export const elProgressBars = React.createClass({
	componentDidMount: function() {
		$(document).ready(function() {
			loadProgressBars()
			loadActiveProgressBars();
		})
	},
	render() {
		return(
			<div>
				<Title title="Progress bars">Progess bars are used to indicate the progress state of a certain action</Title>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Default progress bar</h6>
						<p>A simple progress bar shows the state, defined by the <code>data-percent</code> attribute, of progress without a written status</p>
					</div>
					<div className="module collapsed">
						<div className="progress">
							<div className="bar" data-percent="48">
								<div className="status"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="progress">\n\t<div class="bar" data-percent="48">\n\t\t<div class="status"></div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Active progress bar</h6>
						<p>Progress bars with the <code>.active</code> class animate to their defined percentage state</p>
					</div>
					<div className="message warning">
						<p>Note that to use the <strong>.active</strong> class, you need to include <a>Blossom JS</a> in your HTML</p>
					</div>
					<div className="module collapsed">
						<div className="progress active">
							<div className="bar green show" data-percent="76">
								<div className="status"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="progress active">\n\t<div class="bar green show" data-percent="76">\n\t\t<div class="status"></div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example types">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Show status</h6>
						<p>To show the status, you need to be using a standard or <code>.large</code> progress bar then add the <code>.show</code> class to <code>.bar</code></p>
					</div>
					<div className="module collapsed">
						<div className="progress active">
							<div className="bar violet show" data-percent="96">
								<div className="status"></div>
							</div>
						</div>
						<div className="progress large active">
							<div className="bar purple show" data-percent="66">
								<div className="status"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="progress tiny active">\n\t<div class="bar yellow" data-percent="92">\n\t\t<div class="status"></div>\n\t</div>\n</div>\n<div class="progress small active">\n\t<div class="bar orange" data-percent="42">\n\t\t<div class="status"></div>\n\t</div>\n</div>\n<div class="progress large active">\n\t<div class="bar red show" data-percent="58">\n\t\t<div class="status"></div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example types">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Progress bar sizes</h6>
						<p>Progress bars come in <code>.tiny</code>, <code>.small</code> and <code>.large</code> as well</p>
					</div>
					<div className="module collapsed">
						<div className="progress tiny active">
							<div className="bar yellow" data-percent="92">
								<div className="status"></div>
							</div>
						</div>
						<div className="progress small active">
							<div className="bar orange" data-percent="42">
								<div className="status"></div>
							</div>
						</div>
						<div className="progress large active">
							<div className="bar red" data-percent="58">
								<div className="status"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="progress active">\n\t<div class="bar violet show" data-percent="96">\n\t\t<div class="status"></div>\n\t</div>\n</div>\n<div class="progress large active">\n\t<div class="bar purple show" data-percent="66">\n\t\t<div class="status"></div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example types">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Progress bar colors</h6>
						<p>As you already probably realised, progress bars can be any color in the palette</p>
					</div>
					<div className="module collapsed">
						<div className="progress small">
							<div className="bar red" data-percent="23">
							</div>
						</div>
						<div className="progress small">
							<div className="bar orange" data-percent="79">
							</div>
						</div>
						<div className="progress small">
							<div className="bar yellow" data-percent="54">
							</div>
						</div>
						<div className="progress small">
							<div className="bar green" data-percent="38">
							</div>
						</div>
						<div className="progress small">
							<div className="bar teal" data-percent="46">
							</div>
						</div>
						<div className="progress small">
							<div className="bar blue" data-percent="88">
							</div>
						</div>
						<div className="progress small">
							<div className="bar violet" data-percent="80">
							</div>
						</div>
						<div className="progress small">
							<div className="bar purple" data-percent="84">
							</div>
						</div>
						<div className="progress small">
							<div className="bar pink" data-percent="42">
							</div>
						</div>
						<div className="progress small">
							<div className="bar brown" data-percent="28">
							</div>
						</div>
						<div className="progress small">
							<div className="bar grey" data-percent="34">
							</div>
						</div>
						<div className="progress small">
							<div className="bar black" data-percent="55">
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="progress small">\n\t<div class="bar red" data-percent="23">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar orange" data-percent="79">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar yellow" data-percent="54">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar green" data-percent="38">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar teal" data-percent="46">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar blue" data-percent="88">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar violet" data-percent="80">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar purple" data-percent="84">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar pink" data-percent="42">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar brown" data-percent="28">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar grey" data-percent="34">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar black" data-percent="55">\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const elMenus = React.createClass({
	render() {
		return(
			<div>
				<Title title="Menus">Menu components be used for grouped navigation</Title>
				<div className="row example menus">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Pills</h6>
						<p>Pill menus are simple, having a transparent background and a background color on hover or <code>.active</code> state</p>
					</div>
					<div className="module collapsed">
						<div className="pills menu">
							<a className="item active">
								Home
							</a>
							<a className="item">
								About
							</a>
							<a className="item">
								Contact
							</a>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="pills menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tAbout\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example menus">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Vertical pills</h6>
						<p>Pill menus can also be set to vertical by adding the <code>.vertical</code> class</p>
					</div>
					<div className="module collapsed">
						<div className="vertical pills menu">
							<a className="item active">
								Home
							</a>
							<a className="item">
								About
							</a>
							<a className="item">
								Contact
							</a>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="vertical pills menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tAbout\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example menus">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Underlined</h6>
						<p>Underlined menus are a simple text-based menu with a prominent underline on <code>.active</code> items</p>
					</div>
					<div className="module collapsed">
						<div className="underlined menu">
							<a className="item active">
								Home
							</a>
							<a className="item">
								Inbox
								<span className="label blue">4</span>
							</a>
							<a className="item">
								Sent
							</a>
						</div>

						<p>Add the <code>.show</code> class to <code>.menu</code> to show the gray guideline</p>

						<div className="show underlined menu">
							<a className="item active">
								Home
							</a>
							<a className="item">
								Inbox
								<span className="label blue">4</span>
							</a>
							<a className="item">
								Sent
							</a>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>\n\n<div class="show underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example menus">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Vertical underlined</h6>
						<p>Underlined menus are a simple text-based menu with a prominent underline on <code>.active</code> items</p>
					</div>
					<div className="module collapsed">
						<div className="vertical underlined menu">
							<a className="item active">
								Home
							</a>
							<a className="item">
								Inbox
								<span className="label blue">4</span>
							</a>
							<a className="item">
								Sent
							</a>
						</div>

						<p>Add the <code>.show</code> class to <code>.menu</code> to show the gray guideline</p>

						<div className="show vertical underlined menu">
							<a className="item active">
								Home
							</a>
							<a className="item">
								Inbox
								<span className="label blue">4</span>
							</a>
							<a className="item">
								Sent
							</a>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>\n\n<div class="show underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example menus">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Paneled</h6>
						<p>Paneled menus come in a moduled type container spanning the width of the parent</p>
					</div>
					<div className="module collapsed">
						<div className="panel menu">
							<a className="item active">
								Resume
							</a>
							<a className="item">
								Portfolio
							</a>
							<a className="item">
								Contact
							</a>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="panel menu">\n\t<a class="item active">\n\t\tResume\n\t</a>\n\t<a class="item">\n\t\tPortfolio\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example menus">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Vertical paneled</h6>
						<p>Paneled menus can also be set to vertical by adding the <code>.vertical</code> class</p>
					</div>
					<div className="module collapsed">
						<div className="vertical panel menu">
							<a className="item active">
								Resume
							</a>
							<a className="item">
								Portfolio
							</a>
							<a className="item">
								Contact
							</a>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="vertical panel menu">\n\t<a class="item active">\n\t\tResume\n\t</a>\n\t<a class="item">\n\t\tPortfolio\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const elButtons = React.createClass({
	render() {
		return(
			<div>
				<Title title="Buttons">A button indicates a possible user action</Title>
				<div className="row example buttons">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Default & Primary buttons</h6>
						<p>Standard buttons</p>
					</div>
					<div className="module collapsed">
						<div className="button">
							Default Button
						</div>
						<div className="button primary">
							Primary Button
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="button">\n\tDefault Button\n</div>\n<div class="button primary">\n\tPrimary Button\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example buttons">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Outlined buttons</h6>
						<p>Transparent buttons with an outline</p>
					</div>
					<div className="module collapsed">
						<div className="button outlined">
							Outlined default
						</div>
						<div className="button red outlined">
							Outlined red
						</div>
						<div className="button orange outlined">
							Outlined orange
						</div>
						<div className="button yellow outlined">
							Outlined yellow
						</div>
						<div className="button teal outlined">
							Outlined teal
						</div>
						<div className="button blue outlined">
							Outlined blue
						</div>
						<div className="button violet outlined">
							Outlined violet
						</div>
						<div className="button purple outlined">
							Outlined purple
						</div>
						<div className="button pink outlined">
							Outlined pink
						</div>
						<div className="button brown outlined">
							Outlined brown
						</div>
						<div className="button grey outlined">
							Outlined grey
						</div>
						<div className="button black outlined">
							Outlined black
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="button outlined">\n\tOutlined default\n</div>\n<div class="button red outlined">\n\tOutlined red\n</div>\n<div class="button orange outlined">\n\tOutlined orange\n</div>\n<div class="button yellow outlined">\n\tOutlined yellow\n</div>\n<div class="button teal outlined">\n\tOutlined teal\n</div>\n<div class="button blue outlined">\n\tOutlined blue\n</div>\n<div class="button violet outlined">\n\tOutlined violet\n</div>\n<div class="button purple outlined">\n\tOutlined purple\n</div>\n<div class="button pink outlined">\n\tOutlined pink\n</div>\n<div class="button brown outlined">\n\tOutlined brown\n</div>\n<div class="button grey outlined">\n\tOutlined grey\n</div>\n<div class="button black outlined">\n\tOutlined black\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example buttons">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Colored buttons</h6>
						<p>Spice up your page with colored buttons</p>
					</div>
					<div className="module collapsed">
						<div className="button red">
							Red
						</div>
						<div className="button orange">
							Orange
						</div>
						<div className="button yellow">
							Yellow
						</div>
						<div className="button green">
							Green
						</div>
						<div className="button teal">
							Teal
						</div>
						<div className="button blue">
							Blue
						</div>
						<div className="button violet">
							Violet
						</div>
						<div className="button purple">
							Purple
						</div>
						<div className="button pink">
							Pink
						</div>
						<div className="button brown">
							Brown
						</div>
						<div className="button grey">
							Grey
						</div>
						<div className="button black">
							Black
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="button red">\n\tRed\n</div>\n<div class="button orange">\n\tOrange\n</div>\n<div class="button yellow">\n\tYellow\n</div>\n<div class="button green">\n\tGreen\n</div>\n<div class="button teal">\n\tTeal\n</div>\n<div class="button blue">\n\tBlue\n</div>\n<div class="button violet">\n\tViolet\n</div>\n<div class="button purple">\n\tPurple\n</div>\n<div class="button pink">\n\tPink\n</div>\n<div class="button brown">\n\tBrown\n</div>\n<div class="button grey">\n\tGrey\n</div>\n<div class="button black">\n\tBlack\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example buttons">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Labeled buttons</h6>
						<p>Labels give visual aid on what the button does</p>
					</div>
					<div className="module collapsed">
						<div className="button blue labeled">
							<i className="fa fa-check"></i>
							Labeled Button
						</div>
						<div className="button green labeled">
							<i className="fa fa-shopping-cart"></i>
							Checkout
						</div>
						<div className="button red labeled labeled-right">
							Delete
							<i className="fa fa-times"></i>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="button blue labeled">\n\t<i class="fa fa-check"></i>\n\tLabeled Button\n</div>\n<div class="button green labeled">\n\t<i class="fa fa-shopping-cart"></i>\n\tCheckout\n</div>\n<div class="button red labeled labeled-right">\n\tDelete\n\t<i class="fa fa-times"></i>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example sizes">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Button sizes</h6>
						<p>Add <code>.small</code><code>.medium</code><code>.large</code><code>.big</code><code>.massive</code> classes to your button to change its size</p>
					</div>
					<div className="module collapsed">
						<div className="button small">
							Small
						</div>
						<div className="button medium">
							Medium
						</div>
						<div className="button large">
							Large
						</div>
						<div className="button big">
							Big
						</div>
						<div className="button massive">
							Massive
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="button">\n\tDefault Button\n</div>\n<div class="button primary">\n\tPrimary Button\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
