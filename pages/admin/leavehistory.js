/** @format */

// components

import { baseUrl } from "@/configs/index";
import withAuth from "@/helpers/pages/AuthRoute";
import axios from "axios";
import Leavetable from "components/Cards/Leavetable";

// layout for page

import Admin from "layouts/Admin.js";
import useSWR from "swr";

const fetcher = (url, token) =>
	axios
		.get(url, { headers: { authorization: `Bearer ${token}` } })
		.then((res) => res.data);

function Leavehistory({ user }) {
	const { data, error } = useSWR(
		[`${baseUrl}/user/misc/leave-apply`, user.token],
		fetcher
	);
	console.log(data?.data);
	return (
		<>
			<div className='flex flex-wrap mt-4'>
				<div className='w-full mb-12 px-4'>
					<Leavetable user={user} leaveData={data?.data} />
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
