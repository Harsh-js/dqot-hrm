/** @format */

import { atom } from "recoil";

export const SignupAtom = atom({
	key: "SignupAtom",
	default: {
		name: "hi",
		mobile: "",
		email: "",
		designation: "",
	},
});
