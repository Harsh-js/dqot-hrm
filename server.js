/** @format */

const express = require("express");
const next = require("next");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

(async () => {
	try {
		await app.prepare();
		const server = express();
		server.use(cors({ origin: "*" }));
		server.all("*", (req, res) => {
			return handle(req, res);
		});
		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
		});
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
})();
