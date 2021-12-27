/** @format */

// components

import withAuth from "@/helpers/pages/AuthRoute";
import Leavetable from "components/Cards/Leavetable";

// layout for page

import Admin from "layouts/Admin.js";

function Leavehistory() {
	return (
		<>
			<div className='flex flex-wrap mt-4'>
				<div className='w-full mb-12 px-4'>
					<Leavetable />
				</div>
				{/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
			</div>
		</>
	);
}

const Page = withAuth(Leavehistory);
Page.layout = Admin;

export default Page;
