const merge = require("lodash/merge");

const getCommonConfig = require("./webpack.common");

module.exports = merge(getCommonConfig("style-loader"), {
	entry: "./src/modules/SampleModule/SampleModule.tsx",
	mode: "development",
	output: {
		filename: "[name].js",
	},
	devServer: {
		open: false,
		hot: true,
		host: "localhost",
		port: "9004",
		compress: true,
		client: {
			progress: true,
		},
		proxy: {
			"/": {
				secure: false,
				target: "http://localhost:9005",
				bypass: ({ headers: { accept: acceptHeader } }) =>
					acceptHeader?.includes("html") ? "/index.html" : undefined,
			},
		},
	},
});
