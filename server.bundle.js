/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(17);
	var path = __webpack_require__(18);
	var compression = __webpack_require__(19);

	var app = express();

	app.use(compression());

	app.use(express.static("blossom"));
	app.use(express.static("public"));

	app.get('*', function (req, res) {
		(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
			if (err) {
				res.status(500).send(err.message);
			} else if (redirect) {
				res.redirect(redirect.pathname + redirect.search);
			} else if (props) {
				var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
				res.send(renderPage(appHtml));
			} else {
				res.status(404).send('Not Found');
			}
		});
	});

	function renderPage(appHtml) {
		return '\n\t<!doctype html public "storage">\n\t<html>\n\t\t<head>\n\t\t\t<meta charset=utf-8/>\n\t\t\t<title>Blossom</title>\n\t\t\t<link rel="shortcut icon" type="image/png" href="/examples/favicon.png"/>\n\t\t\t<link rel="stylesheet" type="text/css" href="/css/blossom.min.css" />\n\t\t\t<link rel="stylesheet" type="text/css" href="/css/highlight.css" />\n\t\t\t<link rel="stylesheet" type="text/css" href="/css/page.css" />\n\t\t\t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />\n\t\t\t<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"/>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id=app></div>\n\n\t\t\t<script src="https://code.jquery.com/jquery-3.0.0.min.js"   integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   crossorigin="anonymous"></script>\n\t\t\t<script src="/bundle.js"></script>\n\t\t\t<script src="/js/app.js"></script>\n\t\t\t<script src="/js/blossom.min.js"></script>\n\t\t</body>\n\t</html>\n\t';
	}

	var PORT = process.env.PORT || 1337;
	app.listen(PORT, function () {
		console.log('Production Blossom server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _Sidebar = __webpack_require__(9);

	var _Elements = __webpack_require__(10);

	var _Design = __webpack_require__(13);

	var _Utility = __webpack_require__(14);

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	var _Gettingstarted = __webpack_require__(15);

	var _Gettingstarted2 = _interopRequireDefault(_Gettingstarted);

	var _Customising = __webpack_require__(16);

	var _Customising2 = _interopRequireDefault(_Customising);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: { page: _Home2.default } }),
		_react2.default.createElement(_reactRouter.Route, { path: 'start', component: { page: _Gettingstarted2.default } }),
		_react2.default.createElement(_reactRouter.Route, { path: 'customise', component: { page: _Customising2.default } }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: 'elements', component: { main: _Elements.elMain, header: _Elements.elHeader, sidebar: _Sidebar.sbElements } },
			_react2.default.createElement(_reactRouter.IndexRedirect, { to: 'buttons' }),
			_react2.default.createElement(_reactRouter.Route, { path: 'buttons', component: _Elements.elButtons }),
			_react2.default.createElement(_reactRouter.Route, { path: 'messages', component: _Elements.elMessages }),
			_react2.default.createElement(_reactRouter.Route, { path: 'tables', component: _Elements.elTables }),
			_react2.default.createElement(_reactRouter.Route, { path: 'input', component: _Elements.elInput }),
			_react2.default.createElement(_reactRouter.Route, { path: 'progress-bars', component: _Elements.elProgressBars }),
			_react2.default.createElement(_reactRouter.Route, { path: 'labels', component: _Elements.elLabels }),
			_react2.default.createElement(_reactRouter.Route, { path: 'lists', component: _Elements.elLists }),
			_react2.default.createElement(_reactRouter.Route, { path: 'cards', component: _Elements.elCards }),
			_react2.default.createElement(_reactRouter.Route, { path: 'loaders', component: _Elements.elLoaders }),
			_react2.default.createElement(_reactRouter.Route, { path: 'stages', component: _Elements.elStages }),
			_react2.default.createElement(_reactRouter.Route, { path: 'menus', component: _Elements.elMenus }),
			_react2.default.createElement(_reactRouter.Route, { path: 'images', component: _Elements.elImages }),
			_react2.default.createElement(_reactRouter.Route, { path: 'comments', component: _Elements.elComments }),
			_react2.default.createElement(_reactRouter.Route, { path: 'dividers', component: _Elements.elDividers }),
			_react2.default.createElement(_reactRouter.Route, { path: 'dropdown', component: _Elements.elDropdown })
		),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: 'design', component: { main: _Design.deMain, header: _Design.deHeader, sidebar: _Sidebar.sbAnimations } },
			_react2.default.createElement(_reactRouter.IndexRedirect, { to: 'scheme' }),
			_react2.default.createElement(_reactRouter.Route, { path: 'scheme', component: _Design.deScheme }),
			_react2.default.createElement(_reactRouter.Route, { path: 'typography', component: _Design.deTypography }),
			_react2.default.createElement(_reactRouter.Route, { path: 'animations', component: _Design.deAnimations }),
			_react2.default.createElement(_reactRouter.Route, { path: 'grid', component: _Design.deGrid }),
			_react2.default.createElement(_reactRouter.Route, { path: 'breakpoints', component: _Design.deBreakpoints })
		),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: 'utility', component: { main: _Utility.ulMain, header: _Utility.ulHeader, sidebar: _Sidebar.sbUtility } },
			_react2.default.createElement(_reactRouter.IndexRedirect, { to: 'js' }),
			_react2.default.createElement(_reactRouter.Route, { path: 'js', component: _Utility.ulJS }),
			_react2.default.createElement(_reactRouter.Route, { path: 'center', component: _Utility.ulCenter }),
			_react2.default.createElement(_reactRouter.Route, { path: 'hide', component: _Utility.ulHide }),
			_react2.default.createElement(_reactRouter.Route, { path: 'layout', component: _Utility.ulLayout })
		)
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _DropElement = __webpack_require__(7);

	var _DropElement2 = _interopRequireDefault(_DropElement);

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'App',
		renderContent: function renderContent() {
			return _react2.default.createElement(
				'div',
				{ className: 'contain' },
				this.props.sidebar,
				_react2.default.createElement(
					'div',
					{ className: 'page' },
					this.props.main
				)
			);
		},
		renderHomepage: function renderHomepage() {
			return _react2.default.createElement(
				'div',
				{ className: 'wrap' },
				this.props.page
			);
		},
		toRender: function toRender() {
			if (this.props.main == null) {
				return this.renderHomepage();
			} else {
				return this.renderContent();
			}
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'header',
					{ className: 'sidebar fixed top' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/', className: 'logo' },
							_react2.default.createElement('img', { src: '/examples/blossom.png' })
						),
						_react2.default.createElement(
							'ul',
							{ className: 'links' },
							_react2.default.createElement(
								_DropElement2.default,
								{ to: '/start' },
								'Getting started'
							),
							_react2.default.createElement(
								_DropElement2.default,
								{ to: '/elements' },
								'Elements'
							),
							_react2.default.createElement(
								_DropElement2.default,
								{ to: '/design' },
								'Design'
							),
							_react2.default.createElement(
								_DropElement2.default,
								{ to: '/utility' },
								'Utility'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'main-content' },
					this.toRender(),
					_react2.default.createElement(
						'footer',
						{ className: 'footer' },
						_react2.default.createElement(
							'div',
							{ className: 'contain' },
							_react2.default.createElement(
								'div',
								{ className: 'inner' },
								_react2.default.createElement(
									'ul',
									{ className: 'list horizontal links' },
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'a',
											null,
											'Contact'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'a',
											{ href: 'https://github.com/Aotik/Blossom' },
											'GitHub Repo'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'a',
											{ href: 'https://github.com/Aotik/Blossom/issues/new' },
											'Submit an issue'
										)
									),
									_react2.default.createElement(
										'li',
										{ className: 'float-right madeby' },
										_react2.default.createElement(
											'a',
											{ className: 'text-grey' },
											'Made with ',
											_react2.default.createElement('i', { className: 'fa fa-heart-o text-red' }),
											' by ',
											_react2.default.createElement(
												'span',
												{ className: 'aotik' },
												'aotik'
											)
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'a',
											{ href: 'https://github.com/Aotik/Blossom/commits/master' },
											'Changelog'
										)
									)
								)
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'NavLink',

		contextTypes: {
			router: _react2.default.PropTypes.object
		},

		render: function render() {
			var isActive = this.context.router.isActive(this.props.to),
			    className = isActive ? "active" : "";

			return _react2.default.createElement(
				'li',
				{ className: className },
				_react2.default.createElement(
					_reactRouter.Link,
					this.props,
					this.props.children
				)
			);
		}
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
			displayName: 'DropElement',

			contextTypes: {
					router: _react2.default.PropTypes.object
			},

			render: function render() {
					var isActive = this.context.router.isActive(this.props.to),
					    className = isActive ? "active dropElement" : "dropElement";

					return _react2.default.createElement(
							'li',
							{ className: className },
							_react2.default.createElement(
									_reactRouter.Link,
									this.props,
									this.props.children
							)
					);
			}
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Home',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'section',
					{ className: 'hero clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'span',
							{ className: 'label green' },
							'0.1.0 Beta'
						),
						_react2.default.createElement(
							'h1',
							null,
							'Blossom UI'
						),
						_react2.default.createElement(
							'h3',
							null,
							'Build websites intuitively & efficiently'
						),
						_react2.default.createElement(
							'div',
							{ className: 'button-group breakpoint-xs-stackable' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/start', className: 'button medium outlined' },
								'Get started'
							),
							_react2.default.createElement(
								'a',
								{ className: 'button medium primary labeled' },
								_react2.default.createElement('i', { className: 'fa fa-arrow-down' }),
								' Download blossom.min.css'
							)
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'about light smoke' },
					_react2.default.createElement('img', { className: 'breakpoint-m-hide leftcut', src: '/examples/365cons_move.svg' }),
					_react2.default.createElement(
						'div',
						{ className: 'contain text-center' },
						_react2.default.createElement(
							'h3',
							null,
							'Make a smart move towards simplicity.'
						),
						_react2.default.createElement(
							'p',
							null,
							'Blossom is a brand new framework that makes life simple for designers and enables developers to find their creativity with theming. With its easy-to-use HTML, natural language CSS and efficient Javascript anyone can create all kinds of responsive awesomeness  without having to re-code elements over and over again.'
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ className: 'button large', to: '/elements' },
							'Start browsing the UI'
						)
					),
					_react2.default.createElement('img', { className: 'breakpoint-m-hide rightcut', src: '/examples/365cons_move.svg' })
				),
				_react2.default.createElement(
					'section',
					{ className: 'size' },
					_react2.default.createElement(
						'span',
						{ className: 'large60 centered vertical' },
						_react2.default.createElement('img', { src: '/examples/lessthan60.png' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 m-7' },
								_react2.default.createElement(
									'h3',
									null,
									'Oh, not all great things come in small sizes, but this does.'
								),
								_react2.default.createElement(
									'p',
									null,
									'With ',
									_react2.default.createElement(
										'strong',
										null,
										'blossom.min.css'
									),
									' weighing in at just under 60kb, you don\'t have to break a sweat worrying about your users having a sluggish experience.'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'features' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								_react2.default.createElement(
									'div',
									{ className: 'xs-12 m-4 column' },
									_react2.default.createElement('i', { className: 'text-yellow fa fa-edit' }),
									_react2.default.createElement(
										'h4',
										null,
										'Perfect for customisability'
									),
									_react2.default.createElement(
										'p',
										null,
										'Being built on Stylus, customising Blossom\'s look and feel is dead easy to accomplish.'
									),
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/customise', className: 'button' },
										'Learn how'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'xs-12 m-4 column' },
									_react2.default.createElement('i', { className: 'text-purple fa fa-th' }),
									_react2.default.createElement(
										'h4',
										null,
										'Tons of',
										_react2.default.createElement('br', null),
										'components'
									),
									_react2.default.createElement(
										'p',
										null,
										'With over 60+ components and utility classes, Blossom covers as much as you need with minimal coding required to build a beautiful website.'
									),
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/elements', className: 'button primary' },
										'Browse components'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'xs-12 m-4 column' },
									_react2.default.createElement('i', { className: 'text-blue fa fa-github' }),
									_react2.default.createElement(
										'h4',
										null,
										'It\'s free and open source!'
									),
									_react2.default.createElement(
										'p',
										null,
										'With Blossom being open source, anyone is welcome to input their expertise into improving it as a product.'
									),
									_react2.default.createElement(
										'a',
										{ href: 'https://github.com/Aotik/Blossom', className: 'button' },
										'View the repo'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'icons' },
					_react2.default.createElement(
						'div',
						{ className: 'iconsoverlay' },
						_react2.default.createElement(
							'div',
							{ className: 'contain bind' },
							_react2.default.createElement(
								'div',
								{ className: 'centered' },
								_react2.default.createElement('i', { className: 'fa fa-large fa-thumbs-o-up' }),
								_react2.default.createElement(
									'h3',
									null,
									'Massive thanks to Amy Devereux!'
								),
								_react2.default.createElement(
									'h5',
									null,
									'Check out Amy if you haven\'t already, she is an extremely talented Visual Designer. All artwork within Blossom UI is designed by her as part of her ongoing project ',
									_react2.default.createElement(
										'a',
										{ href: 'http://www.365cons.com/' },
										_react2.default.createElement(
											'strong',
											null,
											'365cons'
										)
									)
								),
								_react2.default.createElement(
									'a',
									{ href: 'http://www.adevereux.com/', className: 'button blue labeled labeled-right' },
									'See her work ',
									_react2.default.createElement('i', { className: 'fa fa-chevron-right' }),
									' '
								)
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.sbUtility = exports.sbAnimations = exports.sbElements = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sbElements = exports.sbElements = _react2.default.createClass({
		displayName: 'sbElements',
		render: function render() {
			return _react2.default.createElement(
				'aside',
				{ className: 'sidebar clearfix breakpoint-m-hide' },
				_react2.default.createElement(
					'div',
					{ className: 'fixed top' },
					_react2.default.createElement(
						'div',
						{ className: 'inner' },
						_react2.default.createElement(
							'h6',
							null,
							'Resources'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/buttons' },
								'Buttons'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/lists' },
								'Lists'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/dividers' },
								'Dividers'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/labels' },
								'Labels'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/comments' },
								'Comments'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/cards' },
								'Cards'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/input' },
								'Input'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/menus' },
								'Menus'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/progress-bars' },
								'Progress bars'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/images' },
								'Images'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/messages' },
								'Messages'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/loaders' },
								'Loaders'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/tables' },
								'Tables'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/dropdown' },
								'Dropdown'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/elements/stages' },
								'Stages'
							)
						)
					)
				)
			);
		}
	});

	var sbAnimations = exports.sbAnimations = _react2.default.createClass({
		displayName: 'sbAnimations',
		render: function render() {
			return _react2.default.createElement(
				'aside',
				{ className: 'sidebar clearfix breakpoint-m-hide' },
				_react2.default.createElement(
					'div',
					{ className: 'fixed top' },
					_react2.default.createElement(
						'div',
						{ className: 'inner' },
						_react2.default.createElement(
							'h6',
							null,
							'Resources'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/design/scheme' },
								'Color Scheme'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/design/typography' },
								'Typography'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/design/animations' },
								'Animations & Effects'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/design/grid' },
								'Grid'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/design/breakpoints' },
								'Breakpoints'
							)
						)
					)
				)
			);
		}
	});

	var sbUtility = exports.sbUtility = _react2.default.createClass({
		displayName: 'sbUtility',
		render: function render() {
			return _react2.default.createElement(
				'aside',
				{ className: 'sidebar clearfix breakpoint-m-hide' },
				_react2.default.createElement(
					'div',
					{ className: 'fixed top' },
					_react2.default.createElement(
						'div',
						{ className: 'inner' },
						_react2.default.createElement(
							'h6',
							null,
							'Resources'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/utility/js' },
								'Blossom JS'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/utility/center' },
								'Center elements'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/utility/hide' },
								'Hide elements'
							),
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/utility/layout' },
								'Layout'
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.elButtons=exports.elMenus=exports.elProgressBars=exports.elDividers=exports.elLists=exports.elCards=exports.elLoaders=exports.elStages=exports.elComments=exports.elImages=exports.elLabels=exports.elTables=exports.elInput=exports.elDropdown=exports.elMessages=exports.elHeader=exports.elMain=undefined;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);var _Home=__webpack_require__(8);var _Home2=_interopRequireDefault(_Home);var _Title=__webpack_require__(11);var _Title2=_interopRequireDefault(_Title);var _reactHighlight=__webpack_require__(12);var _reactHighlight2=_interopRequireDefault(_reactHighlight);var _reactRouter=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var elMain=exports.elMain=_react2.default.createClass({displayName:'elMain',render:function render(){return _react2.default.createElement('div',null,this.props.children||_react2.default.createElement('div',null,'Elements'));}});var elHeader=exports.elHeader=_react2.default.createClass({displayName:'elHeader',render:function render(){return _react2.default.createElement('div',null,'Elements');}});var elDefault=_react2.default.createClass({displayName:'elDefault',render:function render(){return _react2.default.createElement('div',null,'Elements');}});var elMessages=exports.elMessages=_react2.default.createClass({displayName:'elMessages',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Messages'},'A simple way to alert a user with a certain behaviour'),_react2.default.createElement('div',{className:'row example messages'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Headerless default message'),_react2.default.createElement('p',null,'A default message without a header')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'message'},_react2.default.createElement('p',null,'Our privacy policy has changed. ',_react2.default.createElement('a',null,'Click here'),' to view and accept the updated version.')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="message">\n\t<p>\n\t\tOur privacy policy has changed. <a>Click here</a> to view and\naccept the updated version.\n\t</p>\n</div>')))),_react2.default.createElement('div',{className:'row example messages'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Default message'),_react2.default.createElement('p',null,'A standard neutral message')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'message'},_react2.default.createElement('h6',null,'Subscribe!'),_react2.default.createElement('p',null,'Subscribe to our blog to get daily news updates straight to your inbox!')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="message">\n\t<h6>Subscribe!</h6>\n\t<p>\n\t\tSubscribe to our blog to get daily news updates straight to your inbox!\n\t</p>\n</div>')))),_react2.default.createElement('div',{className:'row example messages'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Information message'),_react2.default.createElement('p',null,'An information message to pass on a helpful tip')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'message info'},_react2.default.createElement('h6',null,'Did you know?'),_react2.default.createElement('p',null,'You might of noticed the rapid speed increase of our platform today! Yes, we are on version 3.0!')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="message info">\n\t<h6>Did you know?</h6>\n\t<p>\n\t\tYou might of noticed the rapid speed increase of our platform today! Yes, we are on version 3.0!\n\t</p>\n</div>')))),_react2.default.createElement('div',{className:'row example messages'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Warning message'),_react2.default.createElement('p',null,'A warning message to let the user know to take a precaution')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'message warning'},_react2.default.createElement('h6',null,'Scheduled maintenance'),_react2.default.createElement('p',null,'We have scheduled server maintenance between 04:00am - 09:00am so our platform will be down. We apologize for any inconvenience caused!')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="message warning">\n\t<h6>Scheduled maintenance</h6>\n\t<p>\n\t\tWe have scheduled server maintenance between 04:00am - 09:00am so our platform will be down. We apologize for any inconvenience caused!\n\t</p>\n</div>')))),_react2.default.createElement('div',{className:'row example messages'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Important message'),_react2.default.createElement('p',null,'An important message to warn the user of an error relating to an action')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'message important'},_react2.default.createElement('h6',null,'There were some issues with your submission'),_react2.default.createElement('p',null,'Your message exceeded the world limit. Please try re-sending the form by keeping to the 300 character limit.')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="message important">\n\t<h6>There were some issues with your submission</h6>\n\t<p>\n\t\tYour message exceeded the world limit. Please try re-sending the form by keeping to the 300 character limit.\n\t</p>\n</div>')))),_react2.default.createElement('div',{className:'row example messages'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Success message'),_react2.default.createElement('p',null,'A success message to promote a pleasant message')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'message success'},_react2.default.createElement('h6',null,'Coupon applied!'),_react2.default.createElement('p',null,'You have successfully added the coupon ',_react2.default.createElement('strong',null,'BLOSSOMROCKS'),' to your order for a 20% discount.')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="message success">\n\t<h6>Coupon applied!</h6>\n\t<p>\n\t\tYou have successfully added the coupon <strong>BLOSSOMROCKS</strong> to your order for a 20% discount.\n\t</p>\n</div>')))));}});var elDropdown=exports.elDropdown=_react2.default.createClass({displayName:'elDropdown',componentDidMount:function componentDidMount(){$(document).ready(function(){$('.dropdown').dropdown();});},render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Dropdown'},'A dropdown allows a user to select an option from a list of values'),_react2.default.createElement('div',{className:'row opening-message'},_react2.default.createElement('div',{className:'message info'},_react2.default.createElement('h6',null,'Dropdown utility'),_react2.default.createElement('p',null,'Learn more about using Blossom JS to initialise manipulate dropdowns ',_react2.default.createElement(_reactRouter.Link,{to:'/utility'},'here')))),_react2.default.createElement('div',{className:'row example dropdowns'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Dropdown'),_react2.default.createElement('p',null,'Simple dropdown with a simple toggle')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'dropdown'},_react2.default.createElement('a',{className:'toggle'},'File ',_react2.default.createElement('i',{className:'fa fa-caret-down'})),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',null,_react2.default.createElement('a',null,'New...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open project folder')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Save as...')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="dropdown">\n\t<a class="toggle">File <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t</ul>\n</div>')))),_react2.default.createElement('div',{className:'row example dropdowns'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Dropdown features'),_react2.default.createElement('p',null,'Dropdowns can also have headers, dividers and icons within them')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'dropdown'},_react2.default.createElement('a',{className:'toggle'},'File   ',_react2.default.createElement('i',{className:'fa fa-caret-down'})),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choose an action'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'New...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open project folder')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Save as...')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Export file...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Quick export')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',{className:'header'},'Share file'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-facebook-official'}),' Facebook')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-twitter'}),' Twitter')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-linkedin-square'}),' LinkedIn')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="dropdown">\n\t<a class="toggle">File &nbsp; <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li><a>Export file...</a></li>\n\t\t<li><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>')))),_react2.default.createElement('div',{className:'row example dropdowns'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Dropdown toggles'),_react2.default.createElement('p',null,'Toggles can come in any shape or form')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stack'},_react2.default.createElement('div',{className:'dropdown floating'},_react2.default.createElement('a',{className:'toggle button'},'Menu'),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choices'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 1')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 2')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 3')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 4'))))),_react2.default.createElement('div',{className:'stack'},_react2.default.createElement('div',{className:'dropdown floating'},_react2.default.createElement('div',{className:'toggle button green labeled'},_react2.default.createElement('i',{className:'fa fa-gift'}),'Select your free gift'),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choices'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 1')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 2')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 3')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 4'))))),_react2.default.createElement('div',{className:'stack'},_react2.default.createElement('div',{className:'dropdown'},_react2.default.createElement('div',{className:'toggle label teal'},_react2.default.createElement('i',{className:'fa fa-home'}),'Select your address'),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choices'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 1')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 2')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 3')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Choice 4'))))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="dropdown floating">\n\t<a class="toggle button">Menu</a>\n\t<ul class="menu">\n\t\t<li class="header">Choices</li>\n\t\t<li><a>Choice 1</a></li>\n\t\t<li><a>Choice 2</a></li>\n\t\t<li><a>Choice 3</a></li>\n\t\t<li><a>Choice 4</a></li>\n\t</ul>\n</div>\n<div class="dropdown floating">\n\t<div class="toggle button green labeled">\n\t\t<i class="fa fa-gift"></i>\n\t\tSelect your free gift\n\t</div>\n\t<ul class="menu">\n\t\t<li class="header">Choices</li>\n\t\t<li><a>Choice 1</a></li>\n\t\t<li><a>Choice 2</a></li>\n\t\t<li><a>Choice 3</a></li>\n\t\t<li><a>Choice 4</a></li>\n\t</ul>\n</div>\n<div class="dropdown">\n\t<div class="toggle label">\n\t\t<i class="fa fa-home"></i>\n\t\tSelect your address\n\t</div>\n\t<ul class="menu">\n\t\t<li class="header">Choices</li>\n\t\t<li><a>Choice 1</a></li>\n\t\t<li><a>Choice 2</a></li>\n\t\t<li><a>Choice 3</a></li>\n\t\t<li><a>Choice 4</a></li>\n\t</ul>\n</div>')))),_react2.default.createElement('div',{className:'row example dropdowns'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Disabled'),_react2.default.createElement('p',null,'You can disable the dropdown altogether by targeting the toggle, or disable items in the menu individually')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stack'},_react2.default.createElement('div',{className:'dropdown floating disabled'},_react2.default.createElement('a',{className:'toggle button blue labeled labeled-right'},'Menu',_react2.default.createElement('i',{className:'fa fa-caret-down'})),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choose an action'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'New...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open project folder')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Save as...')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Export file...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Quick export')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',{className:'header'},'Share file'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-facebook-official'}),' Facebook')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-twitter'}),' Twitter')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-linkedin-square'}),' LinkedIn'))))),_react2.default.createElement('div',{className:'stack'},_react2.default.createElement('div',{className:'dropdown floating'},_react2.default.createElement('a',{className:'toggle button blue labeled labeled-right'},'Menu',_react2.default.createElement('i',{className:'fa fa-caret-down'})),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choose an action'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'New...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open project folder')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Save as...')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',{className:'disabled'},_react2.default.createElement('a',null,'Export file...')),_react2.default.createElement('li',{className:'disabled'},_react2.default.createElement('a',null,'Quick export')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',{className:'header'},'Share file'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-facebook-official'}),' Facebook')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-twitter'}),' Twitter')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-linkedin-square'}),' LinkedIn'))))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="dropdown floating disabled">\n\t<a class="toggle button blue labeled labeled-right">\n\t\tMenu\n\t\t<i class="fa fa-caret-down"/>\n\t</a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li><a>Export file...</a></li>\n\t\t<li><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>\n<div class="dropdown floating">\n\t<a class="toggle button blue labeled labeled-right">\n\t\tMenu\n\t\t<i class="fa fa-caret-down"/>\n\t</a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="disabled"><a>Export file...</a></li>\n\t\t<li class="disabled"><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>')))),_react2.default.createElement('div',{className:'row example dropdowns'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Right aligned dropdown'),_react2.default.createElement('p',null,'Dropdown menus can also be pushed to be flush with the right side')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'dropdown right'},_react2.default.createElement('a',{className:'toggle'},'File ',_react2.default.createElement('i',{className:'fa fa-caret-down'})),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',null,_react2.default.createElement('a',null,'New...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open project folder')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Save as...')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="dropdown right">\n\t<a class="toggle">File <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t</ul>\n</div>')))),_react2.default.createElement('div',{className:'row example dropdowns'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Upward dropdowns'),_react2.default.createElement('p',null,'Flip your dropdown to the top of the toggle using ',_react2.default.createElement('code',null,'.upward'))),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'dropdown upward'},_react2.default.createElement('a',{className:'toggle'},'File   ',_react2.default.createElement('i',{className:'fa fa-caret-down'})),_react2.default.createElement('ul',{className:'menu'},_react2.default.createElement('li',{className:'header'},'Choose an action'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'New...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Open project folder')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Save as...')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Export file...')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,'Quick export')),_react2.default.createElement('li',{className:'divider'}),_react2.default.createElement('li',{className:'header'},'Share file'),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-facebook-official'}),' Facebook')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-twitter'}),' Twitter')),_react2.default.createElement('li',null,_react2.default.createElement('a',null,_react2.default.createElement('i',{className:'fa fa-linkedin-square'}),' LinkedIn')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="dropdown upward">\n\t<a class="toggle">File &nbsp; <i class="fa fa-caret-down"/></a>\n\t<ul class="menu">\n\t\t<li class="header">Choose an action</li>\n\t\t<li><a>New...</a></li>\n\t\t<li><a>Open</a></li>\n\t\t<li><a>Open project folder</a></li>\n\t\t<li><a>Save as...</a></li>\n\t\t<li class="divider"></li>\n\t\t<li><a>Export file...</a></li>\n\t\t<li><a>Quick export</a></li>\n\t\t<li class="divider"></li>\n\t\t<li class="header">Share file</li>\n\t\t<li><a><i class="fa fa-facebook-official"/> Facebook</a></li>\n\t\t<li><a><i class="fa fa-twitter"/> Twitter</a></li>\n\t\t<li><a><i class="fa fa-linkedin-square"/> LinkedIn</a></li>\n\t</ul>\n</div>')))));}});var elInput=exports.elInput=_react2.default.createClass({displayName:'elInput',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Input'},'A field to get a response from a user'),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Transparent inputs'),_react2.default.createElement('p',null,'An input with no background or border')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input transparent'},_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input transparent">\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Standard inputs'),_react2.default.createElement('p',null,'A standard input with a border')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input'},_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input">\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Disabled inputs'),_react2.default.createElement('p',null,'A disabled input using the ',_react2.default.createElement('code',null,'.disabled'),' class')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input disabled'},_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input disabled">\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Disabled inputs'),_react2.default.createElement('p',null,'A disabled input using the ',_react2.default.createElement('code',null,'disabled'),' property')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input'},_react2.default.createElement('input',{disabled:true,type:'text',name:'name',placeholder:'Search...'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input">\n\t<input disabled type="text" name="name" placeholder="Search..."/>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Input with a button'),_react2.default.createElement('p',null,'A standard input with an ajoined default button')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input action'},_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'}),_react2.default.createElement('a',{className:'button'},'Search')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input action">\n\t<input type="text" name="name" placeholder="Search..."/>\n\t<a class="button">Search</a>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Input with an outlined button'),_react2.default.createElement('p',null,'A standard input with an ajoined default outlined button')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input action'},_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'}),_react2.default.createElement('a',{className:'button outlined'},'Search')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input action">\n\t<input type="text" name="name" placeholder="Search..."/>\n\t<a class="button outlined">Search</a>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Input with an icon button'),_react2.default.createElement('p',null,'A standard input with an ajoined icon button')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input action'},_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'}),_react2.default.createElement('a',{className:'icon button'},_react2.default.createElement('i',{className:'fa fa-search'}))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input action">\n\t<input type="text" name="name" placeholder="Search..."/>\n\t<a class="icon button"><i class="fa fa-search"></i></a>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Input with an left aligned button'),_react2.default.createElement('p',null,'A standard input with an ajoined left aligned button')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input action'},_react2.default.createElement('a',{className:'button'},'Search'),_react2.default.createElement('input',{type:'text',name:'name',placeholder:'Search...'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input action">\n\t<a class="button">Search</a>\n\t<input type="text" name="name" placeholder="Search..."/>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Input with a left aligned labeled button'),_react2.default.createElement('p',null,'A standard input with an ajoined left aligned, colored labeled button')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input action'},_react2.default.createElement('a',{className:'button blue labeled'},'Copy',_react2.default.createElement('i',{className:'fa fa-clone'})),_react2.default.createElement('input',{type:'text',name:'name',value:'http://short.url/123'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input action">\n\t<a class="button blue labeled">\n\t\tCopy\n\t\t<i class="fa fa-clone"></i>\n\t</a>\n\t<input type="text" name="name" value="http://short.url/123"/>\n</div>')))),_react2.default.createElement('div',{className:'row example inputs'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Input with a labeled button'),_react2.default.createElement('p',null,'A standard input with an ajoined colored labeled button')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'input action'},_react2.default.createElement('input',{type:'text',name:'name',value:'http://short.url/123'}),_react2.default.createElement('a',{className:'button blue labeled labeled-right'},'Copy',_react2.default.createElement('i',{className:'fa fa-clone'}))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="input action">\n\t<input type="text" name="name" value="http://short.url/123"/>\n\t<a class="button blue labeled labeled-right">\n\t\tCopy\n\t\t<i class="fa fa-clone"></i>\n\t</a>\n</div>')))));}});var elTables=exports.elTables=_react2.default.createClass({displayName:'elTables',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Tables'},'Orgnanise data into something more readable'),_react2.default.createElement('div',{className:'row example tables'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Striped tables'),_react2.default.createElement('p',null,'Stripled tables with a single header using the ',_react2.default.createElement('code',null,'colspan'),' property')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('table',{className:'striped table'},_react2.default.createElement('thead',null,_react2.default.createElement('tr',null,_react2.default.createElement('th',{colSpan:'3'},'New files added'))),_react2.default.createElement('tbody',null,_react2.default.createElement('tr',null,_react2.default.createElement('td',null,_react2.default.createElement('i',{className:'fa fa-file-o'}),' logo.svg'),_react2.default.createElement('td',null,'SVG'),_react2.default.createElement('td',{className:'right aligned'},'2 hours ago')),_react2.default.createElement('tr',null,_react2.default.createElement('td',null,_react2.default.createElement('i',{className:'fa fa-file-o'}),'app.js'),_react2.default.createElement('td',null,'Javascript'),_react2.default.createElement('td',{className:'right aligned'},'3 hours ago')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<table class="striped table">\n\t<thead>\n\t\t<tr>\n\t\t\t<th colSpan="3">\n\t\t\t\tNew files added\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i> logo.svg\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tSVG\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t2 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i>\n\t\t\t\tapp.js\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tJavascript\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t3 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>')))),_react2.default.createElement('div',{className:'row example tables'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Celled tables'),_react2.default.createElement('p',null,'Fully celled tables, horizontally and vertically')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('table',{className:'table cells'},_react2.default.createElement('thead',null,_react2.default.createElement('tr',null,_react2.default.createElement('th',null,'File name'),_react2.default.createElement('th',null,'File type'),_react2.default.createElement('th',null,'Date added'))),_react2.default.createElement('tbody',null,_react2.default.createElement('tr',null,_react2.default.createElement('td',null,_react2.default.createElement('i',{className:'fa fa-file-o'}),' logo.svg'),_react2.default.createElement('td',null,'SVG'),_react2.default.createElement('td',{className:'right aligned'},'2 hours ago')),_react2.default.createElement('tr',null,_react2.default.createElement('td',null,_react2.default.createElement('i',{className:'fa fa-file-o'}),' app.js'),_react2.default.createElement('td',null,'Javascript'),_react2.default.createElement('td',{className:'right aligned'},'3 hours ago')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<table class="table cells">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tFile name\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tFile type\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDate added\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i> logo.svg\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tSVG\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t2 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<i class="fa fa-file-o"></i> app.js\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tJavascript\n\t\t\t</td>\n\t\t\t<td class="right aligned">\n\t\t\t\t3 hours ago\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>')))),_react2.default.createElement('div',{className:'row example tables'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Crowded tables'),_react2.default.createElement('p',null,'Tables will automatically adjust their cell sizes to accompany their content')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('table',{className:'table cells'},_react2.default.createElement('thead',null,_react2.default.createElement('tr',null,_react2.default.createElement('th',null,'Name'),_react2.default.createElement('th',null,'Type'),_react2.default.createElement('th',null,'Description'))),_react2.default.createElement('tbody',null,_react2.default.createElement('tr',null,_react2.default.createElement('td',null,'Frog'),_react2.default.createElement('td',null,'Amphibian'),_react2.default.createElement('td',null,'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil ',_react2.default.createElement('q',null,'proto-frog'),' appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.')),_react2.default.createElement('tr',null,_react2.default.createElement('td',null,'Duck'),_react2.default.createElement('td',null,'Anatidae'),_react2.default.createElement('td',null,'Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<table class="table cells">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tType\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tFrog\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAmphibian\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tFrogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDuck\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAnatidae\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tDuck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>')))),_react2.default.createElement('div',{className:'row example tables'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Simple tables'),_react2.default.createElement('p',null,'Simple tables have no background color and only horizontal borders')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('table',{className:'table simple'},_react2.default.createElement('thead',null,_react2.default.createElement('tr',null,_react2.default.createElement('th',null,'Name'),_react2.default.createElement('th',null,'Type'),_react2.default.createElement('th',null,'Description'))),_react2.default.createElement('tbody',null,_react2.default.createElement('tr',null,_react2.default.createElement('td',null,'Frog'),_react2.default.createElement('td',null,'Amphibian'),_react2.default.createElement('td',null,'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil ',_react2.default.createElement('q',null,'proto-frog'),' appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.')),_react2.default.createElement('tr',null,_react2.default.createElement('td',null,'Duck'),_react2.default.createElement('td',null,'Anatidae'),_react2.default.createElement('td',null,'Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<table class="table simple">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tType\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tFrog\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAmphibian\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tFrogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDuck\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAnatidae\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tDuck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>')))),_react2.default.createElement('div',{className:'row example tables'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Basic tables'),_react2.default.createElement('p',null,'Basic tables convey simple information and is the most basic variation of a table')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('table',{className:'table basic'},_react2.default.createElement('thead',null,_react2.default.createElement('tr',null,_react2.default.createElement('th',null,'Name'),_react2.default.createElement('th',null,'Type'),_react2.default.createElement('th',null,'Description'))),_react2.default.createElement('tbody',null,_react2.default.createElement('tr',null,_react2.default.createElement('td',null,'Frog'),_react2.default.createElement('td',null,'Amphibian'),_react2.default.createElement('td',null,'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil ',_react2.default.createElement('q',null,'proto-frog'),' appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.')),_react2.default.createElement('tr',null,_react2.default.createElement('td',null,'Duck'),_react2.default.createElement('td',null,'Anatidae'),_react2.default.createElement('td',null,'Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<table class="table basic">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tType\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tFrog\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAmphibian\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tFrogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDuck\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tAnatidae\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tDuck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>')))));}});var elLabels=exports.elLabels=_react2.default.createClass({displayName:'elLabels',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Labels'},'A button indicates a possible user action'),_react2.default.createElement('div',{className:'row example labels'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Default labels'),_react2.default.createElement('p',null,'Standard grey labels')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'label'},'Your reservation is ready'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="label">\n\tYour reservation is ready\n</div>')))),_react2.default.createElement('div',{className:'row example labels'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Labels with icons'),_react2.default.createElement('p',null,'A label with visual aid')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'label'},_react2.default.createElement('i',{className:'fa fa-envelope'}),'You have 34 unread mail'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="label">\n\t<i class="fa fa-envelope"></i>\n\tYou have 34 unread mail\n</div>')))),_react2.default.createElement('div',{className:'row example labels'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Labeled labels'),_react2.default.createElement('p',null,'A label with its own label!')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'label pink'},'Adrianne',_react2.default.createElement('div',{className:'detail'},'Teacher')),_react2.default.createElement('div',{className:'label blue'},'Your package has arrived',_react2.default.createElement('div',{className:'detail'},'13:49PM')),_react2.default.createElement('div',{className:'label red'},'Comments are here!',_react2.default.createElement('div',{className:'detail'},'New!')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="label pink">\n\tAdrianne\n\t<div class="detail">Teacher</div>\n</div>\n<div class="label blue">\n\tYour package has arrived\n\t<div class="detail">13:49PM</div>\n</div>\n<div class="label red">\n\tComments are here!\n\t<div class="detail">New!</div>\n</div>')))),_react2.default.createElement('div',{className:'row example labels'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Labels with links'),_react2.default.createElement('p',null,'Quick link straight from a label')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'label'},_react2.default.createElement('i',{className:'fa fa-envelope'}),'14',_react2.default.createElement('a',null,'View mail')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="label">\n\t<i class="fa fa-envelope"></i>\n\t14\n\t<a>View mail</a>\n</div>')))),_react2.default.createElement('div',{className:'row example labels'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Circular labels'),_react2.default.createElement('p',null,'Rounded off labels, great for showing stats')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'label red circular'},'1'),_react2.default.createElement('div',{className:'label orange circular'},'2'),_react2.default.createElement('div',{className:'label yellow circular'},'3'),_react2.default.createElement('div',{className:'label green circular'},'4'),_react2.default.createElement('div',{className:'label teal circular'},'5'),_react2.default.createElement('div',{className:'label blue circular'},'6'),_react2.default.createElement('div',{className:'label violet circular'},'7'),_react2.default.createElement('div',{className:'label purple circular'},'8'),_react2.default.createElement('div',{className:'label pink circular'},'9'),_react2.default.createElement('div',{className:'label brown circular'},'a'),_react2.default.createElement('div',{className:'label grey circular'},'b'),_react2.default.createElement('div',{className:'label black circular'},'c'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="label red circular">\n\t1\n</div>\n<div class="label orange circular">\n\t2\n</div>\n<div class="label yellow circular">\n\t3\n</div>\n<div class="label green circular">\n\t4\n</div>\n<div class="label teal circular">\n\t5\n</div>\n<div class="label blue circular">\n\t6\n</div>\n<div class="label violet circular">\n\t7\n</div>\n<div class="label purple circular">\n\t8\n</div>\n<div class="label pink circular">\n\t9\n</div>\n<div class="label brown circular">\n\ta\n</div>\n<div class="label grey circular">\n\tb\n</div>\n<div class="label black circular">\n\tc\n</div>')))));}});var elImages=exports.elImages=_react2.default.createClass({displayName:'elImages',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Images'},'A button indicates a possible user action'),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Top aligned image'),_react2.default.createElement('p',null,'Align content to the top when inline with an image')),_react2.default.createElement('div',{className:'image-tiny align-top'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''})),_react2.default.createElement('span',null,'Top aligned')),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Middle aligned image'),_react2.default.createElement('p',null,'Align content to the middle when inline with an image')),_react2.default.createElement('div',{className:'image-tiny align-middle'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''})),_react2.default.createElement('span',null,'Middle aligned')),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Bottom aligned image'),_react2.default.createElement('p',null,'Align content to the bottom when inline with an image')),_react2.default.createElement('div',{className:'image-tiny align-bottom'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''})),_react2.default.createElement('span',null,'Bottom aligned')),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Mini sized image'),_react2.default.createElement('p',null,'Forces the image to be sized to ',_react2.default.createElement('code',null,'35px'))),_react2.default.createElement('div',{className:'image-mini'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''}))),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Tiny sized image'),_react2.default.createElement('p',null,'Forces the image to be sized to ',_react2.default.createElement('code',null,'70px'))),_react2.default.createElement('div',{className:'image-tiny'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''}))),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Small sized image'),_react2.default.createElement('p',null,'Forces the image to be sized to ',_react2.default.createElement('code',null,'140px'))),_react2.default.createElement('div',{className:'image-small'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''}))),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Medium sized image'),_react2.default.createElement('p',null,'Forces the image to be sized to ',_react2.default.createElement('code',null,'280px'))),_react2.default.createElement('div',{className:'image-medium'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''}))),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Large sized image'),_react2.default.createElement('p',null,'Forces the image to be sized to ',_react2.default.createElement('code',null,'400px'))),_react2.default.createElement('div',{className:'image-large'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''}))),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Big sized image'),_react2.default.createElement('p',null,'Forces the image to be sized to ',_react2.default.createElement('code',null,'600px'))),_react2.default.createElement('div',{className:'image-big'},_react2.default.createElement('img',{src:'/examples/365cons_placeholder.jpg',alt:''}))),_react2.default.createElement('div',{className:'row example images'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Other sized images'),_react2.default.createElement('p',null,'Blossom also supports larger types of images, ',_react2.default.createElement('code',null,'Huge'),' and ',_react2.default.createElement('code',null,'Massive'),' are sized ',_react2.default.createElement('code',null,'840px'),' and ',_react2.default.createElement('code',null,'940px'),' respectively'))));}});var elComments=exports.elComments=_react2.default.createClass({displayName:'elComments',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Comments'},'Comments display user feedback on a website'),_react2.default.createElement('div',{className:'row example comments'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Full feature comments'),_react2.default.createElement('p',null,'Comments with headers, content and metadata are classified as full feature comments')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_otter.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Johnny Grimes'),_react2.default.createElement('span',{className:'meta'},'Wednesday at 4:32PM'),_react2.default.createElement('p',{className:'text'},'Hey guys, I\'m Johnny, call me J! Just joined the business, looking forward to working with you all.'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply'),_react2.default.createElement('a',{className:'action'},'Share'),_react2.default.createElement('a',{className:'action'},'Delete')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="comment">\n\t<div class="avatar">\n\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t</div>\n\t<div class="content">\n\t\t<a class="creator">Johnny Grimes</a>\n\t\t<span class="meta">Wednesday at 4:32PM</span>\n\t\t<p class="text">\n\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business,\nlooking forward to working with you all.\n\t\t</p>\n\t\t<div class="actions">\n\t\t\t<a class="action">Reply</a>\n\t\t\t<a class="action">Share</a>\n\t\t\t<a class="action">Delete</a>\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example comments'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Minimal comments'),_react2.default.createElement('p',null,'Minimal comments do not contain actions or metadata')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_otter.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Johnny Grimes'),_react2.default.createElement('p',{className:'text'},'Hey guys, I\'m Johnny, call me J! Just joined the business, looking forward to working with you all.'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="comment">\n\t<div class="avatar">\n\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t</div>\n\t<div class="content">\n\t\t<a class="creator">Johnny Grimes</a>\n\t\t<p class="text">\n\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business,\nlooking forward to working with you all.\n\t\t</p>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example comments'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Comment replies'),_react2.default.createElement('p',null,'Replies to comments are indented inwards')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_dino.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Isabelle Jenkins'),_react2.default.createElement('span',{className:'meta'},'Wednesday at 5:17PM'),_react2.default.createElement('p',{className:'text'},'Welcome Johnny, good to have you onboard.'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply')),_react2.default.createElement('div',{className:'replies'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_otter.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Johnny Grimes'),_react2.default.createElement('span',{className:'meta'},'Thursday at 8:28AM'),_react2.default.createElement('span',{className:'meta'}),_react2.default.createElement('p',{className:'text'},'Thank you Isabelle!'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply'))))))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="comment">\n\t<div class="avatar">\n\t\t<img src="/examples/365cons_dino.jpg" alt="" />\n\t</div>\n\t<div class="content">\n\t\t<a class="creator">Isabelle Jenkins</a>\n\t\t<span class="meta">Wednesday at 5:17PM</span>\n\t\t<p class="text">\n\t\t\tWelcome Johnny, good to have you onboard.\n\t\t</p>\n\t\t<div class="actions">\n\t\t\t<a class="action">Reply</a>\n\t\t</div>\n\t\t<div class="replies">\n\t\t\t<div class="comment">\n\t\t\t\t<div class="avatar">\n\t\t\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t\t\t</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t\t\t<span class="meta">Thursday at 8:28AM</span>\n\t\t\t\t\t<span class="meta"></span>\n\t\t\t\t\t<p class="text">\n\t\t\t\t\t\tThank you Isabelle!\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="actions">\n\t\t\t\t\t\t<a class="action">Reply</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example forum'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Embedded reply'),_react2.default.createElement('p',null,'Replies to a specific comment are indented within a comment')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'comments'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_otter.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Johnny Grimes'),_react2.default.createElement('span',{className:'meta'},'Wednesday at 4:32PM'),_react2.default.createElement('p',{className:'text'},'Hey guys, I\'m Johnny, call me J! Just joined the business, looking forward to working with you all.'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action active'},'Reply'),_react2.default.createElement('a',{className:'action'},'Share'),_react2.default.createElement('a',{className:'action'},'Hide')),_react2.default.createElement('div',{className:'reply'},_react2.default.createElement('div',{className:'input'},_react2.default.createElement('textarea',{name:'reply'})),_react2.default.createElement('div',{className:'group'},_react2.default.createElement('div',{className:'submit button blue labeled'},_react2.default.createElement('i',{className:'fa fa-edit'}),'Send reply'),_react2.default.createElement('div',{className:'discard button default float-right'},'Discard')))))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="comments">\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t<span class="meta">Wednesday at 4:32PM</span>\n\t\t\t<p class="text">\n\t\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action active">Reply</a>\n\t\t\t\t<a class="action">Share</a>\n\t\t\t\t<a class="action">Hide</a>\n\t\t\t</div>\n\t\t\t<div class="reply">\n\t\t\t\t<div class="input">\n\t\t\t\t\t<textarea name="reply"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class="group">\n\t\t\t\t\t<div class="submit button blue labeled">\n\t\t\t\t\t\t<i class="fa fa-edit"></i>\n\t\t\t\t\t\tSend reply\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="discard button default float-right">\n\t\t\t\t\t\tDiscard\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example comments'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Full width reply'),_react2.default.createElement('p',null,'Replies to a comment thread take up the width of a container')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'comments'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_otter.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Johnny Grimes'),_react2.default.createElement('span',{className:'meta'},'Wednesday at 4:32PM'),_react2.default.createElement('p',{className:'text'},'Hey guys, I\'m Johnny, call me J! Just joined the business, looking forward to working with you all.'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply')))),_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_dino.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Isabelle Jenkins'),_react2.default.createElement('span',{className:'meta'},'Wednesday at 5:17PM'),'z',_react2.default.createElement('p',{className:'text'},'Welcome Johnny, good to have you onboard.'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply')),_react2.default.createElement('div',{className:'replies'},_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_otter.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Johnny Grimes'),_react2.default.createElement('span',{className:'meta'},'Thursday at 8:28AM'),_react2.default.createElement('span',{className:'meta'}),_react2.default.createElement('p',{className:'text'},'Thank you Isabelle!'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply'))))))),_react2.default.createElement('div',{className:'comment'},_react2.default.createElement('div',{className:'avatar'},_react2.default.createElement('img',{src:'/examples/365cons_panda.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'creator'},'Stuee Brown'),_react2.default.createElement('span',{className:'meta'},'Friday at 10:36AM'),_react2.default.createElement('p',{className:'text'},'What\'s up Johnny!'),_react2.default.createElement('div',{className:'actions'},_react2.default.createElement('a',{className:'action'},'Reply')))),_react2.default.createElement('div',{className:'reply'},_react2.default.createElement('div',{className:'input'},_react2.default.createElement('textarea',{name:'reply'})),_react2.default.createElement('div',{className:'group'},_react2.default.createElement('div',{className:'submit button blue labeled'},_react2.default.createElement('i',{className:'fa fa-edit'}),'Send reply'),_react2.default.createElement('div',{className:'discard button default float-right'},'Discard')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="comments">\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t<span class="meta">Wednesday at 4:32PM</span>\n\t\t\t<p class="text">\n\t\t\t\tHey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action">Reply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_dino.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Isabelle Jenkins</a>\n\t\t\t<span class="meta">Wednesday at 5:17PM</span>\n\t\t\t<p class="text">\n\t\t\t\tWelcome Johnny, good to have you onboard.\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action">Reply</a>\n\t\t\t</div>\n\t\t\t<div class="replies">\n\t\t\t\t<div class="comment">\n\t\t\t\t\t<div class="avatar">\n\t\t\t\t\t\t<img src="/examples/365cons_otter.jpg" alt="" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t<a class="creator">Johnny Grimes</a>\n\t\t\t\t\t\t<span class="meta">Thursday at 8:28AM</span>\n\t\t\t\t\t\t<span class="meta"></span>\n\t\t\t\t\t\t<p class="text">\n\t\t\t\t\t\t\tThank you Isabelle!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class="actions">\n\t\t\t\t\t\t\t<a class="action">Reply</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="comment">\n\t\t<div class="avatar">\n\t\t\t<img src="/examples/365cons_panda.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<a class="creator">Stuee Brown</a>\n\t\t\t<span class="meta">Friday at 10:36AM</span>\n\t\t\t<p class="text">\n\t\t\t\tWhat&#39;s up Johnny!\n\t\t\t</p>\n\t\t\t<div class="actions">\n\t\t\t\t<a class="action">Reply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="reply">\n\t\t<div class="input">\n\t\t\t<textarea name="reply"></textarea>\n\t\t</div>\n\t\t<div class="group">\n\t\t\t<div class="submit button blue labeled">\n\t\t\t\t<i class="fa fa-edit"></i>\n\t\t\t\tSend reply\n\t\t\t</div>\n\t\t\t<div class="discard button default float-right">\n\t\t\t\tDiscard\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>')))));}});var elStages=exports.elStages=_react2.default.createClass({displayName:'elStages',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Stages'},'A button indicates a possible user action'),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Basic stage'),_react2.default.createElement('p',null,'A single stage with a description')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage'},_react2.default.createElement('div',{className:'content'},'Shipping'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage">\n\t\t<div class="content">\n\t\t\tShipping\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Headered stage'),_react2.default.createElement('p',null,'A single stage can also contain a header')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage'},_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Shipment'),'Finalise your items'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage">\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Disabled stage'),_react2.default.createElement('p',null,'A disabled stage is greyed out for the user')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage disabled'},_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Add-ons'),'Not applicable with your order'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage disabled">\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tAdd-ons\n\t\t\t</div>\n\t\t\tNot applicable with your order\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Complete stage'),_react2.default.createElement('p',null,'A stage with a completed state')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage completed'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-check'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Billing'),'Enter billing information'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tBilling\n\t\t\t</div>\n\t\t\tEnter billing information\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Active stage'),_react2.default.createElement('p',null,'A stage with an active state')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage active'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-credit-card'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Billing'),'Enter billing information'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-credit-card"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tBilling\n\t\t\t</div>\n\t\t\tEnter billing information\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Grouped stages'),_react2.default.createElement('p',null,'Grouped stages allow the user to follow a path to the final stage by activating each one along the way')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-truck'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Shipment'),'Finalise your items')),_react2.default.createElement('div',{className:'stage active'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-credit-card'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Payment'),'Enter your billing details')),_react2.default.createElement('div',{className:'stage disabled'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-check'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Confirmation'),'Verify order details'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-truck"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-credit-card"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tPayment\n\t\t\t</div>\n\t\t\tEnter your billing details\n\t\t</div>\n\t</div>\n\t<div class="stage disabled">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tConfirmation\n\t\t\t</div>\n\t\t\tVerify order details\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Completed stages'),_react2.default.createElement('p',null,'Completed stages show the user that the stage has been completed and does not need revisiting')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages'},_react2.default.createElement('div',{className:'stage completed'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-check'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Shipment'),'Finalise your items')),_react2.default.createElement('div',{className:'stage completed'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-check'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Payment'),'Enter your billing details')),_react2.default.createElement('div',{className:'stage active'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-info'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Confirmation'),'Verify your final order'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages">\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tPayment\n\t\t\t</div>\n\t\t\tEnter your billing details\n\t\t</div>\n\t</div>\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-info"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tConfirmation\n\t\t\t</div>\n\t\t\tVerify your final order\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Vertical stages'),_react2.default.createElement('p',null,'Grouped stages can also be vertical aligned')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'stages vertical'},_react2.default.createElement('div',{className:'stage completed'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-check'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Shipment'),'Finalise your items')),_react2.default.createElement('div',{className:'stage completed'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-check'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Payment'),'Enter your billing details')),_react2.default.createElement('div',{className:'stage active'},_react2.default.createElement('div',{className:'icon'},_react2.default.createElement('i',{className:'fa fa-info'})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('div',{className:'header'},'Confirmation'),'Verify your final order'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="stages vertical">\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tShipment\n\t\t\t</div>\n\t\t\tFinalise your items\n\t\t</div>\n\t</div>\n\t<div class="stage completed">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-check"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tPayment\n\t\t\t</div>\n\t\t\tEnter your billing details\n\t\t</div>\n\t</div>\n\t<div class="stage active">\n\t\t<div class="icon">\n\t\t\t<i class="fa fa-info"></i>\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<div class="header">\n\t\t\t\tConfirmation\n\t\t\t</div>\n\t\t\tVerify your final order\n\t\t</div>\n\t</div>\n</div>')))));}});var elLoaders=exports.elLoaders=_react2.default.createClass({displayName:'elLoaders',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Loaders'},'Loaders are used to indicate a state of progress'),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Simple loader'),_react2.default.createElement('p',null,'A ',_react2.default.createElement('code',null,'.loader.small.dark'),' on a non-dimmed background')),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader small dark'})))),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Small inverted loader'),_react2.default.createElement('p',null,'An inverted dimmed module containing a centered ',_react2.default.createElement('code',null,'.loader.small'))),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('div',{className:'dimmed'},_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader small'}))),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}))),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Standard inverted loader'),_react2.default.createElement('p',null,'An inverted dimmed module containing a centered default ',_react2.default.createElement('code',null,'.loader'))),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('div',{className:'dimmed'},_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader'}))),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}))),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Large inverted loader'),_react2.default.createElement('p',null,'An inverted dimmed module containing a centered ',_react2.default.createElement('code',null,'.loader.large'))),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('div',{className:'dimmed'},_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader large'}))),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}))),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Small loader'),_react2.default.createElement('p',null,'A dimmed module containing a centered ',_react2.default.createElement('code',null,'.loader.small.dark'))),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('div',{className:'dimmed inverted'},_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader small dark'}))),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}))),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Standard loader'),_react2.default.createElement('p',null,'A dimmed module containing a centered ',_react2.default.createElement('code',null,'.loader.dark'))),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('div',{className:'dimmed inverted'},_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader dark'}))),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}))),_react2.default.createElement('div',{className:'row example loaders'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('h6',null,'Large loader'),_react2.default.createElement('p',null,'A dimmed module containing a centered ',_react2.default.createElement('code',null,'.loader.large.dark'))),_react2.default.createElement('div',{className:'module'},_react2.default.createElement('div',{className:'dimmed inverted'},_react2.default.createElement('div',{className:'hold'},_react2.default.createElement('div',{className:'loader large dark'}))),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}),_react2.default.createElement('img',{src:'/examples/wireframe.png',alt:''}))));}});var elCards=exports.elCards=_react2.default.createClass({displayName:'elCards',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Cards'},'A button indicates a possible user action'),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Full cards'),_react2.default.createElement('p',null,'Full cards contain an image, title, subtitle, description and a footer')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'cards'},_react2.default.createElement('div',{className:'card'},_react2.default.createElement('div',{className:'header image'},_react2.default.createElement('img',{src:'../examples/365cons_pinata.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('h6',{className:'header'},'Jessie'),_react2.default.createElement('div',{className:'sub'},'Sassy piñata'),_react2.default.createElement('p',null,'Please don\'t just friend me so you can hit me, I\'ll just hand over the candy, I swear.')),_react2.default.createElement('div',{className:'content footer'},_react2.default.createElement('div',{className:'float-left'},_react2.default.createElement('i',{className:'fa fa-users'}),'34 friends'),_react2.default.createElement('div',{className:'float-right'},'Joined 2 days ago'))),_react2.default.createElement('div',{className:'card'},_react2.default.createElement('div',{className:'header image'},_react2.default.createElement('img',{src:'../examples/365cons_cow.jpg',alt:''})),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('h6',{className:'header'},'Wally'),_react2.default.createElement('div',{className:'sub'},'Happy cow'),_react2.default.createElement('p',null,'Don\'t know why people are scared of me... I\'m just your typical friendly neighbour.')),_react2.default.createElement('div',{className:'content footer'},_react2.default.createElement('div',{className:'float-left'},_react2.default.createElement('i',{className:'fa fa-users'}),'6 friends'),_react2.default.createElement('div',{className:'float-right'},'Joined 3 weeks ago')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="cards">\n\t<div class="card">\n\t\t<div class="header image">\n\t\t\t<img src="../examples/365cons_pinata.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tJessie\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tSassy pi&ntilde;ata\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tPlease don&#39;t just friend me so you can hit me, I&#39;ll just hand over the candy, I swear.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="content footer">\n\t\t\t<div class="float-left">\n\t\t\t\t<i class="fa fa-users"></i>\n\t\t\t\t34 friends\n\t\t\t</div>\n\t\t\t<div class="float-right">\n\t\t\t\tJoined 2 days ago\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="card">\n\t\t<div class="header image">\n\t\t\t<img src="../examples/365cons_cow.jpg" alt="" />\n\t\t</div>\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tWally\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tHappy cow\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tDon&#39;t know why people are scared of me... I&#39;m just your typical friendly neighbour.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="content footer">\n\t\t\t<div class="float-left">\n\t\t\t\t<i class="fa fa-users"></i>\n\t\t\t\t6 friends\n\t\t\t</div>\n\t\t\t<div class="float-right">\n\t\t\t\tJoined 3 weeks ago\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Action cards'),_react2.default.createElement('p',null,'A card can be used to display information as well as list a call to action')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'cards'},_react2.default.createElement('div',{className:'card'},_react2.default.createElement('div',{className:'content'},_react2.default.createElement('h6',{className:'header'},'Can\'t log in!'),_react2.default.createElement('div',{className:'sub'},'Created by Michelle'),_react2.default.createElement('p',null,'There is an issue with logging in to my account. I have already tried resetting the password.')),_react2.default.createElement('div',{className:'content footer button'},'View issue'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="cards">\n\t<div class="card">\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tCan&#39;t log in!\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tCreated by Michelle\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tThere is an issue with logging in to my account. I have already tried resetting the password.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="content footer button">\n\t\t\tView issue\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Basic cards'),_react2.default.createElement('p',null,'Basic cards are used to display simple information')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'cards'},_react2.default.createElement('div',{className:'card'},_react2.default.createElement('div',{className:'content'},_react2.default.createElement('h6',{className:'header'},'Koi'),_react2.default.createElement('div',{className:'sub'},'Fish'),_react2.default.createElement('p',null,'Koi or more specifically nishikigoi, are ornamental varieties of domesticated common carp that are kept for decorative purposes in outdoor koi ponds or water gardens.')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="cards">\n\t<div class="card">\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tKoi\n\t\t\t</h6>\n\t\t\t<div class="sub">\n\t\t\t\tFish\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tKoi or more specifically nishikigoi, are ornamental varieties of domesticated common carp that are kept for decorative purposes in outdoor koi ponds or water gardens.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Fluid cards'),_react2.default.createElement('p',null,'Cards can also take up the width of the container by adding the ',_react2.default.createElement('code',null,'fluid'),' class')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'cards'},_react2.default.createElement('div',{className:'card fluid'},_react2.default.createElement('div',{className:'content'},_react2.default.createElement('h6',{className:'header'},'Peafowl'),_react2.default.createElement('a',{className:'sub'},'https://en.wikipedia.org/wiki/Peafowl'),_react2.default.createElement('p',null,'The Peafowl include two Asiatic bird species (the blue or Indian peafowl originally of India and Sri Lanka and the green peafowl of Myanmar, Indochina, and Java) and one African species (the Congo peafowl native only to the Congo Basin) of bird in the genera Pavo and Afropavo of the Phasianidae family, the pheasants and their allies, known for the male\'s piercing call and, among the Asiatic species, his extravagant eye-spotted tail covert feathers which he displays as part of a courtship ritual. The term peacock is properly reserved for the male; the female is known as a peahen, and the immature offspring are sometimes called peachicks.')))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="cards">\n\t<div class="card fluid">\n\t\t<div class="content">\n\t\t\t<h6 class="header">\n\t\t\t\tPeafowl\n\t\t\t</h6>\n\t\t\t<a class="sub">\n\t\t\t\thttps://en.wikipedia.org/wiki/Peafowl\n\t\t\t</a>\n\t\t\t<p>\n\t\t\t\tThe Peafowl include two Asiatic bird species (the blue or Indian peafowl originally of India and Sri Lanka and the green peafowl of Myanmar, Indochina, and Java) and one African species (the Congo peafowl native only to the Congo Basin) of bird in the genera Pavo and Afropavo of the Phasianidae family, the pheasants and their allies, known for the male&#39;s piercing call and, among the Asiatic species, his extravagant eye-spotted tail covert feathers which he displays as part of a courtship ritual. The term peacock is properly reserved for the male; the female is known as a peahen, and the immature offspring are sometimes called peachicks.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>')))));}});var elLists=exports.elLists=_react2.default.createClass({displayName:'elLists',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Lists'},'A button indicates a possible user action'),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Unstyled lists'),_react2.default.createElement('p',null,'A list with no symbol for each item')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ul',{className:'list'},_react2.default.createElement('li',{className:'item'},'Item 1'),_react2.default.createElement('li',{className:'item'},'Item 2'),_react2.default.createElement('li',{className:'item'},'Item 3'),_react2.default.createElement('li',{className:'item'},'Item 4')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ul class="list">\n\t<li class="item">Item 1</li>\n\t<li class="item">Item 2</li>\n\t<li class="item">Item 3</li>\n\t<li class="item">Item 4</li>\n</ul>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Bulleted lists'),_react2.default.createElement('p',null,'A list styled with bullet points')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ul',{className:'list bulleted'},_react2.default.createElement('li',{className:'item'},'Item 1'),_react2.default.createElement('li',{className:'item'},'Item 2'),_react2.default.createElement('li',{className:'item'},'Item 3'),_react2.default.createElement('ul',{className:'list bulleted'},_react2.default.createElement('li',{className:'item'},'Item 1'),_react2.default.createElement('li',{className:'item'},'Item 2'),_react2.default.createElement('li',{className:'item'},'Item 3'),_react2.default.createElement('li',{className:'item'},'Item 4')),_react2.default.createElement('li',{className:'item'},'Item 4')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ul class="list bulleted">\n\t<li class="item">Item 1</li>\n\t<li class="item">Item 2</li>\n\t<li class="item">Item 3</li>\n\t<ul class="list bulleted">\n\t\t<li class="item">Item 1</li>\n\t\t<li class="item">Item 2</li>\n\t\t<li class="item">Item 3</li>\n\t\t<li class="item">Item 4</li>\n\t</ul>\n\t<li class="item">Item 4</li>\n</ul>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Numbered lists'),_react2.default.createElement('p',null,'A numbered list structured by ',_react2.default.createElement('code',null,'div'),'tags')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'list ordered'},_react2.default.createElement('div',{className:'item'},'Item 1'),_react2.default.createElement('div',{className:'item'},'Item 2'),_react2.default.createElement('div',{className:'item'},'Item 3',_react2.default.createElement('div',{className:'list ordered'},_react2.default.createElement('div',{className:'item'},'Item 1'),_react2.default.createElement('div',{className:'item'},'Item 2'),_react2.default.createElement('div',{className:'item'},'Item 3'))),_react2.default.createElement('div',{className:'item'},'Item 4')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="list ordered">\n\t<div class="item">Item 1</div>\n\t<div class="item">Item 2</div>\n\t<div class="item">Item 3\n\t<div class="list ordered">\n\t\t<div class="item">Item 1</div>\n\t\t<div class="item">Item 2</div>\n\t\t<div class="item">Item 3</div>\n\t</div>\n\t</div>\n\t<div class="item">Item 4</div>\n</div>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Numbered lists'),_react2.default.createElement('p',null,'A numbered list structured by ',_react2.default.createElement('code',null,'ol'),'tags')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ol',{className:'list ordered'},_react2.default.createElement('li',null,'Item 1'),_react2.default.createElement('li',null,'Item 2'),_react2.default.createElement('li',null,'Item 3',_react2.default.createElement('ol',{className:'list ordered'},_react2.default.createElement('li',null,'Item 1'),_react2.default.createElement('li',null,'Item 2'),_react2.default.createElement('li',null,'Item 3'))),_react2.default.createElement('li',null,'Item 4')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ol class="list ordered">\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n\t<li>Item 3\n\t<ol class="list ordered">\n\t\t<li>Item 1</li>\n\t\t<li>Item 2</li>\n\t\t<li>Item 3</li>\n\t</ol>\n\t</li>\n\t<li>Item 4</li>\n</ol>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Defined lists'),_react2.default.createElement('p',null,'A list with styling overidden by the ',_react2.default.createElement('code',null,'value'),'property')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ol',{className:'list ordered'},_react2.default.createElement('li',{value:'*'},'Item 1'),_react2.default.createElement('li',{value:'*'},'Item 2'),_react2.default.createElement('li',{value:'*'},'Item 3',_react2.default.createElement('ol',{className:'list ordered'},_react2.default.createElement('li',{value:'-'},'Item 1'),_react2.default.createElement('li',{value:'-'},'Item 2'),_react2.default.createElement('li',{value:'-'},'Item 3'))),_react2.default.createElement('li',{value:'*'},'Item 4')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ol class="list ordered">\n\t<li value="*">Item 1</li>\n\t<li value="*">Item 2</li>\n\t<li value="*">Item 3\n\t<ol class="list ordered">\n\t\t<li value="-">Item 1</li>\n\t\t<li value="-">Item 2</li>\n\t\t<li value="-">Item 3</li>\n\t</ol>\n\t</li>\n\t<li value="*">Item 4</li>\n</ol>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Links lists'),_react2.default.createElement('p',null,'A list of horizontal links')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ul',{className:'list links'},_react2.default.createElement('li',{className:'item active'},_react2.default.createElement('a',null,'Item 1')),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('a',null,'Item 2')),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('a',null,'Item 3')),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('a',null,'Item 4'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ul class="list links">\n\t<li class="item active"><a>Item 1</a></li>\n\t<li class="item"><a>Item 2</a></li>\n\t<li class="item"><a>Item 3</a></li>\n\t<li class="item"><a>Item 4</a></li>\n</ul>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Headered lists'),_react2.default.createElement('p',null,'A list of items with a header')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ul',{className:'list'},_react2.default.createElement('li',{className:'item'},_react2.default.createElement('div',{className:'header'},'Item 1 Header'),'This is item 1 with a header!'),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('div',{className:'header'},'Item 2 Header'),'This is item 2 with a header!'),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('a',{className:'header'},'Item 2 Header'),'Headers can even be links!')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ul class="list">\n\t<li class="item">\n\t\t<div class="header">\n\t\t\tItem 1 Header\n\t\t</div>\n\t\tThis is item 1 with a header!</li>\n\t<li class="item">\n\t\t<div class="header">\n\t\t\tItem 2 Header\n\t\t</div>\n\t\tThis is item 2 with a header!</li>\n\t<li class="item">\n\t\t<a class="header">\n\t\t\tItem 2 Header\n\t\t</a>\n\t\tHeaders can even be links!</li>\n</ul>')))),_react2.default.createElement('div',{className:'row show-lists example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Divided lists'),_react2.default.createElement('p',null,'A list with items being divided by a border')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('ul',{className:'list divided spaced'},_react2.default.createElement('li',{className:'item'},_react2.default.createElement('i',{className:'icon large fa fa-github'}),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'header'},'Aotik/Blossom'),'Updated 22 seconds ago')),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('i',{className:'icon large fa fa-github'}),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'header'},'Aotik/Blossom'),'Updated 22 seconds ago')),_react2.default.createElement('li',{className:'item'},_react2.default.createElement('i',{className:'icon large fa fa-github'}),_react2.default.createElement('div',{className:'content'},_react2.default.createElement('a',{className:'header'},'Aotik/Blossom'),'Updated 22 seconds ago'))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<ul class="list divided spaced">\n\t<li class="item">\n\t\t<i class="icon large fa fa-github"></i>\n\t\t<div class="content">\n\t\t\t<a class="header">\n\t\t\t\tAotik/Blossom\n\t\t\t</a>\n\t\t\tUpdated 22 seconds ago\n\t\t</div>\n\t\t</li>\n\t<li class="item">\n\t\t<i class="icon large fa fa-github"></i>\n\t\t<div class="content">\n\t\t\t<a class="header">\n\t\t\t\tAotik/Blossom\n\t\t\t</a>\n\t\t\tUpdated 22 seconds ago\n\t\t</div>\n\t\t</li>\n\t<li class="item">\n\t\t<i class="icon large fa fa-github"></i>\n\t\t<div class="content">\n\t\t\t<a className="header">\n\t\t\t\tAotik/Blossom\n\t\t\t</a>\n\t\t\tUpdated 22 seconds ago\n\t\t</div>\n\t\t</li>\n</ul>')))));}});var elDividers=exports.elDividers=_react2.default.createClass({displayName:'elDividers',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Dividers'},'Dividers are used to split information into readable sections'),_react2.default.createElement('div',{className:'row example dividers'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Default divider'),_react2.default.createElement('p',null,'Basic one line divider')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('img',{src:'/examples/wireframe.png'}),_react2.default.createElement('div',{className:'divider'}),_react2.default.createElement('img',{src:'/examples/wireframe.png'}),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<img src="/examples/wireframe.png"/>\n<div className="divider"></div>\n<img src="/examples/wireframe.png"/>')))),_react2.default.createElement('div',{className:'row example dividers'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Divider with text'),_react2.default.createElement('p',null,'Horizontal dividers can contain text')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('img',{src:'/examples/wireframe.png'}),_react2.default.createElement('div',{className:'divider horizontal'},'Specification'),_react2.default.createElement('img',{src:'/examples/wireframe.png'}),_react2.default.createElement('div',{className:'divider horizontal'},_react2.default.createElement('code',null,'Dividers fully adapt to the length of text between them')),_react2.default.createElement('img',{src:'/examples/wireframe.png'}),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<img src="/examples/wireframe.png"/>\n<div class="divider horizontal">\n\tSpecification\n</div>\n<img src="/examples/wireframe.png"/>\n<div class="divider horizontal">\n\t<code>Dividers fully adapt to the length of text between them</code>\n</div>\n<img src="/examples/wireframe.png"/>')))));}});var elProgressBars=exports.elProgressBars=_react2.default.createClass({displayName:'elProgressBars',componentDidMount:function componentDidMount(){$(document).ready(function(){loadProgressBars();loadActiveProgressBars();});},render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Progress bars'},'Progess bars are used to indicate the progress state of a certain action'),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Default progress bar'),_react2.default.createElement('p',null,'A simple progress bar shows the state, defined by the ',_react2.default.createElement('code',null,'data-percent'),' attribute, of progress without a written status')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'progress'},_react2.default.createElement('div',{className:'bar','data-percent':'48'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="progress">\n\t<div class="bar" data-percent="48">\n\t\t<div class="status"></div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Active progress bar'),_react2.default.createElement('p',null,'Progress bars with the ',_react2.default.createElement('code',null,'.active'),' class animate to their defined percentage state')),_react2.default.createElement('div',{className:'message warning'},_react2.default.createElement('p',null,'Note that to use the ',_react2.default.createElement('strong',null,'.active'),' class, you need to include ',_react2.default.createElement('a',null,'Blossom JS'),' in your HTML')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'progress active'},_react2.default.createElement('div',{className:'bar green show','data-percent':'76'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="progress active">\n\t<div class="bar green show" data-percent="76">\n\t\t<div class="status"></div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example types'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Show status'),_react2.default.createElement('p',null,'To show the status, you need to be using a standard or ',_react2.default.createElement('code',null,'.large'),' progress bar then add the ',_react2.default.createElement('code',null,'.show'),' class to ',_react2.default.createElement('code',null,'.bar'))),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'progress active'},_react2.default.createElement('div',{className:'bar violet show','data-percent':'96'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'progress large active'},_react2.default.createElement('div',{className:'bar purple show','data-percent':'66'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="progress tiny active">\n\t<div class="bar yellow" data-percent="92">\n\t\t<div class="status"></div>\n\t</div>\n</div>\n<div class="progress small active">\n\t<div class="bar orange" data-percent="42">\n\t\t<div class="status"></div>\n\t</div>\n</div>\n<div class="progress large active">\n\t<div class="bar red show" data-percent="58">\n\t\t<div class="status"></div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example types'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Progress bar sizes'),_react2.default.createElement('p',null,'Progress bars come in ',_react2.default.createElement('code',null,'.tiny'),', ',_react2.default.createElement('code',null,'.small'),' and ',_react2.default.createElement('code',null,'.large'),' as well')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'progress tiny active'},_react2.default.createElement('div',{className:'bar yellow','data-percent':'92'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'progress small active'},_react2.default.createElement('div',{className:'bar orange','data-percent':'42'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'progress large active'},_react2.default.createElement('div',{className:'bar red','data-percent':'58'},_react2.default.createElement('div',{className:'status'}))),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="progress active">\n\t<div class="bar violet show" data-percent="96">\n\t\t<div class="status"></div>\n\t</div>\n</div>\n<div class="progress large active">\n\t<div class="bar purple show" data-percent="66">\n\t\t<div class="status"></div>\n\t</div>\n</div>')))),_react2.default.createElement('div',{className:'row example types'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Progress bar colors'),_react2.default.createElement('p',null,'As you already probably realised, progress bars can be any color in the palette')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar red','data-percent':'23'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar orange','data-percent':'79'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar yellow','data-percent':'54'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar green','data-percent':'38'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar teal','data-percent':'46'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar blue','data-percent':'88'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar violet','data-percent':'80'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar purple','data-percent':'84'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar pink','data-percent':'42'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar brown','data-percent':'28'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar grey','data-percent':'34'})),_react2.default.createElement('div',{className:'progress small'},_react2.default.createElement('div',{className:'bar black','data-percent':'55'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="progress small">\n\t<div class="bar red" data-percent="23">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar orange" data-percent="79">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar yellow" data-percent="54">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar green" data-percent="38">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar teal" data-percent="46">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar blue" data-percent="88">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar violet" data-percent="80">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar purple" data-percent="84">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar pink" data-percent="42">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar brown" data-percent="28">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar grey" data-percent="34">\n\t</div>\n</div>\n<div class="progress small">\n\t<div class="bar black" data-percent="55">\n\t</div>\n</div>')))));}});var elMenus=exports.elMenus=_react2.default.createClass({displayName:'elMenus',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Menus'},'Menu components be used for grouped navigation'),_react2.default.createElement('div',{className:'row example menus'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Pills'),_react2.default.createElement('p',null,'Pill menus are simple, having a transparent background and a background color on hover or ',_react2.default.createElement('code',null,'.active'),' state')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'pills menu'},_react2.default.createElement('a',{className:'item active'},'Home'),_react2.default.createElement('a',{className:'item'},'About'),_react2.default.createElement('a',{className:'item'},'Contact')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="pills menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tAbout\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>')))),_react2.default.createElement('div',{className:'row example menus'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Vertical pills'),_react2.default.createElement('p',null,'Pill menus can also be set to vertical by adding the ',_react2.default.createElement('code',null,'.vertical'),' class')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'vertical pills menu'},_react2.default.createElement('a',{className:'item active'},'Home'),_react2.default.createElement('a',{className:'item'},'About'),_react2.default.createElement('a',{className:'item'},'Contact')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="vertical pills menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tAbout\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>')))),_react2.default.createElement('div',{className:'row example menus'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Underlined'),_react2.default.createElement('p',{className:'note'},'Underlined menus are a simple text-based menu with a prominent underline on ',_react2.default.createElement('code',null,'.active'),' items')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'underlined menu'},_react2.default.createElement('a',{className:'item active'},'Home'),_react2.default.createElement('a',{className:'item'},'Inbox',_react2.default.createElement('span',{className:'label blue'},'4')),_react2.default.createElement('a',{className:'item'},'Sent')),_react2.default.createElement('p',{className:'note'},'Add the ',_react2.default.createElement('code',null,'.show'),' class to ',_react2.default.createElement('code',null,'.menu'),' to show the gray guideline'),_react2.default.createElement('div',{className:'show underlined menu'},_react2.default.createElement('a',{className:'item active'},'Home'),_react2.default.createElement('a',{className:'item'},'Inbox',_react2.default.createElement('span',{className:'label blue'},'4')),_react2.default.createElement('a',{className:'item'},'Sent')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>\n\n<div class="show underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>')))),_react2.default.createElement('div',{className:'row example menus'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Vertical underlined'),_react2.default.createElement('p',null,'Underlined menus are a simple text-based menu with a prominent underline on ',_react2.default.createElement('code',null,'.active'),' items')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'vertical underlined menu'},_react2.default.createElement('a',{className:'item active'},'Home'),_react2.default.createElement('a',{className:'item'},'Inbox',_react2.default.createElement('span',{className:'label blue'},'4')),_react2.default.createElement('a',{className:'item'},'Sent')),_react2.default.createElement('p',{className:'note'},'Add the ',_react2.default.createElement('code',null,'.show'),' class to ',_react2.default.createElement('code',null,'.menu'),' to show the gray guideline'),_react2.default.createElement('div',{className:'show vertical underlined menu'},_react2.default.createElement('a',{className:'item active'},'Home'),_react2.default.createElement('a',{className:'item'},'Inbox',_react2.default.createElement('span',{className:'label blue'},'4')),_react2.default.createElement('a',{className:'item'},'Sent')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>\n\n<div class="show underlined menu">\n\t<a class="item active">\n\t\tHome\n\t</a>\n\t<a class="item">\n\t\tInbox\n\t\t<span class="label blue">4</span>\n\t</a>\n\t<a class="item">\n\t\tSent\n\t</a>\n</div>')))),_react2.default.createElement('div',{className:'row example menus'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Paneled'),_react2.default.createElement('p',null,'Paneled menus come in a moduled type container spanning the width of the parent')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'panel menu'},_react2.default.createElement('a',{className:'item'},'Resume'),_react2.default.createElement('a',{className:'item'},'Portfolio'),_react2.default.createElement('a',{className:'item'},'Contact')),_react2.default.createElement('p',{className:'note'},'Add the ',_react2.default.createElement('code',null,'.borderless'),' class to ',_react2.default.createElement('code',null,'.menu'),' to remove the borders from the paneled menu'),_react2.default.createElement('div',{className:'borderless panel menu'},_react2.default.createElement('a',{className:'item'},'1'),_react2.default.createElement('a',{className:'item'},'2'),_react2.default.createElement('a',{className:'item'},'3'),_react2.default.createElement('a',{className:'item'},'4'),_react2.default.createElement('a',{className:'item'},'5'),_react2.default.createElement('a',{className:'item'},'6')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="panel menu">\n\t<a class="item active">\n\t\tResume\n\t</a>\n\t<a class="item">\n\t\tPortfolio\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>')))),_react2.default.createElement('div',{className:'row example menus'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Vertical paneled'),_react2.default.createElement('p',null,'Paneled menus can also be set to vertical by adding the ',_react2.default.createElement('code',null,'.vertical'),' class')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'vertical panel menu'},_react2.default.createElement('a',{className:'item active'},'Resume'),_react2.default.createElement('a',{className:'item'},'Portfolio'),_react2.default.createElement('a',{className:'item'},'Contact')),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="vertical panel menu">\n\t<a class="item active">\n\t\tResume\n\t</a>\n\t<a class="item">\n\t\tPortfolio\n\t</a>\n\t<a class="item">\n\t\tContact\n\t</a>\n</div>')))));}});var elButtons=exports.elButtons=_react2.default.createClass({displayName:'elButtons',render:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_Title2.default,{title:'Buttons'},'A button indicates a possible user action'),_react2.default.createElement('div',{className:'row example buttons'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Default & Primary buttons'),_react2.default.createElement('p',null,'Standard buttons')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'button'},'Default Button'),_react2.default.createElement('div',{className:'button primary'},'Primary Button'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="button">\n\tDefault Button\n</div>\n<div class="button primary">\n\tPrimary Button\n</div>')))),_react2.default.createElement('div',{className:'row example buttons'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Outlined buttons'),_react2.default.createElement('p',null,'Transparent buttons with an outline')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'button outlined'},'Outlined default'),_react2.default.createElement('div',{className:'button red outlined'},'Outlined red'),_react2.default.createElement('div',{className:'button orange outlined'},'Outlined orange'),_react2.default.createElement('div',{className:'button yellow outlined'},'Outlined yellow'),_react2.default.createElement('div',{className:'button teal outlined'},'Outlined teal'),_react2.default.createElement('div',{className:'button blue outlined'},'Outlined blue'),_react2.default.createElement('div',{className:'button violet outlined'},'Outlined violet'),_react2.default.createElement('div',{className:'button purple outlined'},'Outlined purple'),_react2.default.createElement('div',{className:'button pink outlined'},'Outlined pink'),_react2.default.createElement('div',{className:'button brown outlined'},'Outlined brown'),_react2.default.createElement('div',{className:'button grey outlined'},'Outlined grey'),_react2.default.createElement('div',{className:'button black outlined'},'Outlined black'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="button outlined">\n\tOutlined default\n</div>\n<div class="button red outlined">\n\tOutlined red\n</div>\n<div class="button orange outlined">\n\tOutlined orange\n</div>\n<div class="button yellow outlined">\n\tOutlined yellow\n</div>\n<div class="button teal outlined">\n\tOutlined teal\n</div>\n<div class="button blue outlined">\n\tOutlined blue\n</div>\n<div class="button violet outlined">\n\tOutlined violet\n</div>\n<div class="button purple outlined">\n\tOutlined purple\n</div>\n<div class="button pink outlined">\n\tOutlined pink\n</div>\n<div class="button brown outlined">\n\tOutlined brown\n</div>\n<div class="button grey outlined">\n\tOutlined grey\n</div>\n<div class="button black outlined">\n\tOutlined black\n</div>')))),_react2.default.createElement('div',{className:'row example buttons'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Colored buttons'),_react2.default.createElement('p',null,'Spice up your page with colored buttons')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'button red'},'Red'),_react2.default.createElement('div',{className:'button orange'},'Orange'),_react2.default.createElement('div',{className:'button yellow'},'Yellow'),_react2.default.createElement('div',{className:'button green'},'Green'),_react2.default.createElement('div',{className:'button teal'},'Teal'),_react2.default.createElement('div',{className:'button blue'},'Blue'),_react2.default.createElement('div',{className:'button violet'},'Violet'),_react2.default.createElement('div',{className:'button purple'},'Purple'),_react2.default.createElement('div',{className:'button pink'},'Pink'),_react2.default.createElement('div',{className:'button brown'},'Brown'),_react2.default.createElement('div',{className:'button grey'},'Grey'),_react2.default.createElement('div',{className:'button black'},'Black'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="button red">\n\tRed\n</div>\n<div class="button orange">\n\tOrange\n</div>\n<div class="button yellow">\n\tYellow\n</div>\n<div class="button green">\n\tGreen\n</div>\n<div class="button teal">\n\tTeal\n</div>\n<div class="button blue">\n\tBlue\n</div>\n<div class="button violet">\n\tViolet\n</div>\n<div class="button purple">\n\tPurple\n</div>\n<div class="button pink">\n\tPink\n</div>\n<div class="button brown">\n\tBrown\n</div>\n<div class="button grey">\n\tGrey\n</div>\n<div class="button black">\n\tBlack\n</div>')))),_react2.default.createElement('div',{className:'row example buttons'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Labeled buttons'),_react2.default.createElement('p',null,'Labels give visual aid on what the button does')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'button blue labeled'},_react2.default.createElement('i',{className:'fa fa-check'}),'Labeled Button'),_react2.default.createElement('div',{className:'button green labeled'},_react2.default.createElement('i',{className:'fa fa-shopping-cart'}),'Checkout'),_react2.default.createElement('div',{className:'button red labeled labeled-right'},'Delete',_react2.default.createElement('i',{className:'fa fa-times'})),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div class="button blue labeled">\n\t<i class="fa fa-check"></i>\n\tLabeled Button\n</div>\n<div class="button green labeled">\n\t<i class="fa fa-shopping-cart"></i>\n\tCheckout\n</div>\n<div class="button red labeled labeled-right">\n\tDelete\n\t<i class="fa fa-times"></i>\n</div>')))),_react2.default.createElement('div',{className:'row example sizes'},_react2.default.createElement('div',{className:'explanation'},_react2.default.createElement('a',{className:'view-source'},_react2.default.createElement('i',{className:'fa fa-code'})),_react2.default.createElement('h6',null,'Button sizes'),_react2.default.createElement('p',null,'Add ',_react2.default.createElement('code',null,'.small'),_react2.default.createElement('code',null,'.medium'),_react2.default.createElement('code',null,'.large'),_react2.default.createElement('code',null,'.big'),_react2.default.createElement('code',null,'.massive'),' classes to your button to change its size')),_react2.default.createElement('div',{className:'module collapsed'},_react2.default.createElement('div',{className:'button small'},'Small'),_react2.default.createElement('div',{className:'button medium'},'Medium'),_react2.default.createElement('div',{className:'button large'},'Large'),_react2.default.createElement('div',{className:'button big'},'Big'),_react2.default.createElement('div',{className:'button massive'},'Massive'),_react2.default.createElement('div',{className:'footer'},_react2.default.createElement(_reactHighlight2.default,{className:'html'},'<div className="button small">\n\tSmall\n</div>\n<div className="button medium">\n\tMedium\n</div>\n<div className="button large">\n\tLarge\n</div>\n<div className="button big">\n\tBig\n</div>\n<div className="button massive">\n\tMassive\n</div>')))));}});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: "Title",

		contextTypes: {
			router: _react2.default.PropTypes.object
		},

		render: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "outer-title" },
				_react2.default.createElement(
					"h4",
					{ className: "title" },
					this.props.title
				),
				_react2.default.createElement(
					"p",
					this.props,
					this.props.children
				)
			);
		}
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-highlight");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.deBreakpoints = exports.deGrid = exports.deAnimations = exports.deTypography = exports.deScheme = exports.deDefault = exports.deHeader = exports.deMain = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	var _Title = __webpack_require__(11);

	var _Title2 = _interopRequireDefault(_Title);

	var _reactHighlight = __webpack_require__(12);

	var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var deMain = exports.deMain = _react2.default.createClass({
		displayName: 'deMain',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.props.children || _react2.default.createElement(
					'div',
					null,
					'Design'
				)
			);
		}
	});

	var deHeader = exports.deHeader = _react2.default.createClass({
		displayName: 'deHeader',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Design'
			);
		}
	});

	var deDefault = exports.deDefault = _react2.default.createClass({
		displayName: 'deDefault',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Design'
			);
		}
	});

	var deScheme = exports.deScheme = _react2.default.createClass({
		displayName: 'deScheme',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Color scheme' },
					'Primary colors to be used in conjunction with other Blossom elements.'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'UI colors'
						),
						_react2.default.createElement(
							'p',
							null,
							'Light, standard and dark colors used in Blossom UI'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme red light' },
							_react2.default.createElement(
								'p',
								null,
								'Light red'
							),
							_react2.default.createElement(
								'span',
								null,
								'#FF6D6D'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme red' },
							_react2.default.createElement(
								'p',
								null,
								'Red'
							),
							_react2.default.createElement(
								'span',
								null,
								'#ff4949'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme red dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark red'
							),
							_react2.default.createElement(
								'span',
								null,
								'#FF0707'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme orange light' },
							_react2.default.createElement(
								'p',
								null,
								'Light orange'
							),
							_react2.default.createElement(
								'span',
								null,
								'#FF964A'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme orange' },
							_react2.default.createElement(
								'p',
								null,
								'Orange'
							),
							_react2.default.createElement(
								'span',
								null,
								'#FF7C1D'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme orange dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark orange'
							),
							_react2.default.createElement(
								'span',
								null,
								'#E36000'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme yellow light' },
							_react2.default.createElement(
								'p',
								null,
								'Light yellow'
							),
							_react2.default.createElement(
								'span',
								null,
								'#FFD356'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme yellow' },
							_react2.default.createElement(
								'p',
								null,
								'Yellow'
							),
							_react2.default.createElement(
								'span',
								null,
								'#FFC82C'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme yellow dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark yellow'
							),
							_react2.default.createElement(
								'span',
								null,
								'#EFB100'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme green light' },
							_react2.default.createElement(
								'p',
								null,
								'Light green'
							),
							_react2.default.createElement(
								'span',
								null,
								'#2EEC82'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme green' },
							_react2.default.createElement(
								'p',
								null,
								'Green'
							),
							_react2.default.createElement(
								'span',
								null,
								'#13CE66'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme green dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark green'
							),
							_react2.default.createElement(
								'span',
								null,
								'#0FA552'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme teal light' },
							_react2.default.createElement(
								'p',
								null,
								'Light teal'
							),
							_react2.default.createElement(
								'span',
								null,
								'#00DAC6'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme teal' },
							_react2.default.createElement(
								'p',
								null,
								'Teal'
							),
							_react2.default.createElement(
								'span',
								null,
								'#00BAA9'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme teal dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark teal'
							),
							_react2.default.createElement(
								'span',
								null,
								'#009587'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme blue light' },
							_react2.default.createElement(
								'p',
								null,
								'Light blue'
							),
							_react2.default.createElement(
								'span',
								null,
								'#4692FF'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme blue' },
							_react2.default.createElement(
								'p',
								null,
								'Blue'
							),
							_react2.default.createElement(
								'span',
								null,
								'#1877FF'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme blue dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark blue'
							),
							_react2.default.createElement(
								'span',
								null,
								'#005CDF'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme violet light' },
							_react2.default.createElement(
								'p',
								null,
								'Light violet'
							),
							_react2.default.createElement(
								'span',
								null,
								'#BD21FB'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme violet' },
							_react2.default.createElement(
								'p',
								null,
								'Violet'
							),
							_react2.default.createElement(
								'span',
								null,
								'#A104E0'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme violet dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark violet'
							),
							_react2.default.createElement(
								'span',
								null,
								'#8103B3'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme purple light' },
							_react2.default.createElement(
								'p',
								null,
								'Light purple'
							),
							_react2.default.createElement(
								'span',
								null,
								'#835DD4'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme purple' },
							_react2.default.createElement(
								'p',
								null,
								'Purple'
							),
							_react2.default.createElement(
								'span',
								null,
								'#6435C9'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme purple dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark purple'
							),
							_react2.default.createElement(
								'span',
								null,
								'#502AA1'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme pink light' },
							_react2.default.createElement(
								'p',
								null,
								'Light pink'
							),
							_react2.default.createElement(
								'span',
								null,
								'#E661AC'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme pink' },
							_react2.default.createElement(
								'p',
								null,
								'Pink'
							),
							_react2.default.createElement(
								'span',
								null,
								'#E03997'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme pink dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark pink'
							),
							_react2.default.createElement(
								'span',
								null,
								'#C21E7B'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme brown light' },
							_react2.default.createElement(
								'p',
								null,
								'Light brown'
							),
							_react2.default.createElement(
								'span',
								null,
								'#C97A54'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme brown' },
							_react2.default.createElement(
								'p',
								null,
								'Brown'
							),
							_react2.default.createElement(
								'span',
								null,
								'#AD5E37'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme brown dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark brown'
							),
							_react2.default.createElement(
								'span',
								null,
								'#8A4B2C'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Gray colors'
						),
						_react2.default.createElement(
							'p',
							null,
							'Light, standard and dark grays used in Blossom UI'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme ash light' },
							_react2.default.createElement(
								'p',
								null,
								'Light ash'
							),
							_react2.default.createElement(
								'span',
								null,
								'#494C4F'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme ash' },
							_react2.default.createElement(
								'p',
								null,
								'Ash'
							),
							_react2.default.createElement(
								'span',
								null,
								'#2F3133'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme ash dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark ash'
							),
							_react2.default.createElement(
								'span',
								null,
								'#202020'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row schemes dark' },
						_react2.default.createElement(
							'div',
							{ className: 'scheme smoke light' },
							_react2.default.createElement(
								'p',
								null,
								'Light smoke'
							),
							_react2.default.createElement(
								'span',
								null,
								'#F7F9FB'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme smoke' },
							_react2.default.createElement(
								'p',
								null,
								'Smoke'
							),
							_react2.default.createElement(
								'span',
								null,
								'#E4E9EC'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'scheme smoke dark' },
							_react2.default.createElement(
								'p',
								null,
								'Dark smoke'
							),
							_react2.default.createElement(
								'span',
								null,
								'#C9D3D9'
							)
						)
					)
				)
			);
		}
	});

	var deTypography = exports.deTypography = _react2.default.createClass({
		displayName: 'deTypography',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Typography' },
					'Experience the face of Blossom'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example typeface' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Headers'
						),
						_react2.default.createElement(
							'p',
							null,
							'Headers amplify headings and subheadings by using ',
							_react2.default.createElement(
								'code',
								null,
								'<h1>'
							),
							' ',
							_react2.default.createElement(
								'code',
								null,
								'<h2>'
							),
							' ',
							_react2.default.createElement(
								'code',
								null,
								'<h3>'
							),
							' ',
							_react2.default.createElement(
								'code',
								null,
								'<h4>'
							),
							' ',
							_react2.default.createElement(
								'code',
								null,
								'<h5>'
							),
							' ',
							_react2.default.createElement(
								'code',
								null,
								'<h6>'
							),
							'  tags'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							'div',
							{ className: 'antiScroll' },
							_react2.default.createElement(
								'div',
								{ className: 'section nowrap' },
								_react2.default.createElement(
									'h1',
									null,
									'The quick brown fox jumps over the lazy dog'
								),
								_react2.default.createElement(
									'small',
									null,
									'h1 - 3.8em'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'antiScroll' },
							_react2.default.createElement(
								'div',
								{ className: 'section nowrap' },
								_react2.default.createElement(
									'h2',
									null,
									'The quick brown fox jumps over the lazy dog'
								),
								_react2.default.createElement(
									'small',
									null,
									'h2 - 3em'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'antiScroll' },
							_react2.default.createElement(
								'div',
								{ className: 'section nowrap' },
								_react2.default.createElement(
									'h3',
									null,
									'The quick brown fox jumps over the lazy dog'
								),
								_react2.default.createElement(
									'small',
									null,
									'h3 - 2.2em'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'antiScroll' },
							_react2.default.createElement(
								'div',
								{ className: 'section nowrap' },
								_react2.default.createElement(
									'h4',
									null,
									'The quick brown fox jumps over the lazy dog'
								),
								_react2.default.createElement(
									'small',
									null,
									'h4 - 1.8em'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'antiScroll' },
							_react2.default.createElement(
								'div',
								{ className: 'section nowrap' },
								_react2.default.createElement(
									'h5',
									null,
									'The quick brown fox jumps over the lazy dog'
								),
								_react2.default.createElement(
									'small',
									null,
									'h5 - 1.4em'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'antiScroll' },
							_react2.default.createElement(
								'div',
								{ className: 'section nowrap' },
								_react2.default.createElement(
									'h6',
									null,
									'The quick brown fox jumps over the lazy dog'
								),
								_react2.default.createElement(
									'small',
									null,
									'h6 - 1.08em'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example typeface' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Typeface'
						),
						_react2.default.createElement(
							'p',
							null,
							'Blossom\'s primary typeface is Lato, a beautiful sans serif font family providing a feeling of warmth and friendliness, but at the same time keeping a serious note to it.'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							'p',
							{ className: 'transform uppercase' },
							'a b c d e f g h i j k l m n o p q r s t u v w x y z'
						),
						_react2.default.createElement(
							'p',
							null,
							'a b c d e f g h i j k l m n o p q r s t u v w x y z'
						),
						_react2.default.createElement(
							'p',
							null,
							'0 1 2 3 4 5 6 7 8 9'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example alignment' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Alignment classes'
						),
						_react2.default.createElement(
							'p',
							null,
							'Use left, center & right alignment classes to align your text'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							'p',
							{ className: 'text-left' },
							'Left aligned text'
						),
						_react2.default.createElement(
							'p',
							{ className: 'text-right' },
							'Right aligned text'
						),
						_react2.default.createElement(
							'p',
							{ className: 'text-center' },
							'Center aligned text'
						),
						_react2.default.createElement(
							'p',
							{ className: 'text-justify' },
							'I should be taking up with whole line from left to right even if I\'m only taking up one line!'
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<p class="text-left">\n\tLeft aligned text\n</p>\n<p class="text-right">\n\tRight aligned text\n</p>\n<p class="text-center">\n\tCenter aligned text\n</p>\n<p class="text-justify">\n\tI should be taking up with whole line from left to right even if I&#39;m only taking up one line!\n</p>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example transformtext' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'Transform classes'
						),
						_react2.default.createElement(
							'p',
							null,
							'Use helper classes to transform your text'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							'p',
							{ className: 'transform lowercase' },
							'lowercase text'
						),
						_react2.default.createElement(
							'p',
							{ className: 'transform uppercase' },
							'uppercase text'
						),
						_react2.default.createElement(
							'p',
							{ className: 'transform capitalize' },
							'capitalized text'
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<p class="transform lowercase">\n\tlowercase text\n</p>\n<p class="transform uppercase">\n\tuppercase text\n</p>\n<p class="transform capitalize">\n\tcapitalized text\n</p>'
							)
						)
					)
				)
			);
		}
	});

	var deAnimations = exports.deAnimations = _react2.default.createClass({
		displayName: 'deAnimations',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Animations & Effects' },
					'A collection of animations and effects that can be used on any element'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example animations' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Animation types'
						),
						_react2.default.createElement(
							'p',
							null,
							'Add an infinite loop of animations to any element of your choice'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'group' },
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'square animation-spin' }),
							_react2.default.createElement(
								'code',
								null,
								'.animation-spin'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'square animation-rotate' }),
							_react2.default.createElement(
								'code',
								null,
								'.animation-rotate'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'square animation-bounce' }),
							_react2.default.createElement(
								'code',
								null,
								'.animation-bounce'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example animations' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Transition durations'
						),
						_react2.default.createElement(
							'p',
							null,
							'Use different transition durations depending on how fast you want the animation to take'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'group' },
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-0 transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionDuration-0'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-s transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionDuration-s'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-m transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionDuration-m'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-l transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionDuration-l'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionDuration-xl'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xxl transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionDuration-xxl'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example animations' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Transition types'
						),
						_react2.default.createElement(
							'p',
							null,
							'Use different transition types depending on how you want to animation to appear'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'group' },
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-linear' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionType-linear'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-ease' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionType-ease'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-scaleIn' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionType-scaleIn'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-scaleOut' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionType-scaleOut'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-spring' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionType-spring'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'animation' },
							_react2.default.createElement('div', { className: 'circle transitionDuration-xl transitionType-bounce' }),
							_react2.default.createElement(
								'code',
								null,
								'.transitionType-bounce'
							)
						)
					)
				)
			);
		}
	});

	var deGrid = exports.deGrid = _react2.default.createClass({
		displayName: 'deGrid',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Grid' },
					'A simple 12 column responsive grid which can be used to structure your application'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'XS grid column'
						),
						_react2.default.createElement(
							'p',
							null,
							'XS breakpoints are used to target screens above ',
							_react2.default.createElement(
								'code',
								null,
								'0px'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'In this example, the ',
							_react2.default.createElement(
								'span',
								{ className: 'text-teal' },
								'6 + 6 XS'
							),
							' grid will be structured this way on every screen'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-6' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-6' },
								_react2.default.createElement('div', { className: 'block-grey' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="grid-row">\n\t<div class="xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'S grid column'
						),
						_react2.default.createElement(
							'p',
							null,
							'S breakpoints are used to target screens above ',
							_react2.default.createElement(
								'code',
								null,
								'480px'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'In this example, the ',
							_react2.default.createElement(
								'span',
								{ className: 'text-teal' },
								'6 + 6 S'
							),
							' grid takes over on screens above the S breakpoint'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 s-6' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 s-6' },
								_react2.default.createElement('div', { className: 'block-grey' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="grid-row">\n\t<div class="xs-12 s-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 s-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'M grid column'
						),
						_react2.default.createElement(
							'p',
							null,
							'M breakpoints are used to target screens above ',
							_react2.default.createElement(
								'code',
								null,
								'768px'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'In this example, the ',
							_react2.default.createElement(
								'span',
								{ className: 'text-teal' },
								'3 + 3 + 3 + 3 M'
							),
							' grid takes over on screens above the M breakpoint'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 s-6 m-3' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 s-6 m-3' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 s-6 m-3' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 s-6 m-3' },
								_react2.default.createElement('div', { className: 'block-grey' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="grid-row">\n\t<div class="xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 s-6 m-3">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'L grid column'
						),
						_react2.default.createElement(
							'p',
							null,
							'L breakpoints are used to target screens above ',
							_react2.default.createElement(
								'code',
								null,
								'1024px'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'In this example, the ',
							_react2.default.createElement(
								'span',
								{ className: 'text-teal' },
								'4 + 4 + 4 L'
							),
							' grid takes over on screens above the L breakpoint'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 l-4' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 l-4' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 l-4' },
								_react2.default.createElement('div', { className: 'block-grey' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="grid-row">\n\t<div class="xs-12 l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 l-4">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'XL grid column'
						),
						_react2.default.createElement(
							'p',
							null,
							'XL breakpoints are used to target screens above ',
							_react2.default.createElement(
								'code',
								null,
								'1224px'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'In this example, the ',
							_react2.default.createElement(
								'span',
								{ className: 'text-teal' },
								'2 + 2 + 2 + 2 + 2 + 2 XL'
							),
							' grid takes over on screens above the XL breakpoint'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-6 xl-2' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-6 xl-2' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-6 xl-2' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-6 xl-2' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-6 xl-2' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-6 xl-2' },
								_react2.default.createElement('div', { className: 'block-grey' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="grid-row">\n\t<div class="xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-6 xl-2">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'a',
							{ className: 'view-source' },
							_react2.default.createElement('i', { className: 'fa fa-code' })
						),
						_react2.default.createElement(
							'h6',
							null,
							'HD grid column'
						),
						_react2.default.createElement(
							'p',
							null,
							'HD breakpoints are used to target screens above ',
							_react2.default.createElement(
								'code',
								null,
								'1824px'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'In this example, the ',
							_react2.default.createElement(
								'span',
								{ className: 'text-teal' },
								'6 + 6 HD'
							),
							' grid takes over on screens above the HD breakpoint'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'div',
							{ className: 'grid-row' },
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 l-6' },
								_react2.default.createElement('div', { className: 'block-grey' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'xs-12 l-6' },
								_react2.default.createElement('div', { className: 'block-grey' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="grid-row">\n\t<div class="xs-12 l-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n\t<div class="xs-12 l-6">\n\t\t<div class="block-grey"></div>\n\t</div>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example grids' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Full grid view'
						),
						_react2.default.createElement(
							'p',
							null,
							'An example view of structures that can be created via the grid system'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-1 m-3 s-4 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 's-4 xs-4' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-6 xs-4' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-4' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 'xs-8' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'xs-3' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'xs-1' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 's-4 xs-4' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-4' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-6 xs-4' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-2 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 'm-3 s-4 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'm-3 s-4 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'm-3 s-4 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'm-3 s-4 xs-6' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 'm-4 s-6 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'm-4 s-6 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'm-4 s-6 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-row show-grid' },
						_react2.default.createElement(
							'div',
							{ className: 's-6 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 's-6 xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'xs-12' },
							_react2.default.createElement('div', { className: 'block-grey' })
						)
					)
				)
			);
		}
	});

	var deBreakpoints = exports.deBreakpoints = _react2.default.createClass({
		displayName: 'deBreakpoints',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Breakpoints' },
					'Take advantage of breakpoints when making your website responsive'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example breakpoints' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'XS breakpoint'
						),
						_react2.default.createElement(
							'p',
							null,
							'XS breakpoint classes can be used for specific utility on screens above ',
							_react2.default.createElement(
								'code',
								null,
								'0px'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xs-hide'
							),
							' - Hides the element at XS and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xs-show'
							),
							' - Shows the element at XS and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xs-stackable'
							),
							' - Stacks all children elements at XS and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xs-stack'
							),
							' - Stacks targeted element at XS and above'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example breakpoints' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'S breakpoint'
						),
						_react2.default.createElement(
							'p',
							null,
							'S breakpoint classes can be used for specific utility on screens above ',
							_react2.default.createElement(
								'code',
								null,
								'480px'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-s-hide'
							),
							' - Hides the element at S and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-s-show'
							),
							' - Shows the element at S and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-s-stackable'
							),
							' - Stacks all children elements at S and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-s-stack'
							),
							' - Stacks targeted element at S and above'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example breakpoints' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'M breakpoint'
						),
						_react2.default.createElement(
							'p',
							null,
							'M breakpoint classes can be used for specific utility on screens above ',
							_react2.default.createElement(
								'code',
								null,
								'768px'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-m-hide'
							),
							' - Hides the element at M and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-m-show'
							),
							' - Shows the element at M and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-m-stackable'
							),
							' - Stacks all children elements at M and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-m-stack'
							),
							' - Stacks targeted element at M and above'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example breakpoints' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'L breakpoint'
						),
						_react2.default.createElement(
							'p',
							null,
							'L breakpoint classes can be used for specific utility on screens above ',
							_react2.default.createElement(
								'code',
								null,
								'1024px'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-l-hide'
							),
							' - Hides the element at L and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-l-show'
							),
							' - Shows the element at L and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-l-stackable'
							),
							' - Stacks all children elements at L and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-l-stack'
							),
							' - Stacks targeted element at L and above'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example breakpoints' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'XL breakpoint'
						),
						_react2.default.createElement(
							'p',
							null,
							'XL breakpoint classes can be used for specific utility on screens above ',
							_react2.default.createElement(
								'code',
								null,
								'1224px'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xl-hide'
							),
							' - Hides the element at XL and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xl-show'
							),
							' - Shows the element at XL and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xl-stackable'
							),
							' - Stacks all children elements at XL and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-xl-stack'
							),
							' - Stacks targeted element at XL and above'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example breakpoints' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'HD breakpoint'
						),
						_react2.default.createElement(
							'p',
							null,
							'HD breakpoint classes can be used for specific utility on screens above ',
							_react2.default.createElement(
								'code',
								null,
								'1824px'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module collapsed' },
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-hd-hide'
							),
							' - Hides the element at HD and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-hd-show'
							),
							' - Shows the element at HD and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-hd-stackable'
							),
							' - Stacks all children elements at HD and above'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'code',
								null,
								'.breakpoint-hd-stack'
							),
							' - Stacks targeted element at HD and above'
						)
					)
				)
			);
		}
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ulLayout = exports.ulHide = exports.ulCenter = exports.ulJS = exports.ulDefault = exports.ulHeader = exports.ulMain = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	var _Title = __webpack_require__(11);

	var _Title2 = _interopRequireDefault(_Title);

	var _reactRouter = __webpack_require__(3);

	var _reactHighlight = __webpack_require__(12);

	var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ulMain = exports.ulMain = _react2.default.createClass({
		displayName: 'ulMain',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.props.children || _react2.default.createElement(
					'div',
					null,
					'Utility'
				)
			);
		}
	});

	var ulHeader = exports.ulHeader = _react2.default.createClass({
		displayName: 'ulHeader',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Utility'
			);
		}
	});

	var ulDefault = exports.ulDefault = _react2.default.createClass({
		displayName: 'ulDefault',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Utility'
			);
		}
	});

	var ulJS = exports.ulJS = _react2.default.createClass({
		displayName: 'ulJS',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Using Blossom JS' },
					'Blossom JS is designed to be included in your markup to initialise elements and provide helper functions'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row opening-message' },
					_react2.default.createElement(
						'div',
						{ className: 'message info' },
						_react2.default.createElement(
							'p',
							null,
							'To learn how to get up and running with Blossom JS, visit the ',
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/start' },
								'getting started'
							),
							' guide'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example js' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Initialize dropdowns'
						),
						_react2.default.createElement(
							'p',
							null,
							'You can initialize dropdowns at any time in addition to them being done automatically when Blossom JS is included in your markup'
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'small',
								{ className: 'text-teal' },
								'A more extensive API for dropdowns is coming soon'
							)
						)
					),
					_react2.default.createElement(
						_reactHighlight2.default,
						{ className: 'javascript inline' },
						'$(".dropdown").dropdown()'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example js' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Loading progress bars'
						),
						_react2.default.createElement(
							'p',
							null,
							'Progress bars are already initiated on load of Blossom JS'
						)
					),
					_react2.default.createElement(
						_reactHighlight2.default,
						{ className: 'javascript inline' },
						'loadProgressBars()'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example js' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Loading active progress bars'
						),
						_react2.default.createElement(
							'p',
							null,
							'Active progress bars are also initiated on load of Blossom JS'
						)
					),
					_react2.default.createElement(
						_reactHighlight2.default,
						{ className: 'javascript inline' },
						'loadActiveProgressBars()'
					)
				)
			);
		}
	});

	var ulCenter = exports.ulCenter = _react2.default.createClass({
		displayName: 'ulCenter',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Center elements' },
					'Center selected elements vertically and/or horizontally by adding simple classes'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Align horizontally & vertically'
						),
						_react2.default.createElement(
							'p',
							null,
							'You can simply align elements dead center of a relative container by adding the ',
							_react2.default.createElement(
								'code',
								null,
								'.centered'
							),
							' class'
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'relative' },
								_react2.default.createElement('span', { className: 'block-grey centered' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'footer' },
								_react2.default.createElement(
									_reactHighlight2.default,
									{ className: 'html' },
									'<span className="block-grey centered"></span>'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Align horizontally'
						),
						_react2.default.createElement(
							'p',
							null,
							'To align elements only horizontally within a relative container, add the ',
							_react2.default.createElement(
								'code',
								null,
								'.horizontal'
							),
							' class to ',
							_react2.default.createElement(
								'code',
								null,
								'.centered'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'relative' },
								_react2.default.createElement('span', { className: 'block-grey centered horizontal' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'footer' },
								_react2.default.createElement(
									_reactHighlight2.default,
									{ className: 'html' },
									'<span className="block-grey centered horizontal"></span>'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Align vertically'
						),
						_react2.default.createElement(
							'p',
							null,
							'To align elements only vertically within a relative container, add the ',
							_react2.default.createElement(
								'code',
								null,
								'.vertical'
							),
							' class to ',
							_react2.default.createElement(
								'code',
								null,
								'.centered'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'relative' },
								_react2.default.createElement('span', { className: 'block-grey centered vertical' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'footer' },
								_react2.default.createElement(
									_reactHighlight2.default,
									{ className: 'html' },
									'<span className="block-grey centered vertical"></span>'
								)
							)
						)
					)
				)
			);
		}
	});

	var ulHide = exports.ulHide = _react2.default.createClass({
		displayName: 'ulHide',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Hide elements' },
					'Hide elements completely or visually using the below'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Hide elements completely'
						),
						_react2.default.createElement(
							'p',
							null,
							'By using ',
							_react2.default.createElement(
								'code',
								null,
								'.hidden'
							),
							' you can prevent elements from being shown as well as collapsing its space it would take up'
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement('span', { className: 'block-grey hidden' }),
							_react2.default.createElement(
								'div',
								{ className: 'footer' },
								_react2.default.createElement(
									_reactHighlight2.default,
									{ className: 'html' },
									'<span className="block-grey hidden"></span>'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Visually hide elements'
						),
						_react2.default.createElement(
							'p',
							null,
							'By using ',
							_react2.default.createElement(
								'code',
								null,
								'.invisible'
							),
							' you can prevent elements from being shown but its space will still be taken up as normal'
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement('span', { className: 'block-grey invisible' }),
							_react2.default.createElement(
								'div',
								{ className: 'footer' },
								_react2.default.createElement(
									_reactHighlight2.default,
									{ className: 'html' },
									'<span className="block-grey invisible"></span>'
								)
							)
						)
					)
				)
			);
		}
	});

	var ulLayout = exports.ulLayout = _react2.default.createClass({
		displayName: 'ulLayout',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Title2.default,
					{ title: 'Layout' },
					'Smartly utilise your elements to prevent from repeating the same blocks of code'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row opening-message' },
					_react2.default.createElement(
						'div',
						{ className: 'message info' },
						_react2.default.createElement(
							'h6',
							null,
							'Positioning'
						),
						_react2.default.createElement(
							'p',
							null,
							'You can also use ',
							_react2.default.createElement(
								'code',
								null,
								'.relative'
							),
							_react2.default.createElement(
								'code',
								null,
								'.absolute'
							),
							' ',
							_react2.default.createElement(
								'code',
								null,
								'.fixed'
							),
							' to position elements accordingly'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Clearfix'
						),
						_react2.default.createElement(
							'p',
							null,
							'To expand parents which have floating children elements, you can use ',
							_react2.default.createElement(
								'code',
								null,
								'.clearfix'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							'div',
							{ className: 'clearfix' },
							_react2.default.createElement('span', { className: 'block-grey float-left' }),
							_react2.default.createElement('span', { className: 'block-grey float-right' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="clearfix">\n\t<span class="block-grey float-left"></span>\n\t<span class="block-grey float-right"></span>\n</div>'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row example layout' },
					_react2.default.createElement(
						'div',
						{ className: 'explanation' },
						_react2.default.createElement(
							'h6',
							null,
							'Pin elements'
						),
						_react2.default.createElement(
							'p',
							null,
							'Use ',
							_react2.default.createElement(
								'code',
								null,
								'.pin'
							),
							' to move an element in any direction. Specify the direction by using ',
							_react2.default.createElement(
								'code',
								null,
								'.top .left .right .bottom'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							'div',
							{ className: 'relative' },
							_react2.default.createElement('span', { className: 'block-grey pin top left' }),
							_react2.default.createElement('span', { className: 'block-grey pin top right' }),
							_react2.default.createElement('span', { className: 'block-grey pin bottom right' }),
							_react2.default.createElement('span', { className: 'block-grey pin bottom left' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							_react2.default.createElement(
								_reactHighlight2.default,
								{ className: 'html' },
								'<div class="relative">\n\t<span class="block-grey pin top left"></span>\n\t<span class="block-grey pin top right"></span>\n\t<span class="block-grey pin bottom right"></span>\n\t<span class="block-grey pin bottom left"></span>\n</div>'
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Gettingstarted',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'section',
					{ className: 'hero clearfix borderless' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h1',
							null,
							'Getting started'
						),
						_react2.default.createElement(
							'h3',
							null,
							'A guide into how to install and use Blossom'
						),
						_react2.default.createElement(
							'div',
							{ className: 'button-group breakpoint-xs-stackable' },
							_react2.default.createElement(
								'a',
								{ href: 'https://github.com/Aotik/Blossom', className: 'button medium outlined' },
								'View the Blossom UI repo'
							),
							_react2.default.createElement(
								'a',
								{ className: 'button medium primary labeled' },
								_react2.default.createElement('i', { className: 'fa fa-arrow-down' }),
								' Download ZIP'
							)
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'installing' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h4',
							null,
							'Installation'
						),
						_react2.default.createElement('div', { className: 'divider' }),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'explanation' },
								_react2.default.createElement(
									'h6',
									null,
									_react2.default.createElement(
										'strong',
										null,
										'Using Blossom UI as a dependancy'
									)
								),
								_react2.default.createElement(
									'p',
									null,
									'If you are using Blossom UI just as a dependancy, you can easily install the ',
									_react2.default.createElement(
										'a',
										null,
										'ZIP'
									),
									' and just include it anywhere you need it.'
								),
								_react2.default.createElement(
									'p',
									null,
									'Once you\'ve downloaded it, you can easily include it in your HTML like so:'
								)
							),
							_react2.default.createElement(
								'code',
								{ className: 'text-purple' },
								'<link rel="stylesheet" type="text/css" href=',
								_react2.default.createElement(
									'span',
									{ className: 'text-teal' },
									'"/path/to/folder/blossom.min.css"'
								),
								'/>'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								'code',
								{ className: 'text-purple' },
								'<script src=',
								_react2.default.createElement(
									'span',
									{ className: 'text-teal' },
									'"/path/to/folder/blossom.js"'
								),
								'></script>'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'explanation' },
								_react2.default.createElement(
									'h6',
									null,
									_react2.default.createElement(
										'strong',
										null,
										'Install Gulp'
									)
								),
								_react2.default.createElement(
									'p',
									null,
									'Blossom uses ',
									_react2.default.createElement(
										'a',
										null,
										'Gulp'
									),
									' to provide command line scripts for building edited versions, making developers feel right at home.'
								),
								_react2.default.createElement(
									'p',
									null,
									'Gulp should be installed globally (recommended), or it will be installed alongside Blossom (not recommended).'
								)
							),
							_react2.default.createElement(
								'code',
								{ className: 'text-purple' },
								'npm install -g ',
								_react2.default.createElement(
									'span',
									{ className: 'text-teal' },
									'gulp'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'explanation' },
								_react2.default.createElement(
									'h6',
									null,
									_react2.default.createElement(
										'strong',
										null,
										'Install Blossom with Node.js'
									)
								),
								_react2.default.createElement(
									'p',
									null,
									'If you have limited experience or are unfamiliar with Node, you can follow these steps or ',
									_react2.default.createElement(
										'a',
										{ href: 'https://nodejs.org/en/download/' },
										'download from nodejs.org'
									),
									'.'
								),
								_react2.default.createElement(
									'p',
									null,
									'With Node you can easily install Blossom UI from the command line and save it to your package.json.'
								)
							),
							_react2.default.createElement(
								'code',
								{ className: 'text-purple' },
								'npm install ',
								_react2.default.createElement(
									'span',
									{ className: 'text-teal' },
									'blossom-ui'
								),
								' --save'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h4',
							null,
							'Updating'
						),
						_react2.default.createElement('div', { className: 'divider' }),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'explanation' },
								_react2.default.createElement(
									'h6',
									null,
									_react2.default.createElement(
										'strong',
										null,
										'Updating Blossom via NPM'
									)
								),
								_react2.default.createElement(
									'p',
									null,
									'With NPM, you can easily update to the newest released version of Blossom without interferring with your current version'
								)
							),
							_react2.default.createElement(
								'code',
								{ className: 'text-purple' },
								'npm update'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h4',
							null,
							'Uninstalling Blossom ',
							_react2.default.createElement('i', { className: 'text-red fa fa-frown-o' })
						),
						_react2.default.createElement('div', { className: 'divider' }),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'div',
								{ className: 'explanation' },
								_react2.default.createElement(
									'h6',
									null,
									_react2.default.createElement(
										'strong',
										null,
										'Uninstalling via NPM'
									)
								),
								_react2.default.createElement(
									'p',
									null,
									'Sorry to see you go, but it will be a short goodbye. Just use the command below.'
								)
							),
							_react2.default.createElement(
								'code',
								{ className: 'text-purple' },
								'npm uninstall ',
								_react2.default.createElement(
									'span',
									{ className: 'text-teal' },
									'blossom-ui'
								),
								' --save'
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Customising',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'section',
					{ className: 'hero clearfix borderless' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h1',
							null,
							'Customisation'
						),
						_react2.default.createElement(
							'h3',
							null,
							'Learn how to customise Blossom to fit your needs'
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'installing' },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h4',
							null,
							'Theming'
						),
						_react2.default.createElement('div', { className: 'divider' }),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'h4',
								{ className: 'text-blue' },
								'Coming soon'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h4',
							null,
							'Building'
						),
						_react2.default.createElement('div', { className: 'divider' }),
						_react2.default.createElement(
							'div',
							{ className: 'module' },
							_react2.default.createElement(
								'h4',
								{ className: 'text-blue' },
								'Coming soon'
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);