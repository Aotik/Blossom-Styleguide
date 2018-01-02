const path = require('path');
const webpack = require('webpack');
const nib = require('nib');
const jeet = require('jeet');
const rupture = require('rupture');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:4000',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'src/styl/fonts',
        publicPath: 'public/fonts',
      },
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },

  stylus: {
    use: [nib(), jeet(), rupture()],
  },

  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
  },
};
