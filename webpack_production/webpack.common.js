const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
	entry:{
		//'home/home':'./content/src/js/home/index.js',
		  'multiContrast/multiContrast':'./page/content/src/js/multiContrast/index.js',
		  'basicStatistics/basicStatistics':'./page/content/src/js/basicStatistics/index.js'
		 //app:'./src/index.js'
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    compress: true,
	    port: 9000,
	    open:true
	},
	optimization: {
	    minimizer: [
	      new OptimizeCSSAssetsPlugin({})
	    ]
	 },
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
	      filename: "[name].min.css",
	      chunkFilename: "[id].min.css"
	    }),
	    new UglifyJsPlugin({
	        cache: true,
	        parallel: true,
	        sourceMap: true,
	        uglifyOptions: {
			    ie8: true,
			    output: {
		          comments: false,
		          beautify: false
		        },
		        warnings: false
			 }
	    }),
	    new es3ifyPlugin(),
	    new HtmlWebpackPlugin({
			title: 'home',
			filename:'multiContrast/index.html',
			template: './page/multiContrast/index.html',
			chunks: ['multiContrast/multiContrast'],
			minify: {
		        removeComments: false,
		        collapseWhitespace: false
		    }
		}),
		 new HtmlWebpackPlugin({
			title: 'home',
			filename:'basicStatistics/index.html',
			template: './page/basicStatistics/index.html',
			chunks: ['basicStatistics/basicStatistics'],
			minify: {
		        removeComments: false,
		        collapseWhitespace: false
		    }
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				exclude: /(node_modules|bower_components)/,
				use:[
					MiniCssExtractPlugin.loader,
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
			},
			{
			      test: /\.m?js$/,
			      exclude: /(node_modules|bower_components)/,
			      use: {
			        loader: 'babel-loader',
			        options: {
			          presets: ['@babel/preset-env']
			        }
			      }
		    }
		]
	}
};