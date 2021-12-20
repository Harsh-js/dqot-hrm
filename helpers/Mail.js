/** @format */

import nodemailer from "nodemailer";
import env from "@/configs/Mail";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: env.user,
		pass: env.pass,
	},
});

export async function sendMail({ to, subject, html }) {
	try {
		const send = await transporter.sendMail({
			from: env.user,
			to,
			subject,
			html,
		});
		const response = await send;
		return response;
	} catch (e) {
		console.error(e);
		throw new Error(`Could not send email: ${e.message}`);
	}
}
