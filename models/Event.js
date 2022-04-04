/** @format */

import mongoose, { Schema } from "mongoose";

const EventSchema = new mongoose.Schema(
	{
		employee: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		date: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.models.Event || mongoose.model("Event", EventSchema);
