const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry:{
		"front": "./src/front/front.js"
	},
	output:{
		path: __dirname + "/src/front/dist",
		filename:"[name].js"
	},
	resolve:{
		extensions: ["", ".js"]
	},
	devtool: "inline-source-map",
	module:{
		rules:[
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use:[
					"vue-style-loader",
					"css-loader"
				]
			}
		]
	}
}
