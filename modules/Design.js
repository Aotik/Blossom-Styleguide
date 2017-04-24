import React from 'react'
import Home from './Home'
import Title from './Title'
import Highlight from 'react-highlight'

export const deMain = React.createClass({
	render() {
		return (
			<div>{this.props.children || <div>Design</div>}</div>
		)
	}
})

export const deHeader = React.createClass({
	render() {
		return (
			<div>Design</div>
		)
	}
})

export const deDefault = React.createClass({
	render() {
		return <div>Design</div>
	}
})

export const deScheme = React.createClass({
	render() {
		return(
			<div>
				<Title title="Color scheme">Primary colors to be used in conjunction with other Blossom elements.</Title>
				<div className="row example">
					<div className="explanation">
						<h6>UI colors</h6>
						<p>Light, standard and dark colors used in Blossom UI</p>
					</div>
					<div className="schemes">
						<div className="scheme red light">
							<p>Light red</p>
						</div>
						<div className="scheme red">
							<p>Red</p>
						</div>
						<div className="scheme red dark">
							<p>Dark red</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme orange light">
							<p>Light orange</p>
						</div>
						<div className="scheme orange">
							<p>Orange</p>
						</div>
						<div className="scheme orange dark">
							<p>Dark orange</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme yellow light">
							<p>Light yellow</p>
						</div>
						<div className="scheme yellow">
							<p>Yellow</p>
						</div>
						<div className="scheme yellow dark">
							<p>Dark yellow</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme green light">
							<p>Light green</p>
						</div>
						<div className="scheme green">
							<p>Green</p>
						</div>
						<div className="scheme green dark">
							<p>Dark green</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme teal light">
							<p>Light teal</p>
						</div>
						<div className="scheme teal">
							<p>Teal</p>
						</div>
						<div className="scheme teal dark">
							<p>Dark teal</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme blue light">
							<p>Light blue</p>
						</div>
						<div className="scheme blue">
							<p>Blue</p>
						</div>
						<div className="scheme blue dark">
							<p>Dark blue</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme violet light">
							<p>Light violet</p>
						</div>
						<div className="scheme violet">
							<p>Violet</p>
						</div>
						<div className="scheme violet dark">
							<p>Dark violet</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme purple light">
							<p>Light purple</p>
						</div>
						<div className="scheme purple">
							<p>Purple</p>
						</div>
						<div className="scheme purple dark">
							<p>Dark purple</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme pink light">
							<p>Light pink</p>
						</div>
						<div className="scheme pink">
							<p>Pink</p>
						</div>
						<div className="scheme pink dark">
							<p>Dark pink</p>
						</div>
					</div>
					<div className="schemes">
						<div className="scheme brown light">
							<p>Light brown</p>
						</div>
						<div className="scheme brown">
							<p>Brown</p>
						</div>
						<div className="scheme brown dark">
							<p>Dark brown</p>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation">
						<h6>Gray colors</h6>
						<p>Light, standard and dark grays used in Blossom UI</p>
					</div>
					<div className="schemes">
						<div className="scheme ash light">
							<p>Light ash</p>
						</div>
						<div className="scheme ash">
							<p>Ash</p>
						</div>
						<div className="scheme ash dark">
							<p>Dark ash</p>
						</div>
					</div>
					<div className="schemes dark">
						<div className="scheme smoke light">
							<p>Light smoke</p>
						</div>
						<div className="scheme smoke">
							<p>Smoke</p>
						</div>
						<div className="scheme smoke dark">
							<p>Dark smoke</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const deTypography = React.createClass({
	render() {
		return(
			<div>
				<Title title="Typography">Experience the face of Blossom</Title>
				<div className="row example typeface">
					<div className="explanation">
						<h6>Headers</h6>
						<p>Headers amplify headings and subheadings by using <code>&lt;h1&gt;</code> <code>&lt;h2&gt;</code> <code>&lt;h3&gt;</code> <code>&lt;h4&gt;</code> <code>&lt;h5&gt;</code> <code>&lt;h6&gt;</code>  tags</p>
					</div>
					<div className="module">
						<div className="antiScroll">
							<div className="section nowrap">
								<h1>The quick brown fox jumps over the lazy dog</h1>
								<small>h1 - 3.8em</small>
							</div>
						</div>
						<div className="antiScroll">
							<div className="section nowrap">
								<h2>The quick brown fox jumps over the lazy dog</h2>
								<small>h2 - 3em</small>
							</div>
						</div>
						<div className="antiScroll">
							<div className="section nowrap">
								<h3>The quick brown fox jumps over the lazy dog</h3>
								<small>h3 - 2.2em</small>
							</div>
						</div>
						<div className="antiScroll">
							<div className="section nowrap">
								<h4>The quick brown fox jumps over the lazy dog</h4>
								<small>h4 - 1.8em</small>
							</div>
						</div>
						<div className="antiScroll">
							<div className="section nowrap">
								<h5>The quick brown fox jumps over the lazy dog</h5>
								<small>h5 - 1.4em</small>
							</div>
						</div>
						<div className="antiScroll">
							<div className="section nowrap">
								<h6>The quick brown fox jumps over the lazy dog</h6>
								<small>h6 - 1.08em</small>
							</div>
						</div>
					</div>
				</div>
				<div className="row example typeface">
					<div className="explanation">
						<h6>Typeface</h6>
						<p>Blossom&#39;s primary typeface is Roboto, a beautiful sans serif font family providing a feeling of warmth and friendliness, but at the same time keeping a serious note to it.</p>
					</div>
					<div className="module">
						<p className="transform uppercase">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
						<p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
						<p>0 1 2 3 4 5 6 7 8 9</p>
					</div>
				</div>
				<div className="row example alignment">
					<div className="explanation">
						<h6>Alignment classes</h6>
						<p>Use left, center & right alignment classes to align your text</p>
					</div>
					<div className="module">
						<p className="text-left">
							Left aligned text
						</p>
						<p className="text-right">
							Right aligned text
						</p>
						<p className="text-center">
							Center aligned text
						</p>
						<p className="text-justify">
							I should be taking up with whole line from left to right even if I&#39;m only taking up one line!
						</p>
						<div className="footer">
							<Highlight className="html">
								{'<p class="text-left">\n\tLeft aligned text\n</p>\n<p class="text-right">\n\tRight aligned text\n</p>\n<p class="text-center">\n\tCenter aligned text\n</p>\n<p class="text-justify">\n\tI should be taking up with whole line from left to right even if I&#39;m only taking up one line!\n</p>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example transformtext">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Transform classes</h6>
						<p>Use helper classes to transform your text</p>
					</div>
					<div className="module">
						<p className="transform lowercase">
							lowercase text
						</p>
						<p className="transform uppercase">
							uppercase text
						</p>
						<p className="transform capitalize">
							capitalized text
						</p>
						<div className="footer">
							<Highlight className="html">
								{'<p class="transform lowercase">\n\tlowercase text\n</p>\n<p class="transform uppercase">\n\tuppercase text\n</p>\n<p class="transform capitalize">\n\tcapitalized text\n</p>'}
							</Highlight>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const deAnimations = React.createClass({
	render() {
		return(
			<div>
				<Title title="Animations & Effects">A collection of animations and effects that can be used on any element</Title>
				<div className="row example animations">
					<div className="explanation">
						<h6>Landing animations</h6>
						<p>Landing animations play once when a user first hits a page <a id="replay_landing" className="float-right">Replay landing animations</a></p>
					</div>
					<div className="group landing">
						<div className="animation">
							<div className="square landing-fadein" data-landing="fadein"></div>
							<code>.landing-fadein</code>
						</div>
						<div className="animation">
							<div className="square landing-ascend" data-landing="ascend"></div>
							<code>.landing-ascend</code>
						</div>
						<div className="animation">
							<div className="square landing-descend" data-landing="descend"></div>
							<code>.landing-descend</code>
						</div>
					</div>
				</div>
				<div className="row example animations">
					<div className="explanation">
						<h6>Animation types</h6>
						<p>Add an infinite loop of animations to any element of your choice</p>
					</div>
					<div className="group">
						<div className="animation">
							<div className="square animation-spin"></div>
							<code>.animation-spin</code>
						</div>
						<div className="animation">
							<div className="square animation-rotate"></div>
							<code>.animation-rotate</code>
						</div>
						<div className="animation">
							<div className="square animation-bounce"></div>
							<code>.animation-bounce</code>
						</div>
					</div>
				</div>
				<div className="row example animations">
					<div className="explanation">
						<h6>Transition durations</h6>
						<p>Use different transition durations depending on how fast you want the animation to take</p>
					</div>
					<div className="group">
						<div className="animation">
							<div className="circle transitionDuration-0 transitionType-linear"></div>
							<code>.transitionDuration-0</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-s transitionType-linear"></div>
							<code>.transitionDuration-s</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-m transitionType-linear"></div>
							<code>.transitionDuration-m</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-l transitionType-linear"></div>
							<code>.transitionDuration-l</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-linear"></div>
							<code>.transitionDuration-xl</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xxl transitionType-linear"></div>
							<code>.transitionDuration-xxl</code>
						</div>
					</div>
				</div>
				<div className="row example animations">
					<div className="explanation">
						<h6>Transition types</h6>
						<p>Use different transition types depending on how you want to animation to appear</p>
					</div>
					<div className="group">
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-linear"></div>
							<code>.transitionType-linear</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-ease"></div>
							<code>.transitionType-ease</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-scaleIn"></div>
							<code>.transitionType-scaleIn</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-scaleOut"></div>
							<code>.transitionType-scaleOut</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-spring"></div>
							<code>.transitionType-spring</code>
						</div>
						<div className="animation">
							<div className="circle transitionDuration-xl transitionType-bounce"></div>
							<code>.transitionType-bounce</code>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export const deGrid = React.createClass({
	render() {
		return(
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
							<Highlight className='html'>
								{'<div class="row">\n\t<div class="col xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
						<Highlight className="html">
							{'<div class="row">\n\t<div class="col xs-12 s-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 s-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
						</Highlight>
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
							<Highlight className="html">
								{'<div class="row">\n\t<div class="col xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
							<Highlight className="html">
								{'<div class="row">\n\t<div class="col xs-12 l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
							<Highlight className="html">
								{'<div class="row">\n\t<div class="col xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
							<Highlight className="html">
								{'<div class="row">\n\t<div class="col xs-12 l-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col xs-12 l-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
							<Highlight className="html">
								{'<div class="row">\n\t<div class="col xs-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col push-xs-1 xs-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col push-xs-1 xs-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
							<Highlight className="html">
								{'<div class="row">\n\t<div class="col push-xs-6 xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="col pull-xs-12 xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
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
})

export const deBreakpoints = React.createClass({
	render() {
		return(
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
})
