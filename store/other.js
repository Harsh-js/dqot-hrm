/** @format */

const { atom } = require("recoil");

export const LeaveFromDateAtom = atom({
	key: "LeaveFromDateAtom",
	default: new Date().toLocaleDateString(),
});
export const LeaveToDateAtom = atom({
	key: "LeaveToDateAtom",
	default: new Date().toLocaleDateString(),
});
export const LeaveFromType = atom({
	key: "LeaveFromType",
	default: "Full Day",
});

export const LeaveToType = atom({
	key: "LeaveToType",
	default: "Full Day",
});

export const LeaveReasonAtom = atom({
	key: "LeaveReasonAtom",
	default: "",
});

export const LeaveDayAtom = atom({
	key: "LeaveDayAtom",
	default: "",
});

export const LeaveTypeAtom = atom({
	key: "LeaveTypeAtom",
	default: "Health Emergency Leave",
});

export const LeaveLeaveIdAtom = atom({
	key: "LeaveLeaveIdAtom",
	default: new Date(),
});

export const LeaveFromDay = atom({
	key: "LeaveFromDay",
	default: new Date().getUTCDay(),
});

export const LeaveToDay = atom({
	key: "LeaveToDay",
	default: new Date().getDay(),
});

export const WeekDaysAtom = atom({
	key: "WeekDaysAtom",
	default: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	],
});
