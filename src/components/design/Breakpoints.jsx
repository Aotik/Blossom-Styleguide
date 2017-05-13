import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Breakpoints extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Breakpoints">Take advantage of breakpoints when making your website responsive</Title>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>XS breakpoint</h6>
						<p>XS breakpoint classes can be used for specific utility on screens above <code>0px</code></p>
					</div>
					<div className="module collapsed">
						<p><code>.breakpoint-xs-hide</code> - Hides the element at XS and above</p>
						<p><code>.breakpoint-xs-show</code> - Shows the element at XS and above</p>
						<p><code>.breakpoint-xs-stackable</code> - Stacks all children elements at XS and above</p>
						<p><code>.breakpoint-xs-stack</code> - Stacks targeted element at XS and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>S breakpoint</h6>
						<p>S breakpoint classes can be used for specific utility on screens above <code>480px</code></p>
					</div>
					<div className="module collapsed">
						<p><code>.breakpoint-s-hide</code> - Hides the element at S and above</p>
						<p><code>.breakpoint-s-show</code> - Shows the element at S and above</p>
						<p><code>.breakpoint-s-stackable</code> - Stacks all children elements at S and above</p>
						<p><code>.breakpoint-s-stack</code> - Stacks targeted element at S and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>M breakpoint</h6>
						<p>M breakpoint classes can be used for specific utility on screens above <code>768px</code></p>
					</div>
					<div className="module collapsed">
						<p><code>.breakpoint-m-hide</code> - Hides the element at M and above</p>
						<p><code>.breakpoint-m-show</code> - Shows the element at M and above</p>
						<p><code>.breakpoint-m-stackable</code> - Stacks all children elements at M and above</p>
						<p><code>.breakpoint-m-stack</code> - Stacks targeted element at M and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>L breakpoint</h6>
						<p>L breakpoint classes can be used for specific utility on screens above <code>1024px</code></p>
					</div>
					<div className="module collapsed">
						<p><code>.breakpoint-l-hide</code> - Hides the element at L and above</p>
						<p><code>.breakpoint-l-show</code> - Shows the element at L and above</p>
						<p><code>.breakpoint-l-stackable</code> - Stacks all children elements at L and above</p>
						<p><code>.breakpoint-l-stack</code> - Stacks targeted element at L and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>XL breakpoint</h6>
						<p>XL breakpoint classes can be used for specific utility on screens above <code>1224px</code></p>
					</div>
					<div className="module collapsed">
						<p><code>.breakpoint-xl-hide</code> - Hides the element at XL and above</p>
						<p><code>.breakpoint-xl-show</code> - Shows the element at XL and above</p>
						<p><code>.breakpoint-xl-stackable</code> - Stacks all children elements at XL and above</p>
						<p><code>.breakpoint-xl-stack</code> - Stacks targeted element at XL and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>HD breakpoint</h6>
						<p>HD breakpoint classes can be used for specific utility on screens above <code>1824px</code></p>
					</div>
					<div className="module collapsed">
						<p><code>.breakpoint-hd-hide</code> - Hides the element at HD and above</p>
						<p><code>.breakpoint-hd-show</code> - Shows the element at HD and above</p>
						<p><code>.breakpoint-hd-stackable</code> - Stacks all children elements at HD and above</p>
						<p><code>.breakpoint-hd-stack</code> - Stacks targeted element at HD and above</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Breakpoints
