/**
 * /* eslint-disable react/jsx-no-target-blank
 *
 * @format
 */

import React, { useEffect } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useRouter } from "next/router";

export default function Index() {
	const router = useRouter();
	useEffect(() => {
		router.push("/admin/dashboard");
	}, []);
	return <h1>Hi</h1>;
}
