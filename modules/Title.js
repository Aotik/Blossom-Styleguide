import React from 'react'

export default React.createClass({
	contextTypes: {
			 router: React.PropTypes.object
	 },

	 render: function () {
			return (
				<div className="outer-title row">
					<h3 className="title">{this.props.title}</h3>
					<p {...this.props}>
						 {this.props.children}
					</p>
				</div>
			);
	 }
})
