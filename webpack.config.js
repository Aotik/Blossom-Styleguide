const path = require('path')
const webpack = require('webpack')
const nib = require('nib')
const jeet = require('jeet')
const rupture = require('rupture')

module.exports = {
	entry: './index.js',
	plugins: process.env.NODE_ENV === 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	] : [],

	output: {
		path: 'public',
		filename: 'bundle.js',
		publicPath: '/'
	},


	module: {
		loaders: [
		{test: /\.zip$/, loader: "file" },
		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader',
		},
		{
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader',
			exculde: /node_modules/
		}, {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff',
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream',
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file',
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
		}]
	},

	stylus: {
		use: [nib(), jeet(), rupture()]
	},

	devServer: {
		contentBase: 'public/',
		historyApiFallback: true
	}
}
