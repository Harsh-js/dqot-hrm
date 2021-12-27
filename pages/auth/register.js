/** @format */

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { checkedAtom, SignupAtom, signUpStatusAtom } from "@/store/recoil";
// layout for page

import Auth from "layouts/Auth.js";
import { SignUpOtpRoute, SignUpRoute } from "network/auth";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Register() {
	let [sign, setSign] = useRecoilState(SignupAtom);
	let [checked, setChecked] = useRecoilState(checkedAtom);
	let [status, setStatus] = useRecoilState(signUpStatusAtom);
	let data = JSON.parse(JSON.stringify(sign));
	const router = useRouter();

	useEffect(() => {}, []);

	return (
		<>
			<div className='container mx-auto px-4 h-full'>
				<div className='flex content-center items-center justify-center h-full'>
					<div className='w-full lg:w-6/12 px-4'>
						<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
							<div className='rounded-t mb-0 px-6 py-2'>
								<div className='rounded-t mb-0 px-6 py-6'>
									<div className='text-center mb-3'>
										<h6 className='text-blueGray-500 text-sm font-bold'>
											sign up with credentials
										</h6>
									</div>

									<hr className='mt-6 border-b-1 border-blueGray-300' />
								</div>
							</div>
							<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
								{/*
<div className='text-blueGray-400 text-center mb-3 font-bold'>
									<small>sign up with credentials</small>
								</div>
									*/}
								<form>
									{!status ? (
										<React.Fragment>
											<div className='relative w-full mb-3'>
												<label
													className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
													htmlFor='grid-password'>
													Name
												</label>
												<input
													type='text'
													className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
													placeholder='Name'
													value={sign.name}
													onChange={(e) => {
														data.name = e.target.value;
														setSign(data);
													}}
												/>
											</div>

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
											<div className='relative w-full mb-3'>
												<label
													className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
													htmlFor='grid-password'>
													Email
												</label>
												<input
													type='email'
													className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
													placeholder='Email'
													value={sign.email}
													onChange={(e) => {
														data.email = e.target.value;
														setSign(data);
													}}
												/>
											</div>

											<div className='relative w-full mb-3'>
												<label
													className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
													htmlFor='grid-password'>
													Designation
												</label>
												<input
													type='email'
													className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
													placeholder='Email'
													value={sign.designation}
													onChange={(e) => {
														data.designation = e.target.value;
														setSign(data);
													}}
												/>
											</div>

											<div>
												<label className='inline-flex items-center cursor-pointer'>
													<input
														id='customCheckLogin'
														type='checkbox'
														checked={checked}
														className='form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
														onChange={(e) => {
															setChecked(e.target.checked);
														}}
													/>
													<span className='ml-2 text-sm font-semibold text-blueGray-600'>
														I agree with the{" "}
														<a
															href='#pablo'
															className='text-lightBlue-500'
															onClick={(e) => e.preventDefault()}>
															Privacy Policy
														</a>
													</span>
												</label>
											</div>
										</React.Fragment>
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
												value={sign.otp}
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
														? SignUpRoute({ body: sign, checked })
																.then((res) => {
																	console.log(res);
																	if (res.status) {
																		setStatus(true);
																	}
																})
																.catch((err) => console.log(err))
														: SignUpOtpRoute({ body: sign, checked })
																.then((res) => {
																	console.log(res);
																	if (res.status) {
																		setStatus(true);
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
											{!status ? "Create Account" : "Login"}
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

Register.layout = Auth;
