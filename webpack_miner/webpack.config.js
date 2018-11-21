const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode:'development',
	optimization:{
		usedExports:true
	},
	entry:{
		app:'./src/index.js'
	},
	devtool:'inline-source-map',
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'home',
			minify: {
		        removeComments: true,
		        collapseWhitespace: true
		    }
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.html$/,
				use: ['html-loader']
			}
		]
	}
};