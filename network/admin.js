/** @format */

import axios from "axios";
import { baseUrl } from "@/configs/index";
import Joi from "joi";
import { toast } from "react-toastify";
axios.defaults.baseURL = `${baseUrl}/admin/misc/`;

export const AddEventRoute = async ({ body, user }) => {
	// console.log(axios.defaults.baseURL);
	axios.defaults.baseURL = `${baseUrl}/admin/misc/`;

	try {
		console.log(user);
		const Schema = Joi.object({
			title: Joi.string().required(),
			color: Joi.string().required(),
			description: Joi.string().required(),
			date: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.post("event", data, {
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.data.status) {
			console.log(response.data);
			toast.success(response.data.message);
			setShowModal(false)
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

export const UpdateEventRoute = async ({ body, user }) => {
	// console.log(axios.defaults.baseURL);
	axios.defaults.baseURL = `${baseUrl}/admin/misc/`;

	try {
		console.log(user);
		const Schema = Joi.object({
			_id: Joi.string().required(),
			title: Joi.string().required(),
			color: Joi.string().required(),
			description: Joi.string().required(),
			date: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.put("event", data, {
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.data.status) {
			console.log(response.data);
			toast.success(response.data.message);
			setShowModal(false)
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

export const DeleteEventRoute = async ({ body, user }) => {
	// console.log(axios.defaults.baseURL);
	axios.defaults.baseURL = `${baseUrl}/admin/misc/`;

	try {
		console.log(user);
		const Schema = Joi.object({
			_id: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.warning(Schema.error.message);
			return "Error";
		}

		const data = Schema.value;

		const response = await axios.delete(`event?_id=${data._id}`, {
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.data.status) {
			console.log(response.data);
			toast.success(response.data.message);
			setShowModal(false)
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
