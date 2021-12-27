/** @format */

import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { RecoilRoot } from "recoil";

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

Router.events.on("routeChangeStart", (url) => {
	console.log(`Loading: ${url}`);
	document.body.classList.add("body-page-transition");
	ReactDOM.render(
		<PageChange path={url} />,
		document.getElementById("page-transition")
	);
});
Router.events.on("routeChangeComplete", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }) {
	// console.log(moment().format("hh:mm:ss"));
	// console.log(moment().format("YYYY-MM-DD-dddd"));
	const Layout = Component.layout || (({ children }) => <>{children}</>);
	return (
		<RecoilRoot>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				<title>Notus NextJS by Creative Tim</title>
				<script src='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'></script>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ToastContainer />
		</RecoilRoot>
	);
}

export default MyApp;
