/** @format */

import mongoose from "mongoose";
import env from "@/configs/Db";

const InitDb = (req, res, next) => {
	if (mongoose.connections[0].readyState) {
		// console.log("alredy connected");
		return next();
	}
	mongoose.connect(env.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	mongoose.connection.on("connected", () => {
		console.log("connected to mongo");
		return next();
	});
	mongoose.connection.on("error", (err) => {
		console.log("error connecting", err);
		return;
	});
};

export default InitDb;
