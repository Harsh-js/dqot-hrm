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

const handler = nc(error);

handler.use(InitDb);
handler.use(request);
handler.use(auth);

handler.post(async (req, res) => {
	const Schema = Joi.object({
		from: Joi.object().required(),
		to: Joi.object().required(),
		reason: Joi.string().required(),
		day: Joi.number().required(),
		type: Joi.string().required(),
		leaveId: Joi.string(),
	}).validate(req.body);

	if (Schema.error) {
		return res.json({
			status: false,
			message: Schema.error.message,
			data: null,
		});
	}

	const { from, to, reason, day, type, leaveId } = Schema.value;

	let Lid = `${req.user.name}_${Date.now()}`.replaceAll(" ", "");

	if (leaveId) {
		Lid = leaveId;
	}

	const leave = await Leave.findOneAndUpdate(
		{
			id: Lid,
		},
		{
			employee: req.user._id,
			from,
			to,
			reason,
			day,
			type,
			id: Lid,
		},
		{
			new: true,
			upsert: true,
		}
	);
	if (leave) {
		if (leaveId) {
			return res.json({
				status: true,
				message: "Leave Updated Succesfully",
				data: leave,
			});
		}
		return res.json({
			status: true,
			message: "Leave Appllied Succesfully",
			data: leave,
		});
	}
});

handler.get(async (req, res) => {
	try {
		const leaves = await Leave.find({ employee: req.user._id });

		if (!leaves) {
			return res.json({
				status: false,
				message: "No Leave Found",
				data: null,
			});
		}

		return res.json({
			status: true,
			message: "Leaves got Succesfully",
			data: leaves,
		});
	} catch (err) {
		console.log(err);

		return res.json({
			status: false,
			message: "Error",
			data: err,
		});
	}
});

export default handler;
