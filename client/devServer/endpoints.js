module.exports = {
	// Add endpoints here
	"/health-check": { get: (_, res) => res.end("Service is healthy") },
};
