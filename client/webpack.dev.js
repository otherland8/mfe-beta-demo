const path = require("path");
const merge = require("lodash/merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mfeConfig = require("./webpack.mfe");

module.exports = merge(mfeConfig, {
	entry: "./src/index.tsx",
	plugins: [
		...mfeConfig.plugins,
		new HtmlWebpackPlugin({
			template: path.join("public", "index.html"),
			inject: true,
		}),
	],
	devServer: {
		open: true,
	},
});
