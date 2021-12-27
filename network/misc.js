/** @format */

import axios from "axios";
import { baseUrl } from "@/configs/index";
import Joi from "joi";
import { toast } from "react-toastify";
axios.defaults.baseURL = `${baseUrl}/user/misc/`;

export const SignUpRoute = async ({ body, checked }) => {
	try {
		if (!checked) {
			return toast.error("Please agree with our policy");
		}
		// delete body["otp"];
		const Schema = Joi.object({
			name: Joi.string().required(),
			mobile: Joi.number().required(),
			email: Joi.string()
				.email({ tlds: { allow: false } })
				.required(),
			designation: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.post("otp", data);

		if (response.data.status) {
			console.log(response.data);
			toast(response.data.message);
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

export const SignUpOtpRoute = async ({ body, checked }) => {
	try {
		if (!checked) {
			return toast.error("Please agree with our policy");
		}
		// delete body["otp"];
		const Schema = Joi.object({
			name: Joi.string().required(),
			mobile: Joi.number().required(),
			email: Joi.string()
				.email({ tlds: { allow: false } })
				.required(),
			designation: Joi.string().required(),
			otp: Joi.number().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.post("login", data);

		if (response.data.status) {
			console.log(response.data);
			toast(response.data.message);
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

export const LoginRoute = async ({ body }) => {
	try {
		// delete body["otp"];
		const Schema = Joi.object({
			mobile: Joi.number().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const { mobile } = Schema.value;

		const response = await axios.get(`otp?mobile=${mobile}`);

		if (response.data.status) {
			console.log(response.data);
			toast(response.data.message);
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

export const LoginOtpRoute = async ({ body }) => {
	try {
		// delete body["otp"];
		const Schema = Joi.object({
			mobile: Joi.number().required(),
			otp: Joi.number().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const { mobile, otp } = Schema.value;

		const response = await axios.get(`login?mobile=${mobile}&otp=${otp}`);

		if (response.data.status) {
			console.log(response.data);
			toast(response.data.message);
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
