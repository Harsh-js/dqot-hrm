/** @format */

import InitDb from "@/helpers/Db";
import nc from "next-connect";

import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";

import Joi from "joi";
import auth from "@/middlewares/adminauth";

import Event from "@/models/Event";

const handler = nc(error);

handler.use(InitDb);
handler.use(request);
handler.use(auth);

handler.post(async (req, res) => {
	try {
		const Schema = Joi.object({
			title: Joi.string().required(),
			color: Joi.string().required(),
			description: Joi.string().required(),
			date: Joi.string().required(),
		}).validate(req.body);

		if (Schema.error) {
			return res.json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { title, color, description, date } = Schema.value;

		const event = await Event.create({
			title,
			color,
			description,
			date,
			employee: req.user._id,
		});

		if (!event) {
			return res.json({
				status: false,
				message: "Error",
				data: "err",
			});
		}

		return res.json({
			status: true,
			message: "Event Added Successfully",
			data: event,
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

handler.put(async (req, res) => {
	try {
		const Schema = Joi.object({
			_id: Joi.string().required(),
			title: Joi.string().required(),
			color: Joi.string().required(),
			description: Joi.string().required(),
			date: Joi.string().required(),
		}).validate(req.body);

		if (Schema.error) {
			return res.json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { _id, title, color, description, date } = Schema.value;

		const event = await Event.findByIdAndUpdate(_id, {
			title,
			color,
			description,
			date,
		});

		if (!event) {
			return res.json({
				status: false,
				message: "Error",
				data: "err",
			});
		}

		return res.json({
			status: true,
			message: "Event Updated Successfully",
			data: event,
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

handler.delete(async (req, res) => {
	try {
		const Schema = Joi.object({
			_id: Joi.string().required(),
		}).validate(req.query);

		if (Schema.error) {
			return res.json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { _id } = Schema.value;

		const event = await Event.deleteOne({ _id });

		if (!event) {
			return res.json({
				status: false,
				message: "Error",
				data: "err",
			});
		}

		return res.json({
			status: true,
			message: "Event Deleted Successfully",
			data: event,
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
