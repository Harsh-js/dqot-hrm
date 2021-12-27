/** @format */

import { userStateAtom } from "@/store/user";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
const withAuth = (WrappedComponent) => {
	return (props) => {
		// checks whether we are on client / browser or server.
		if (typeof window !== "undefined") {
			const Router = useRouter();

			const u = localStorage.getItem("user");
			let user;
			let accessToken;
			if (u) {
				user = JSON.parse(u);
				accessToken = user.token;
			}

			// If there is no access token we redirect to "/" page.
			if (!accessToken || !u) {
				Router.push("/auth/login");
				return null;
			}

			// If this is an accessToken we just render the component that was passed with all its props

			return <WrappedComponent {...props} user={user} />;
		}

		// If we are on server, return null
		return null;
	};
};

export default withAuth;
