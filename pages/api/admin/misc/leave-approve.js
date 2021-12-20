/** @format */

import InitDb from "@/helpers/Db";
import nc from "next-connect";
import { logger } from "@/configs/Log";
import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";
import { sendMail } from "@/helpers/Mail";
import User from "@/models/User";
import Joi from "joi";
import auth from "@/middlewares/adminauth";
import Leave from "@/models/Leave";

const handler = nc(error);

handler.use(InitDb);
handler.use(request);
handler.use(auth);

handler.get(async (req, res) => {
	const Schema = Joi.object({
		leaveId: Joi.string().required(),
		approved: Joi.boolean().required(),
	}).validate(req.query);

	if (Schema.error) {
		return res.status(422).json({
			status: false,
			message: Schema.error.message,
			data: null,
		});
	}
	const { leaveId, approved } = Schema.value;

	const leave = await Leave.findOneAndUpdate(
		{
			_id: leaveId,
		},
		{
			approved: approved,
		}
	);

	if (!leave) {
		return res.status(402).json({
			status: false,
			message: "Leave not Found",
			data: null,
		});
	}
	return res.status(200).json({
		status: true,
		message: "Leave Approved",
		data: leave,
	});
});

export default handler;
