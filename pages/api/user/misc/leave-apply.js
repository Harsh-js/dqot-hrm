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
		return res.status(422).json({
			status: false,
			message: Schema.error.message,
			data: null,
		});
	}

	const { from, to, reason, day, type, leaveId } = Schema.value;

	let Lid = `${req.user.name}_${Date.now()}`;

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
			return res.status(200).json({
				status: true,
				message: "Leave Updated Succesfully",
				data: leave,
			});
		}
		return res.status(200).json({
			status: true,
			message: "Leave Appllied Succesfully",
			data: leave,
		});
	}
});

export default handler;
