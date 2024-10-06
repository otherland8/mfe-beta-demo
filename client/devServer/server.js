/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
(() => {
	const endpoints = require("./endpoints");
	const express = require("express");
	const bodyParser = require("body-parser");

	const port = 9005;

	const expressApp = express();
	expressApp.use(bodyParser.json());

	Object.entries(endpoints)
		.reduce(
			(app, [path, config]) =>
				Object.entries(config).reduce(
					(appRouter, [method, handler]) => appRouter[method](path, handler),
					app,
				),
			expressApp,
		)
		.listen(port, () => console.log(`Development server listening on port ${port}`));
})();
