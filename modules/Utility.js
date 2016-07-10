import React from 'react'
import Home from './Home'
import Title from './Title'
import Highlight from 'react-highlight'

export const ulMain = React.createClass({
	render() {
		return (
			<div>{this.props.children || <div>Utility</div>}</div>
		)
	}
})

export const ulHeader = React.createClass({
	render() {
		return (
			<div>Utility</div>
		)
	}
})

export const ulDefault = React.createClass({
	render() {
		return <div>Utility</div>
	}
})

export const ulCenter = React.createClass({
	render() {
		return (
			<div>
				<Title title="Center elements">Center selected elements vertically and/or horizontally by adding simple classes</Title>
			</div>
		)
	}
})

export const ulHide = React.createClass({
	render() {
		return (
			<div>
				<Title title="Hide elements">Hide elements completely or visually using the below</Title>
			</div>
		)
	}
})

export const ulLayout = React.createClass({
	render() {
		return (
			<div>
				<Title title="Layout">Smartly utilise your elements to create the best possible page with minimal coding</Title>
				<div className="row opening-message">
					<div className="message info">
						<h6>Positioning</h6>
						<p>
							You can also use <code>.relative</code><code>.absolute</code> <code>.fixed</code> to position elements accordingly
						</p>
					</div>
				</div>
				<div className="row example layout">
					<div className="explanation">
						<h6>Clearfix</h6>
						<p>To expand parents which have floating children elements, you can use <code>.clearfix</code></p>
					</div>
					<div className="module">
						<div className="clearfix">
							<span className="block-grey float-left"></span>
							<span className="block-grey float-right"></span>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="clearfix">\n\t<span class="block-grey float-left"></span>\n\t<span class="block-grey float-right"></span>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example layout">
					<div className="explanation">
						<h6>Pin elements</h6>
						<p>Use <code>.pin</code> to move an element in any direction. Specify the direction by using <code>.top .left .right .bottom</code></p>
					</div>
					<div className="module">
						<div className="relative">
							<span className="block-grey pin top left"></span>
							<span className="block-grey pin top right"></span>
							<span className="block-grey pin bottom right"></span>
							<span className="block-grey pin bottom left"></span>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="relative">\n\t<span class="block-grey pin top left"></span>\n\t<span class="block-grey pin top right"></span>\n\t<span class="block-grey pin bottom right"></span>\n\t<span class="block-grey pin bottom left"></span>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
