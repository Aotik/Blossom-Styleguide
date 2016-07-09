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

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(10);
	var path = __webpack_require__(11);
	var compression = __webpack_require__(12);
	// we'll use this to render our app to an html string

	// and these to match the url to routes and then render


	var app = express();

	app.set('views', './views');
	app.set('view engine', 'jade');

	app.use(compression());

	app.use(express.static(path.join(__dirname, 'public')));

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
		return '\n\t\t<!doctype html public="storage">\n\t\t<html>\n\t\t<meta charset=utf-8/>\n\t\t<title>Blossom</title>\n\t\t<link rel=stylesheet href=css/blossom.css>\n\t\t<div id=app>' + appHtml + '</div>\n\t\t<script src="/bundle.js"></script>\n\t ';
	}

	var PORT = process.env.PORT || 1337;
	app.listen(PORT, function () {
		console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

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

	var _Components = __webpack_require__(8);

	var _Components2 = _interopRequireDefault(_Components);

	var _Design = __webpack_require__(9);

	var _Design2 = _interopRequireDefault(_Design);

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/components', component: _Components2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/design', component: _Design2.default })
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

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'App',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'aside',
					{ className: 'sidebar fixed left' },
					_react2.default.createElement(
						'ul',
						{ role: 'nav' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/', onlyActiveOnIndex: true },
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/components' },
								'Components'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/design' },
								'Design'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'main-content' },
					this.props.children || _react2.default.createElement(_Home2.default, null)
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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'NavLink',
		render: function render() {
			return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Home',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Home'
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Components',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Components'
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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Design',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Design'
			);
		}
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);