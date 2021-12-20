/** @format */

import InitDb from "@/helpers/Db";
import nc from "next-connect";
import { logger } from "@/configs/Log";
import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";
import { sendMail } from "@/helpers/Mail";
import User from "@/models/User";
import Joi from "joi";
import auth from "@/middlewares/auth";
import Leave from "@/models/Leave";
import moment from "moment";
import Attendance from "@/models/Attendance";

const handler = nc(error);

handler.use(InitDb);
handler.use(request);
handler.use(auth);

handler.post(async (req, res) => {
	const Schema = Joi.object({
		start: Joi.string(),
		end: Joi.string(),
		type: Joi.string().required(),
	}).validate(req.body);
	// console.log(moment().format("hh:mm:ss"));
	// console.log(moment().format("YYYY-MM-DD-dddd"));
	//05:29:14

	if (Schema.error) {
		return res.status(422).json({
			status: false,
			message: Schema.error.message,
			data: null,
		});
	}

	const { start, end, type } = Schema.value;
	const date = moment().format("YYYY-MM-DD");
	const day = moment().format("dddd");

	if (type === "start") {
		const _attandance = await Attendance.findOne({
			employee: req.user._id,
			date: date,
		});
		if (_attandance.start) {
			return res.status(402).json({
				status: false,
				message: "Already Checked in",
				data: _attandance,
			});
		}

		_attandance.start = start;
		_attandance.date = date;
		_attandance.day = day;
		_attandance.save();
		return res.status(200).json({
			status: true,
			message: "Checkin Succesfully",
			data: _attandance,
		});
	} else if (type === "end") {
		const attandance = await Attendance.findOneAndUpdate(
			{
				employee: req.user._id,
				date: date,
			},
			{
				employee: req.user._id,
				end,
				date,
				day,
			},
			{
				new: true,
				upsert: true,
			}
		);

		if (attandance) {
			return res.status(200).json({
				status: true,
				message: "CheckOut Succesfully",
				data: attandance,
			});
		}
	}
});
handler.get(async (req, res) => {
	try {
		const attandance = await Attendance.find();
	} catch (e) {
		conso;
	}
});

export default handler;
