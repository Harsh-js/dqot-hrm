/** @format */

// components

import withAuth from "@/helpers/pages/AuthRoute";
import Calendar from "components/Calender_s/Calendar";

// layout for page

import Admin from "layouts/Admin.js";

function Calendars() {
	return (
		<>
			
			<h1>Hi</h1>
						<Calendar/>
			
			
		</>
	);
}

const Page = withAuth(Calendars);
Page.layout = Admin;

export default Page;
	 	