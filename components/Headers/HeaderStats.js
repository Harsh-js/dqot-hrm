/** @format */

import React, { useEffect, useState } from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import { useRecoilState } from "recoil";
import HOCMOdal from "components/Hoc/Modal.js";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { CheckModalAtom, ModalAtom, TimeModalAtom } from "@/store/recoil";
import moment from "moment";
import TimeCard from "./TimeCard";
import axios from "axios";
import useSWR from "swr";
import { baseUrl } from "@/configs/index";
import { userStateAtom } from "@/store/user";




export default function HeaderStats() {
	const [user, setUser] = useRecoilState(userStateAtom);
	const [showModal, setShowModal] = useRecoilState(CheckModalAtom);

	const [TimeshowModal, setTimeShowModal] = useRecoilState(TimeModalAtom);
	const [cal, setCal] = useState([]);

	const [startdate, setStartDate] = useState(new Date());
	const [enddate, setEndDate] = useState(new Date());
	const [data, setData] = useState("")

	useEffect(() => {
		let _user = localStorage.getItem("user");
		if (_user) {
			setUser(JSON.parse(_user));
			axios
				.get(`${baseUrl}/user/misc/attendance`, { headers: { authorization: `Bearer ${_user.token}` } })
				.then((res) => setData(res.data));
		}
	}, []);




	return (
		<>
			{/* Header */}
			<div className='relative bg-blueGray-800 md:pt-32 pb-32 pt-12'>
				<div className='px-4 md:px-10 mx-auto w-full'>
					<div>
						{/* Card stats */}
						<div className='flex flex-wrap'>
							<ul class='flex flex-col w-full px-4 mb-5  lg:flex-row list-none ml-auto mobile-btn'>
								<li class='nav-item'>
									<a class='px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
										<i class='far fa-clock mr-2'></i>Time Card
									</a>
								</li>
								<li class='nav-item'>
									<a class='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
										<i class='far fa-clock mr-2'></i>Check/Check in Out
									</a>
								</li>
							</ul>
							<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
								<CardStats
									statSubtitle="Today's In Time"
									statTitle='00:00'
									statArrow='up'
									statPercent='3.48'
									statPercentColor='text-emerald-500'
									statDescripiron=''
									statIconName='far fa-clock'
									statIconColor='bg-red-500'
								/>
							</div>
							<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
								<CardStats
									statSubtitle='Projects'
									statTitle='2'
									statArrow='down'
									statPercent='1'
									statPercentColor='text-red-500'
									statDescripiron=''
									statIconName='fas fa-chart-pie'
									statIconColor='bg-orange-500'
								/>
							</div>
							<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
								<CardStats
									statSubtitle='members on leave'
									statTitle='1'
									statArrow='down'
									statPercent='1.10'
									statPercentColor='text-orange-500'
									statDescripiron='Since yesterday'
									statIconName='fas fa-users'
									statIconColor='bg-pink-500'
								/>
							</div>
							<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
								<CardStats
									statSubtitle='You leaves'
									statTitle='2'
									statArrow='up'
									statPercent='12'
									statPercentColor='text-emerald-500'
									statDescripiron='Since last month'
									statIconName='fas fa-percent'
									statIconColor='bg-lightBlue-500'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showModal ? (
				<HOCMOdal type={"Check"} title={"Chek in/Check Out"}>
					<TimeCard />
				</HOCMOdal>
			) : (
				""
			)}

			{TimeshowModal ? (
				<HOCMOdal type={"time_card"} title={"Time Card"}>
					<div className='apply-leave'>
						<form action='#' method='POST'>
							<div className='col-span-6 mb-4'>
								<div className='form-check'>
									<input
										className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
										type='checkbox'
										value=''
										id='flexCheckDefault'
									/>
									<label
										className='form-check-label inline-block text-gray-800'
										for='flexCheckDefault'>
										Now work. (Click on this option if you had no work today.)
									</label>
								</div>
							</div>
							<div className='col-span-6 mb-5'>
								<div className='form-check'>
									<input
										className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
										type='checkbox'
										value=''
										id='flexCheckDefault'
									/>
									<label
										className='form-check-label inline-block text-gray-800'
										for='flexCheckDefault'>
										I will be/was on half day.
									</label>
								</div>
							</div>
							<div className='col-span-6 mb-3'>
								<button
									type='button'
									class='px-6 py-2 border-2 border-black-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
									{" "}
									Add More Project Info
								</button>
							</div>
							<div className='project_column'>
								<button type='button' class='btn-close'>
									<i class='fas fa-times'></i>
								</button>

								<div className='grid grid-cols-6  gap-3'>
									<div className='col-span-6'>
										<label
											htmlFor='country'
											className='block text-sm font-medium text-gray-700 d-label'>
											Project Name
										</label>
										<select
											id='country'
											name='country'
											autoComplete='country-name'
											className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
											<option>Full Day</option>
											<option>First Half</option>
											<option>Sec. Half</option>
										</select>
									</div>

									{/* <div className='col-span-6 sm:col-span-3'>
												<label
													htmlFor='first-name'
													className='block text-sm font-medium text-gray-700'>
													Sprint / Release
												</label>
												<select
													id='country'
													name='country'
													autoComplete='country-name'
													className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
													<option>Full Day</option>
													<option>First Half</option>
													<option>Sec. Half</option>
												</select>
											
											</div> */}

									<div className='col-span-6 sm:col-span-3'>
										<label
											htmlFor='street-address'
											className='block text-sm font-medium text-gray-700'>
											Task Description
										</label>
										<input
											type='text'
											name='street-address'
											id='street-address'
											autoComplete='street-address'
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											disabled={true}
										/>
									</div>
									<div className='col-span-6 sm:col-span-3'>
										<label
											htmlFor='street-address'
											className='block text-sm font-medium text-gray-700'>
											Hours
										</label>
										<input
											type='text'
											name='street-address'
											id='street-address'
											autoComplete='street-address'
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											disabled={true}
										/>
									</div>
								</div>
							</div>
							<div className='col-span-6 mb-4'>
								<label
									htmlFor='street-address'
									className='block text-sm font-medium text-lightBlue-600'>
									Total Hours 00:00
								</label>
							</div>
							<div className='col-span-6 mb-3'>
								<label
									htmlFor='street-address'
									className='block text-sm font-medium text-red-500'>
									<strong>Note:</strong>
									<br />
									<ul>
										<li>
											1.Lorem Ipsum is simply dummy text of the printing and
											typesetting industry.
										</li>
										<li>
											2.Lorem Ipsum is simply dummy text of the printing and
											typesetting industry.
										</li>
									</ul>
								</label>
							</div>
						</form>
					</div>
				</HOCMOdal>
			) : (
				""
			)}
		</>
	);
}
