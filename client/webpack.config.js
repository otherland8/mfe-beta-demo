const nodeEnvironmentToConfigPath = {
	production: "prod",
	development: "dev",
	mfe: "mfe",
};

module.exports = require(`./webpack.${nodeEnvironmentToConfigPath[process.env.NODE_ENV]}`);
