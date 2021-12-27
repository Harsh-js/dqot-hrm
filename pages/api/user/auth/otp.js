/** @format */

import InitDb from "@/helpers/Db";
import nc from "next-connect";
import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";
import { sendMail } from "@/helpers/Mail";
import User from "@/models/User";
import Joi from "joi";

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
		}).validate(req.body);

		if (Schema.error) {
			return res.json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { name, mobile, email, designation } = Schema.value;

		if (email.split("@")[1] !== "dqotsolutions.com") {
			return res.json({
				status: false,
				message: "You are not a company employee",
				data: null,
			});
		}

		const otp = Math.floor(100000 + Math.random() * 900000);

		const user = await User.findOneAndUpdate(
			{ email: email },
			{
				name,
				mobile,
				email,
				designation,
				otp,
			},
			{
				new: true,
				upsert: true,
			}
		);

		if (!user) {
			return res.json({
				status: false,
				message: "err.message",
				data: null,
			});
		}

		const mail = await sendMail({
			to: user.email,
			subject: "Verification Code",
			// html: `<h1>Your OTP:  ${user.otp} </h1>`,
			html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:100%;overflow:auto;line-height:2">
			<div style="margin:50px auto;width:70%;padding:20px 0">
			  <div style="border-bottom:1px solid #eee">
				<a href="https://dqotsolutions.com" style="font-size:1.4em;color: #00755a;text-decoration:none;font-weight:600">Dqot Solutions</a>
			  </div>
			  <p style="font-size:1.1em">Hi,</p>
			  <p>Welcome ${user.name}. Use the following OTP to complete your Login procedures. OTP is valid for 5 minutes</p>
			  <h2 style="background: #00755a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${user.otp}</h2>
			  <p style="font-size:0.9em;">Regards,<br />Dqot Solutions</p>
			  <hr style="border:none;border-top:1px solid #eee" />
			  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
				<p>Dqot Solutions</p>
				<p>hr@dqotsolutions.com</p>
				<p>Jaipur</p>
			  </div>
			</div>
		  </div>`,
		});
		if (mail.accepted.length) {
			return res.json({
				status: true,
				message: "Otp sent Please check your mail",
				data: otp,
			});
		}
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
		}).validate(req.query);

		if (Schema.error) {
			return res.json({
				status: false,
				message: Schema.error.message,
				data: null,
			});
		}

		const { mobile } = Schema.value;

		const otp = Math.floor(100000 + Math.random() * 900000);

		const user = await User.findOneAndUpdate(
			{ mobile: mobile },
			{
				otp: otp,
			},
			{
				new: true,
			}
		);

		if (!user) {
			return res.json({
				status: false,
				message: "Please Signup first",
				data: null,
			});
		}

		const mail = await sendMail({
			to: user.email,
			subject: "Verification Code",
			// html: `<h1>Your OTP:  ${user.otp} </h1>`,
			html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:100%;overflow:auto;line-height:2">
			<div style="margin:50px auto;width:70%;padding:20px 0">
			  <div style="border-bottom:1px solid #eee">
				<a href="https://dqotsolutions.com" style="font-size:1.4em;color: #00755a;text-decoration:none;font-weight:600">Dqot Solutions</a>
			  </div>
			  <p style="font-size:1.1em">Hi,</p>
			  <p>Welcome ${user.name}. Use the following OTP to complete your Login procedures. OTP is valid for 5 minutes</p>
			  <h2 style="background: #00755a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${user.otp}</h2>
			  <p style="font-size:0.9em;">Regards,<br />Dqot Solutions</p>
			  <hr style="border:none;border-top:1px solid #eee" />
			  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
				<p>Dqot Solutions</p>
				<p>hr@dqotsolutions.com</p>
				<p>Jaipur</p>
			  </div>
			</div>
		  </div>`,
		});
		if (mail.accepted.length) {
			return res.json({
				status: true,
				message: "Otp sent Please check your mail",
				data: otp,
			});
		}
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
