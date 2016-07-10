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
					<div className="row schemes">
						<div className="scheme primary light">
							<p>Light primary</p>
							<span>#4692FF</span>
						</div>
						<div className="scheme primary">
							<p>Primary</p>
							<span>#1877FF</span>
						</div>
						<div className="scheme primary dark">
							<p>Dark primary</p>
							<span>#005CDF</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme red light">
							<p>Light red</p>
							<span>#FF6D6D</span>
						</div>
						<div className="scheme red">
							<p>Red</p>
							<span>#ff4949</span>
						</div>
						<div className="scheme red dark">
							<p>Dark red</p>
							<span>#FF0707</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme orange light">
							<p>Light orange</p>
							<span>#FF964A</span>
						</div>
						<div className="scheme orange">
							<p>Orange</p>
							<span>#FF7C1D</span>
						</div>
						<div className="scheme orange dark">
							<p>Dark orange</p>
							<span>#E36000</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme yellow light">
							<p>Light yellow</p>
							<span>#FFD356</span>
						</div>
						<div className="scheme yellow">
							<p>Yellow</p>
							<span>#FFC82C</span>
						</div>
						<div className="scheme yellow dark">
							<p>Dark yellow</p>
							<span>#EFB100</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme green light">
							<p>Light green</p>
							<span>#2EEC82</span>
						</div>
						<div className="scheme green">
							<p>Green</p>
							<span>#13CE66</span>
						</div>
						<div className="scheme green dark">
							<p>Dark green</p>
							<span>#0FA552</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme teal light">
							<p>Light teal</p>
							<span>#00DAC6</span>
						</div>
						<div className="scheme teal">
							<p>Teal</p>
							<span>#13CE66</span>
						</div>
						<div className="scheme teal dark">
							<p>Dark teal</p>
							<span>#0FA552</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme blue light">
							<p>Light blue</p>
							<span>#459FE2</span>
						</div>
						<div className="scheme blue">
							<p>Blue</p>
							<span>#2185D0</span>
						</div>
						<div className="scheme blue dark">
							<p>Dark blue</p>
							<span>#1A6AA6</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme violet light">
							<p>Light violet</p>
							<span>#835DD4</span>
						</div>
						<div className="scheme violet">
							<p>Violet</p>
							<span>#6435C9</span>
						</div>
						<div className="scheme violet dark">
							<p>Dark violet</p>
							<span>#502AA1</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme purple light">
							<p>Light purple</p>
							<span>#BD21FB</span>
						</div>
						<div className="scheme purple">
							<p>Purple</p>
							<span>#A104E0</span>
						</div>
						<div className="scheme purple dark">
							<p>Dark purple</p>
							<span>#8103B3</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme pink light">
							<p>Light pink</p>
							<span>#E661AC</span>
						</div>
						<div className="scheme pink">
							<p>Pink</p>
							<span>#E03997</span>
						</div>
						<div className="scheme pink dark">
							<p>Dark pink</p>
							<span>#C21E7B</span>
						</div>
					</div>
					<div className="row schemes">
						<div className="scheme brown light">
							<p>Light brown</p>
							<span>#C97A54</span>
						</div>
						<div className="scheme brown">
							<p>Brown</p>
							<span>#AD5E37</span>
						</div>
						<div className="scheme brown dark">
							<p>Dark brown</p>
							<span>#8A4B2C</span>
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation">
						<h6>Gray colors</h6>
						<p>Light, standard and dark grays used in Blossom UI</p>
					</div>
					<div className="row schemes">
						<div className="scheme ash light">
							<p>Light ash</p>
								<span>#4E4E4E</span>
						</div>
						<div className="scheme ash">
							<p>Ash</p>
							<span>#333333</span>
						</div>
						<div className="scheme ash dark">
							<p>Dark ash</p>
							<span>#202020</span>
						</div>
					</div>
					<div className="row schemes dark">
						<div className="scheme smoke light">
							<p>Light smoke</p>
								<span>#F2F4F6</span>
						</div>
						<div className="scheme smoke">
							<p>Smoke</p>
							<span>#DFE4E9</span>
						</div>
						<div className="scheme smoke dark">
							<p>Dark smoke</p>
							<span>#C4CDD6</span>
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
						<h6>Typeface</h6>
						<p>Blossom&#39;s primary typeface is Lato, a beautiful sans serif font family providing a feeling of warmth and friendliness, but at the same time keeping a serious note to it.</p>
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
					<div className="module invisible">
						<div className="grid-row">
							<div className="clm-xs-6">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						<Highlight className='html'>
							{'<div class="grid-row">\n\t<div class="clm-xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
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
					<div className="module invisible">
						<div className="grid-row">
							<div className="clm-xs-12 clm-s-6">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-s-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
						<Highlight className="html">
							{'<div class="grid-row">\n\t<div class="clm-xs-12 clm-s-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-s-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
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
					<div className="module invisible">
						<div className="grid-row">
							<div className="clm-xs-12 clm-s-6 clm-m-3">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-s-6 clm-m-3">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-s-6 clm-m-3">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-s-6 clm-m-3">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="grid-row">\n\t<div class="clm-xs-12 clm-s-6 clm-m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-s-6 clm-m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-s-6 clm-m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-s-6 clm-m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
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
					<div className="module invisible">
						<div className="grid-row">
							<div className="clm-xs-12 clm-l-4">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-l-4">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-l-4">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="grid-row">\n\t<div class="clm-xs-12 clm-l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
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
					<div className="module invisible">
						<div className="grid-row">
							<div className="clm-xs-6 clm-xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-6 clm-xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-6 clm-xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-6 clm-xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-6 clm-xl-2">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-6 clm-xl-2">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="grid-row">\n\t<div class="clm-xs-6 clm-xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-6 clm-xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-6 clm-xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-6 clm-xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-6 clm-xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-6 clm-xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
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
					<div className="module invisible">
						<div className="grid-row">
							<div className="clm-xs-12 clm-l-6">
								<div className="block-grey"></div>
							</div>
							<div className="clm-xs-12 clm-l-6">
								<div className="block-grey"></div>
							</div>
						</div>
						<div className="footer">
							<Highlight className="html">
								{'<div class="grid-row">\n\t<div class="clm-xs-12 clm-l-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="clm-xs-12 clm-l-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'}
							</Highlight>
						</div>
					</div>
				</div>
				<div className="row example grids">
					<div className="explanation">
						<h6>Full grid view</h6>
						<p>An example view of structures that can be created via the grid system</p>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-l-1 clm-m-3 clm-s-4 clm-xs-12">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-s-4 clm-xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-6 clm-xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-4">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-xs-8">
							<div className="block-grey"></div>
						</div>
						<div className="clm-xs-3">
							<div className="block-grey"></div>
						</div>
						<div className="clm-xs-1">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-s-4 clm-xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-4">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-6 clm-xs-4">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-s-2 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-2 clm-xs-6">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-m-3 clm-s-4 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-m-3 clm-s-4 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-m-3 clm-s-4 clm-xs-6">
							<div className="block-grey"></div>
						</div>
						<div className="clm-m-3 clm-s-4 clm-xs-6">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-m-4 clm-s-6 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-m-4 clm-s-6 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-m-4 clm-s-6 clm-xs-12">
							<div className="block-grey"></div>
						</div>
					</div>
					<div className="grid-row show-grid">
						<div className="clm-s-6 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-s-6 clm-xs-12">
							<div className="block-grey"></div>
						</div>
						<div className="clm-xs-12">
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
				<Title title="Breakpoints">Help make your website responsive by manipulating breakpoints</Title>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>XS breakpoint</h6>
						<p>XS breakpoint classes can be used for specific utility on screens above <code>0px</code></p>
					</div>
					<div className="module invisible">
						<p><code>.breakpoint-xs-hide</code> - Hides the element at XS and above</p>
						<p><code>.breakpoint-xs-show</code> - Shows the element at XS and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>S breakpoint</h6>
						<p>S breakpoint classes can be used for specific utility on screens above <code>480px</code></p>
					</div>
					<div className="module invisible">
						<p><code>.breakpoint-s-hide</code> - Hides the element at S and above</p>
						<p><code>.breakpoint-s-show</code> - Shows the element at S and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>M breakpoint</h6>
						<p>M breakpoint classes can be used for specific utility on screens above <code>768px</code></p>
					</div>
					<div className="module invisible">
						<p><code>.breakpoint-m-hide</code> - Hides the element at M and above</p>
						<p><code>.breakpoint-m-show</code> - Shows the element at M and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>L breakpoint</h6>
						<p>L breakpoint classes can be used for specific utility on screens above <code>1024px</code></p>
					</div>
					<div className="module invisible">
						<p><code>.breakpoint-l-hide</code> - Hides the element at L and above</p>
						<p><code>.breakpoint-l-show</code> - Shows the element at L and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>XL breakpoint</h6>
						<p>XL breakpoint classes can be used for specific utility on screens above <code>1224px</code></p>
					</div>
					<div className="module invisible">
						<p><code>.breakpoint-xl-hide</code> - Hides the element at XL and above</p>
						<p><code>.breakpoint-xl-show</code> - Shows the element at XL and above</p>
					</div>
				</div>
				<div className="row example breakpoints">
					<div className="explanation">
						<h6>HD breakpoint</h6>
						<p>HD breakpoint classes can be used for specific utility on screens above <code>1824px</code></p>
					</div>
					<div className="module invisible">
						<p><code>.breakpoint-hd-hide</code> - Hides the element at HD and above</p>
						<p><code>.breakpoint-hd-show</code> - Shows the element at HD and above</p>
					</div>
				</div>
			</div>
		)
	}
})
