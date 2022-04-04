/** @format */

import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";
import { LoginAtom, loginStatusAtom } from "@/store/recoil";
import { useRecoilState } from "recoil";
import { LoginOtpRoute, LoginRoute } from "network/auth";
import { userStateAtom } from "@/store/user";
import { useRouter } from "next/router";
import withAuth from "@/helpers/pages/AuthRoute";

function Login() {
	let [sign, setSign] = useRecoilState(LoginAtom);
	let data = JSON.parse(JSON.stringify(sign));
	let [status, setStatus] = useRecoilState(loginStatusAtom);

	const router = useRouter();

	return (
		<>
			<div className='container mx-auto px-4 h-full'>
				<div className='flex content-center items-center justify-center h-full'>
					<div className='w-full lg:w-4/12 px-4'>
						<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
							<div className='rounded-t mb-0 px-6 py-2'>
								<div className='text-center mb-3'>
									<h6 className='text-blueGray-500 text-sm font-bold'>
										Sign in with
									</h6>
								</div>

								<hr className='mt-6 border-b-1 border-blueGray-300' />
							</div>
							<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
								{/*
<div className='text-blueGray-400 text-center mb-3 font-bold'>
									<small>Or sign in with credentials</small>
								</div>
									*/}
								<form>
									{!status ? (
										<div className='relative w-full mb-3'>
											<label
												className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
												htmlFor='grid-password'>
												Mobile
											</label>
											<input
												type='number'
												className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
												placeholder='Mobile'
												value={sign.mobile}
												onChange={(e) => {
													data.mobile = e.target.value;
													setSign(data);
												}}
											/>
										</div>
									) : (
										<div className='relative w-full mb-3'>
											<label
												className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
												htmlFor='grid-password'>
												OTP
											</label>
											<input
												type='number'
												className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
												placeholder='Please enter the Otp sent on your mail'
												value={sign.otp ? sign.otp : ""}
												onChange={(e) => {
													data.otp = parseInt(e.target.value);
													setSign(data);
												}}
											/>
										</div>
									)}
									<div className='text-center mt-6'>
										<button
											className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
											type='button'
											onClick={() => {
												{
													!status
														? LoginRoute({ body: sign })
																.then((res) => {
																	console.log(res);
																	if (res.status) {
																		setStatus(true);
																	}
																})
																.catch((err) => console.log(err))
														: LoginOtpRoute({ body: sign })
																.then((res) => {
																	console.log("Calling login otp route" + res);
																	if (res.status) {
																		localStorage.setItem(
																			"user",
																			JSON.stringify(res.data)
																		);
																		router.push("/");
																	}
																})
																.catch((err) => console.log(err));
												}
											}}>
											Sign In
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className='flex flex-wrap mt-6 relative'>
							<div className='w-1/2'>
								<a
									href='#pablo'
									onClick={(e) => e.preventDefault()}
									className='text-blueGray-200'>
									<small>Forgot password?</small>
								</a>
							</div>
							<div className='w-1/2 text-right'>
								<Link href='/auth/register'>
									<a href='#pablo' className='text-blueGray-200'>
										<small>Create new account</small>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const Page = withAuth(Login);
Page.layout = Auth;

export default Page;
