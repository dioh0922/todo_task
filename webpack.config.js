const webpack = require("webpack");
const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
module.exports = {
	entry:{
		"front": "./src/front/front.js"
	},
	output:{
		path: __dirname + "/src/front/dist",
		filename:"[name].js"
	},
	resolve:{
		extensions: ["", ".js", ".vue"],
		fallback: {
			//Nodejs系はwebpack5だと自分で持ってくる
			"fs": false,
			assert: require.resolve('assert'),
       buffer: require.resolve('buffer'),
       console: require.resolve('console-browserify'),
       constants: require.resolve('constants-browserify'),
       crypto: require.resolve('crypto-browserify'),
       domain: require.resolve('domain-browser'),
       events: require.resolve('events'),
       http: require.resolve('stream-http'),
       https: require.resolve('https-browserify'),
       os: require.resolve('os-browserify/browser'),
       path: require.resolve('path-browserify'),
       punycode: require.resolve('punycode'),
       process: require.resolve('process/browser'),
       querystring: require.resolve('querystring-es3'),
       stream: require.resolve('stream-browserify'),
       string_decoder: require.resolve('string_decoder'),
       sys: require.resolve('util'),
       timers: require.resolve('timers-browserify'),
       tty: require.resolve('tty-browserify'),
       url: require.resolve('url'),
       util: require.resolve('util'),
       vm: require.resolve('vm-browserify'),
       zlib: require.resolve('browserify-zlib'),
		}
	},
	devtool: "inline-source-map",
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test:/\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				use:[
					"vue-style-loader",
					"css-loader"
				]
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new webpack.ProvidePlugin({
			//process: "process/browser", //axiosの依存用にコメントアウト
		}),
	],
}
