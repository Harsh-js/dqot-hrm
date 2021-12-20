/** @format */

// Attendance

import mongoose, { Schema } from "mongoose";

const AttendanceSchema = new mongoose.Schema(
	{
		employee: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		start: {
			type: String,
		},
		end: {
			type: String,
		},
		date: {
			type: String,
			required: true,
		},
		day: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.models.Attendance ||
	mongoose.model("Attendance", AttendanceSchema);
