/** @format */

import { atom } from "recoil";

export const SignupAtom = atom({
	key: "SignupAtom",
	default: {
		name: "Harsh Raj Swami",
		mobile: "9982615247",
		email: "harsh@dqotsolutions.com",
		designation: "Full Stack Developer",
	},
});

export const LoginAtom = atom({
	key: "LoginAtom",
	default: {
		mobile: "9982615247",
	},
});

export const checkedAtom = atom({
	key: "checkedAtom",
	default: false,
});

export const loginStatusAtom = atom({
	key: "loginStatusAtom",
	default: false,
});

export const signUpStatusAtom = atom({
	key: "signUpStatus",
	default: false,
});

export const ModalAtom = atom({
	key: "ModalAtom",
	default: false,
});

export const CheckModalAtom = atom({
	key: "CheckModalAtom",
	default: false,
});

export const TimeModalAtom = atom({
	key: "TimeModalAtom",
	default: false,
});
