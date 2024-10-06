const merge = require("lodash/merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getCommonConfig = require("./webpack.common");

const commonConfig = getCommonConfig(MiniCssExtractPlugin.loader);

module.exports = merge(commonConfig, {
	entry: "./src/modules/SampleModule/SampleModule.tsx",
	mode: "production",
	plugins: [...commonConfig.plugins, new MiniCssExtractPlugin()],
	optimization: {
		minimize: true,
		sideEffects: true,
		splitChunks: false,
	},
	output: {
		filename: "[name].[chunkhash].min.js",
		chunkFilename: "[name].[chunkhash].chunk.min.js",
	},
});
