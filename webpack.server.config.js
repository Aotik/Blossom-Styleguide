var fs = require('fs')
var path = require('path')
const nib = require('nib')
const jeet = require('jeet')
const rupture = require('rupture')

module.exports = {

	entry: path.resolve(__dirname, 'server.js'),

	output: {
		filename: 'server.bundle.js'
	},

	target: 'node',

	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),

	node: {
		__filename: true,
		__dirname: true
	},

	module: {
		loaders: [
			{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'
			}, {
					test: /\.styl$/,
					loader: 'style-loader!css-loader!stylus-loader',
					exculde: /node_modules/
			}
		]
	},

	stylus: {
		use: [nib(), jeet(), rupture()]
	}
}
