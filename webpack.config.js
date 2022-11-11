//const webpack = require("webpack");
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
		extensions: ["", ".js", ".vue"]
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
		new VueLoaderPlugin()
	]
}
