/** @format */

// components

import { baseUrl } from "@/configs/index";
import withAuth from "@/helpers/pages/AuthRoute";
import axios from "axios";
import Calendar from "components/Calender_s/Calendar";

// layout for page

import Admin from "layouts/Admin.js";
import useSWR from "swr";

const fetcher = (url, token) =>
	axios
		.get(url, { headers: { authorization: `Bearer ${token}` } })
		.then((res) => res.data);

function Calendars({ user }) {
	const { data, error } = useSWR(
		[`${baseUrl}/user/misc/calendar`, user.token],
		fetcher
	);
	return (
		<>
			<h1>Hi</h1>
			<Calendar events={data?.data} user={user} />
		</>
	);
}

const Page = withAuth(Calendars);
Page.layout = Admin;

export default Page;
