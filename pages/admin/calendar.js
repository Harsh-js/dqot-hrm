/** @format */

// components

import withAuth from "@/helpers/pages/AuthRoute";
import Calendar from "components/Calender_s/Calendar";

// layout for page

import Admin from "layouts/Admin.js";

function Calendars() {
	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full px-4'>
					<div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
						<Calendar/>
					</div>
				</div>
			</div>
		</>
	);
}

const Page = withAuth(Calendars);
Page.layout = Admin;

export default Page;
