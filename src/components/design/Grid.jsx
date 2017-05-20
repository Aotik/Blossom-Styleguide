import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Grid extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Flex grid">A 12 column responsive flex-box grid system designed for efficient mobile-first layouts</Title>
				<div className="row example grids">
					<div className="explanation">
						<h6>Equal columns</h6>
						<p>Columns within a row with the <code>.equal</code> class share an equal width depending on the number of columns provided.</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
						</div>
						<div className="row">
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
						</div>
						<div className="row">
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
							<div className="equal">
								<div className="block-grey">.equal</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Responsive columns</h6>
						<p>Responsive columns adapt to what breakpoint is assigned to the column width.</p>
						<p>For example, <code>.s-4</code> will cover 4 of 12 columns when above the <b>Small</b> breakpoint.</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col s-4">
								<div className="block-grey">.col.s-4</div>
							</div>
							<div className="col s-8">
								<div className="block-grey">.col.s-8</div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation">
						<h6>Mixing responsive columns</h6>
						<p>Responsive column classes can be used together to change the structure of the layout from several breakpoints.</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-6 m-9">
								<div className="block-grey">.col.xs-6.m-9</div>
							</div>
							<div className="col xs-6 m-3">
								<div className="block-grey">.col.xs-6.m-3</div>
							</div>
						</div>
						<div className="row">
							<div className="col xs-12 m-4">
								<div className="block-grey">.col.xs-12.m-4</div>
							</div>
							<div className="col xs-12 m-4">
								<div className="block-grey">.col.xs-12.m-4</div>
							</div>
							<div className="col xs-12 m-4">
								<div className="block-grey">.col.xs-12.m-4</div>
							</div>
						</div>
						<div className="row">
							<div className="col m-9 l-5">
								<div className="block-grey">.col.m-9.l-5</div>
							</div>
							<div className="col m-3 l-7">
								<div className="block-grey">.col.m-3.l-7</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation">
						<h6>Pushing columns</h6>
						<p>Columns can be pushed further down the row relative to the previous column.</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col m-4">
								<div className="block-grey">.col.m-4</div>
							</div>
							<div className="col m-4 push-m-4">
								<div className="block-grey">.col.m-4.push-m-4</div>
							</div>
						</div>
						<div className="row">
							<div className="col xs-12 m-3">
								<div className="block-grey">.col.xs-12.m-3</div>
							</div>
							<div className="col xs-12 m-6 push-m-3">
								<div className="block-grey">.col.xs-12.m-6.push-m-3</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Grid
