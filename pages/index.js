/**
 * /* eslint-disable react/jsx-no-target-blank
 *
 * @format
 */

import { useEffect } from "react";

import { useRouter } from "next/router";
import withAuth from "@/helpers/pages/AuthRoute";
import Admin from "layouts/Admin";

function Index() {
	const router = useRouter();
	useEffect(() => {
		router.push("/admin/dashboard");
	}, []);
	return <p>Hi</p>;
}
const Page = withAuth(Index);
Page.layout = Admin;

export default Page;
