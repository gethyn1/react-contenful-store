import path from 'path'
import webpack from 'webpack'

import { WDS_PORT, isProd } from './src/config'

const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './index.html',
	filename: 'index.html',
	inject: 'body',
});

export default {
  entry: [
		'react-hot-loader/patch',
		'./index.jsx'
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
		publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },
	context: path.resolve(__dirname, 'src'),
	devtool: isProd ? false : 'source-map',
	devServer: {
		port: WDS_PORT,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
				test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
        test: /\.(sass|scss)$/,
        use: [
            'style-loader',
						{
	            loader: 'css-loader',
	            options: {
								modules: true,
								localIdentName: isProd ? false : '[name]__[local]___[hash:base64:5]',
							},
	          },
            'sass-loader'
    		]
			},
		]
  },
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	}
}
