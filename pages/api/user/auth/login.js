/** @format */

import InitDb from "@/helpers/Db";
import nc from "next-connect";

import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";

import User from "@/models/User";
import Joi from "joi";
import env from "@/configs/Jwt";
import Jwt from "jsonwebtoken";

const handler = nc(error);

handler.use(InitDb);
handler.use(request);

handler.post(async (req, res) => {
	try {
		const Schema = Joi.object({
			name: Joi.string().required(),
			mobile: Joi.number().required(),
			email: Joi.string().email().required(),
			designation: Joi.string().required(),
			otp: Joi.number().required(),
		}).validate(req.body);

		if (Schema.error) {
			return res.status(422).json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { name, mobile, email, designation, otp } = Schema.value;

		if (email.split("@")[1] !== "dqotsolutions.com") {
			return res.status(422).json({
				status: false,
				message: "You are not a company employee",
				data: null,
			});
		}

		const user = await User.findOne({ email: email, otp: otp });

		if (!user) {
			return res.json({
				status: false,
				message: "Invalid login details",
				data: null,
			});
		}

		const token = await Jwt.sign(
			{ _id: user._id, name: user.name },
			env.jwtSecret
		);

		user.token = token;
		user.otp = "";
		user.save();

		return res.status(200).json({
			status: true,
			message: "Logged in Succesfully",
			data: user,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			status: false,
			message: err.message,
			data: null,
		});
	}
});

handler.get(async (req, res) => {
	try {
		const Schema = Joi.object({
			mobile: Joi.number().required(),
			otp: Joi.number().required(),
		}).validate(req.query);

		if (Schema.error) {
			return res.status(422).json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { mobile, otp } = Schema.value;

		const user = await User.findOne({ mobile: mobile, otp: otp });

		if (!user) {
			return res.json({
				status: false,
				message: "Invalid login details",
				data: null,
			});
		}
		const token = await Jwt.sign(
			{ _id: user._id, name: user.name },
			env.jwtSecret
		);

		user.token = token;
		user.otp = "";
		user.save();

		return res.status(200).json({
			status: true,
			message: "Logged in Succesfully",
			data: user,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			status: false,
			message: err.message,
			data: null,
		});
	}
});

export default handler;
