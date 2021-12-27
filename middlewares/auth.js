/** @format */
import { jwtSecret } from "@/configs/Jwt";
import User from "@/models/User";
import Jwt from "jsonwebtoken";

const auth = async function (req, res, next) {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.json({
			status: false,
			message: "No Token Found",
			data: null,
		});
	}

	const token = authorization.replace("Bearer ", "");
	Jwt.verify(token, jwtSecret, async (err, payload) => {
		if (err) {
			return res.json({
				status: false,
				message: "Invalid token",
				data: null,
			});
		}

		const { _id, name } = payload;

		const user = await User.findById(_id);

		if (!user) {
			return res.json({
				status: false,
				message: "Invalid User",
				data: null,
			});
		}

		req.user = user;
		next();
	});
};

export default auth;
