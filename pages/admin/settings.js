/** @format */

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";
import Test from "components/Hoc/Test";
import withAuth from "@/helpers/pages/AuthRoute";

function Settings() {
	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full lg:w-8/12 px-4'>
					<CardSettings />
				</div>
				<div className='w-full lg:w-4/12 px-4'>
					<CardProfile />
				</div>
			</div>
		</>
	);
}

const Page = withAuth(Settings);
Page.layout = Admin;

export default Page;
