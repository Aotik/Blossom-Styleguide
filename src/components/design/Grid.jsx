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
				<Title title="Grid">A simple 12 column responsive grid which can be used to structure your application</Title>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>XS grid column</h6>
						<p>XS breakpoints are used to target screens above <code>0px</code></p>
						<p>In this example, the <span className="text-teal">6 + 6 XS</span> grid will be structured this way on every screen</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-6">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>S grid column</h6>
						<p>S breakpoints are used to target screens above <code>480px</code></p>
						<p>In this example, the <span className="text-teal">6 + 6 S</span> grid takes over on screens above the S breakpoint</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col col xs-12 s-6">
								<div className="block-grey"></div>
							</div>
							<div className="col col xs-12 s-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>M grid column</h6>
						<p>M breakpoints are used to target screens above <code>768px</code></p>
						<p>In this example, the <span className="text-teal">3 + 3 + 3 + 3 M</span> grid takes over on screens above the M breakpoint</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-12 s-6 m-3">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-12 s-6 m-3">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-12 s-6 m-3">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-12 s-6 m-3">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>L grid column</h6>
						<p>L breakpoints are used to target screens above <code>1024px</code></p>
						<p>In this example, the <span className="text-teal">4 + 4 + 4 L</span> grid takes over on screens above the L breakpoint</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-12 l-4">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-12 l-4">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-12 l-4">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>XL grid column</h6>
						<p>XL breakpoints are used to target screens above <code>1224px</code></p>
						<p>In this example, the <span className="text-teal">2 + 2 + 2 + 2 + 2 + 2 XL</span> grid takes over on screens above the XL breakpoint</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-6 xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-6 xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-6 xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-6 xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-6 xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-6 xl-2">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>HD grid column</h6>
						<p>HD breakpoints are used to target screens above <code>1824px</code></p>
						<p>In this example, the <span className="text-teal">6 + 6 HD</span> grid takes over on screens above the HD breakpoint</p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-12 l-6">
								<div className="block-grey"></div>
							</div>
							<div className="col xs-12 l-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Grid Push</h6>
						<p>Pushed columns move along the grid row relative to previous children</p>
						<p>Push classes have a similar syntax to col classes. Just append a class, e.g. <span className="text-teal">push-xs-2</span></p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col xs-4">
								<div className="block-grey"></div>
							</div>
							<div className="col push-xs-1 xs-4">
								<div className="block-grey"></div>
							</div>
							<div className="col push-xs-1 xs-2">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Grid Pull</h6>
						<p>Pulled columns move towards the start of the grid row relative to previous children</p>
						<p>Pull classes have a similar syntax to col classes. Just append a class, e.g. <span className="text-teal">pull-l-2</span></p>
					</div>
					<div className="module collapsed">
						<div className="row">
							<div className="col push-xs-6 xs-6">
								<div className="block-grey"></div>
							</div>
							<div className="col pull-xs-12 xs-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<small>Above example shows how two half columns can be reversed using pull and push columns</small>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation">
						<h6>Full grid view</h6>
						<p>An example view of structures that can be created via the grid system</p>
					</div>
					<div className="row show-grid">
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col l-1 m-3 s-4 xs-12">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col s-4 xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="col s-6 xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="col s-2 xs-4">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col xs-8">
							<div className="block-grey"></div>
						</div>
						<div className="col xs-3">
							<div className="block-grey"></div>
						</div>
						<div className="col xs-1">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col s-3 xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="col s-4 xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="col s-5 xs-4">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col s-2 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col s-2 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col s-2 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col s-2 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col s-2 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col s-2 xs-6">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col m-3 s-4 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col m-3 s-4 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col m-3 s-4 xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="col m-3 s-4 xs-6">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col m-4 s-6 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col m-4 s-6 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col m-4 s-6 xs-12">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="row show-grid">
						<div className="col s-6 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col s-6 xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="col xs-12">
							<div className="block-grey"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Grid
