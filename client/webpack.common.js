const path = require("path");
const merge = require("lodash/merge");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");
const { react: reactVersion } = dependencies;

module.exports = (styleLoader) => ({
	output: {
		publicPath: "auto",
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s?[ac]ss$/i,
				use: [styleLoader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "betaModule",
			filename: "betaModule.js",
			exposes: {
				"./SamplePage": "./src/modules/SampleModule/SampleModule.tsx",
			},
			shared: merge(dependencies, {
				react: {
					eager: true,
					singleton: true,
					requiredVersion: reactVersion,
				},
			}),
		}),
	],
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
		alias: {
			"~": path.resolve(__dirname, "src"),
			"@cy": path.resolve(__dirname, "cypress"),
			"@dev-server": path.resolve(__dirname, "devServer"),
		},
	},
});
