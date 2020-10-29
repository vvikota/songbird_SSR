const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  name: 'client',
  context: path.join(__dirname, '..', 'app'),  
  entry: './client.js',
  output: {
    path: assetsPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ]),
    rules: [
			{
				test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
			}
		]
  },
};
