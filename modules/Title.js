import React from 'react'

export default React.createClass({
	contextTypes: {
			 router: React.PropTypes.object
	 },

	 render: function () {
			return (
				<div className="outer-title">
				<h4 className="title">{this.props.title}</h4>
					<p {...this.props}>
						 {this.props.children}
					</p>
				</div>
			);
	 }
})
