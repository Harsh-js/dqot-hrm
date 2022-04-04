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
import Event from "@/models/Event";

const handler = nc(error);

handler.use(InitDb);
handler.use(request);

handler.get(async (req, res) => {
	try {
		const leaves = await Leave.find({}).populate("employee", "name");
		const events = await Event.find({}).populate("employee", "name");

		if (!leaves) {
			return res.json({
				status: false,
				message: "No Leave Found",
				data: null,
			});
		}

		/*
        Evene Schema:
            type: Event type (Leave,Holiday,Meeting,Project Deadline)
            date: Evenet date
            color: Event color (red,blue,yellow,green)
        */

		let response = [];

		console.log(leaves.length);

		leaves.map((l) => {
			if (l.day > 1) {
				Array.from({ length: parseInt(l.day) }, (v, i) => i + 1).map((j, i) => {
					let date = l.from.date;
					if (i !== 0) {
						date = moment(l.from.date, "DD/MM/YYYY")
							.add(i, "day")
							.format("DD/MM/YYYY");
					}
					response.push({
						id: l._id,
						type: "leave",
						date: date,
						color: "bg-default",
						msg: `${l.employee.name.split(" ")[0]} on Leave`,
						desc: "",
					});
				});
			} else {
				response.push({
					id: l._id,
					type: "leave",
					date: l.from.date,
					color: "bg-default",
					msg: `${l.employee.name.split(" ")[0]} on Leave`,
					desc: "",
				});
			}
		});

		events.map((e) => {
			response.push({
				id: e._id,
				type: "event",
				date: e.date,
				color: e.color,
				msg: e.title,
				desc: e.description,
			});
		});

		return res.json({
			status: true,
			message: "Leaves got Succesfully",
			data: response,
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
