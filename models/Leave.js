/** @format */

import mongoose, { Schema } from "mongoose";

const LeaveSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
		},
		employee: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		from: {
			date: String,
			ltype: String,
			day: String,
		},
		to: {
			date: String,
			ltype: String,
			day: String,
		},
		approved: {
			type: Boolean,
			default: false,
		},
		reason: {
			type: String,
			required: true,
		},
		day: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.models.Leave || mongoose.model("Leave", LeaveSchema);
