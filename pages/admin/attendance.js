/** @format */

// components

import withAuth from "@/helpers/pages/AuthRoute";
import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

function Attendance({ user }) {
	return (
		<div className='flex flex-wrap mt-4'>
			<div className='w-full mb-12 px-4'>
				<CardTable />
			</div>
			{/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
		</div>
	);
}
const Page = withAuth(Attendance);
Page.layout = Admin;

export default Page;
