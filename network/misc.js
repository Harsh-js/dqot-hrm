/** @format */

import axios from "axios";
import { baseUrl } from "@/configs/index";
import Joi from "joi";
import { toast } from "react-toastify";
axios.defaults.baseURL = `${baseUrl}/user/misc/`;

export const ApplyLeaveRoute = async ({ body, user }) => {
	console.log(axios.defaults.baseURL);
	axios.defaults.baseURL = `${baseUrl}/user/misc/`;

	try {
		// delete body["otp"];
		console.log(user);
		const Schema = Joi.object({
			from: Joi.object().required(),
			to: Joi.object().required(),
			reason: Joi.string().required(),
			day: Joi.number().required(),
			type: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.post("leave-apply", data, {
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.data.status) {
			console.log(response.data);
			toast.success(response.data.message);
			return response.data;
		} else {
			toast.error(response.data.message);
			return;
		}
	} catch (err) {
		console.log("Erro: " + err);
		return err;
	}
};

export const CheckInRoute = async ({ body, user }) => {
	// console.log(axios.defaults.baseURL);
	axios.defaults.baseURL = `${baseUrl}/user/misc/`;

	try {
		// delete body["otp"];
		console.log(user);
		const Schema = Joi.object({
			start: Joi.string(),
			end: Joi.string(),
			type: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.post("attendance", data, {
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.data.status) {
			console.log(response.data);
			toast.success(response.data.message);
			return response.data;
		} else {
			toast.error(response.data.message);
			return;
		}
	} catch (err) {
		console.log("Erro: " + err);
		return err;
	}
};
