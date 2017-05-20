import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Progress extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		$('.progress:not(.active) .bar[data-percent]').each(function () {
			const progress = $(this)
			const status = $(this).find('.status')
			const percentage = Math.ceil($(this).attr('data-percent')) + '%'
			progress.css('width',percentage)
			status.text(percentage)
		})

		$('.progress.active .bar[data-percent]').each(function () {
			const progress = $(this)
			const status = $(this).find('.status')
			const percentage = Math.ceil($(this).attr('data-percent'))
			$({countNum: 0}).animate({countNum: percentage}, {
				duration: 1600,
				easing:'linear',
				step: function() {
					var pct = ''
					if(percentage == 0){
						pct = Math.floor(this.countNum) + '%'
					}else{
						pct = Math.floor(this.countNum+1) + '%'
					}
					status.text(pct) && progress.css('width',pct)
				}
			})
		})
	}

	render() {
		return (
			<div>
				<Title title="Progress bars">Progess bars are used to indicate the progress state of a certain action</Title>
				<div className="example">
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
						</div>
					</div>
				</div>
				<div className="example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Active progress bar</h6>
						<p>Progress bars with the <code>.active</code> class animate to their defined percentage state</p>
					</div>
					<div className="module collapsed">
						<div className="progress active">
							<div className="bar green" data-percent="76">
								<div className="status"></div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
					<div className="message info">
						<p>Note that to use the <strong>.active</strong> class, you need to include <Link to="/utility">Blossom JS</Link> in your markup</p>
					</div>
				</div>
				<div className="example types">
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
						</div>
					</div>
				</div>
				<div className="example types">
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
						</div>
					</div>
				</div>
				<div className="example types">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Progress bar colors</h6>
						<p>As you have likely noticed already, progress bars can be any color in the <Link to="/design/colors">palette</Link></p>
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
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Progress
