/** @format */

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		mobile: {
			type: Number,
			required: true,
		},
		email: {
			type: String,
			required: "Email is required",
			trim: true,
			lowercase: true,
			unique: true,
		},
		role: {
			type: String,
			default: "employee",
		},
		designation: {
			type: String,
			required: true,
		},
		projects: {
			type: Array,
		},
		otp: {
			type: Number,
		},
		token: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.models.User || mongoose.model("User", UserSchema);
