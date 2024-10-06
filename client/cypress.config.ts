import { defineConfig } from "cypress";
import { merge } from "lodash";

import webpackConfig from "./webpack.dev";

export default defineConfig({
	includeShadowDom: true,

	component: {
		devServer: {
			framework: "react",
			bundler: "webpack",
			webpackConfig: merge(webpackConfig, { devServer: { open: false, host: "127.0.0.1" } }),
		},
	},

	e2e: {
		baseUrl: "http://localhost:9004",
	},
});
