/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
// import ApplyLeave from "components/Modal/ApplyLeave";

import "react-datepicker/dist/react-datepicker.css";

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import HOCMOdal from "components/Hoc/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalAtom } from "@/store/recoil";
import {
	LeaveDayAtom,
	LeaveFromDateAtom,
	LeaveFromDay,
	LeaveFromType,
	LeaveLeaveIdAtom,
	LeaveReasonAtom,
	LeaveToDateAtom,
	LeaveToDay,
	LeaveToType,
	LeaveTypeAtom,
	WeekDaysAtom,
} from "@/store/other";
import { ApplyLeaveRoute } from "network/misc";
const DTypes = ["Full Day", "First Half", "Sec. Half"];
export default function Leavetable({ color, user, leaveData }) {
	const [startdate, setStartDate] = useState(new Date());
	const [enddate, setEndDate] = useState(new Date());
	const [showModal, setShowModal] = useRecoilState(ModalAtom);
	const [fromDate, setFromDate] = useRecoilState(LeaveFromDateAtom);
	const [toDate, setToDate] = useRecoilState(LeaveToDateAtom);
	const [day, setDay] = useRecoilState(LeaveDayAtom);
	const [reason, setReason] = useRecoilState(LeaveReasonAtom);
	const [fromType, setFromType] = useRecoilState(LeaveFromType);
	const [toType, setToType] = useRecoilState(LeaveToType);
	const [type, setType] = useRecoilState(LeaveTypeAtom);
	const [fromDay, setFromDay] = useRecoilState(LeaveFromDay);
	const weekdays = useRecoilValue(WeekDaysAtom);
	const [toDay, setToDay] = useRecoilState(LeaveToDay);
	const [leaveid, setLeaveId] = useRecoilState(LeaveLeaveIdAtom);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		if (fromDate == toDate) {
			setDay(1);
		}
	}, []);

	const changedFunction = (date) => {
		if (fromDate == toDate) {
			setDay(1);
		}
		var current = moment(fromDate, "DD/MM/YYYY");
		var given = moment(toDate, "DD/MM/YYYY");
		//Difference in number of days
		var days = moment.duration(given.diff(current)).asDays() + 1;
		setDay(days);
		if (fromType === DTypes[1] && toType === DTypes[1]) {
			setDay(days - 1);
		} else if (fromType === DTypes[2] && toType === DTypes[2]) {
			setDay(days - 1);
		} else if (fromType === DTypes[1] && toType === DTypes[2]) {
			setDay(days - 1);
		} else if (fromType === DTypes[2] && toType === DTypes[1]) {
			setDay(days - 1);
		} else if (
			fromType === DTypes[1] ||
			fromType === DTypes[2] ||
			toType === DTypes[1] ||
			toType === DTypes[2]
		) {
			setDay(days - 0.5);
		}
	};

	useEffect(() => {
		changedFunction();
	}, [fromDate, toDate, fromType, toType]);

	return (
		<>
			<div
				className={
					"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
					(color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
				}>
				<div className='rounded-t mb-0 px-4 py-3 border-0'>
					<div className='flex flex-wrap items-center'>
						<div className='relative w-full leave-head max-w-full flex-grow flex-1 flex flex-row'>
							<h3
								className={
									"font-semibold text-lg date-heading " +
									(color === "light" ? "text-blueGray-700" : "text-white")
								}>
								Leave History
							</h3>
							<div className='levae-in-head'>
								<DatePicker
									className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md react-datepicker-ignore-onclickoutside'
									dateFormat={"dd/MM/yyyy"}
									selected={startdate}
									onChange={(date) => {
										setStartDate(date);
										setFilter(date.toLocaleDateString());
									}}
								/>
								<button
									className='bg-lightBlue-500 blue-btn active:bg-lightBlue-300 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
									type='button'
									onClick={() => setShowModal(true)}>
									Apply For Leave
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='block w-full overflow-x-auto'>
					{/* Projects table */}
					<table className='items-center w-full bg-transparent border-collapse'>
						<thead>
							<tr>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									From
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									To
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Duration
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Reason
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Type
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							{leaveData
								?.filter((f) => {
									if (filter) {
										return f.from.date == filter;
									} else {
										return f;
									}
								})
								.map(
									({
										approved,
										day,
										from,
										id,
										reason,
										to,
										type,
										updatedAt,
										_id,
									}) => {
										return (
											<tr>
												<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
													<span
														className={
															"font-bold " +
															+(color === "light"
																? "text-blueGray-600"
																: "text-white")
														}>
														{`${moment(from.date, "DD/MM/YYYY").format(
															"MMM-DD-YYYY"
														)} / ${from.day.substring(0, 3)}`}
													</span>
												</th>
												<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
													<span
														className={
															"font-bold " +
															+(color === "light"
																? "text-blueGray-600"
																: "text-white")
														}>
														{`${moment(to.date, "DD/MM/YYYY").format(
															"MMM-DD-YYYY"
														)} / ${to.day.substring(0, 3)}`}
													</span>
												</td>
												<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
													{day}
												</td>
												<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
													{reason}
												</td>
												<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
													{type}
												</td>
												<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
													{approved ? "Approved" : "Pending"}
												</td>
											</tr>
										);
									}
								)}
						</tbody>
					</table>
				</div>
			</div>

			{showModal ? (
				<HOCMOdal type={"Leave"} title={"Apply Leave"}>
					<div className='apply-leave'>
						<div className='cards'>
							<div className='card-col'>
								<div className='clcards'>
									<div className='heads'>
										<h4>2</h4>
									</div>

									<div className='cardft'>
										<h4>CL</h4>
									</div>
								</div>
							</div>
							<div className='card-col'>
								<div className='clcards'>
									<div className='heads'>
										<h4>1.33</h4>
									</div>

									<div className='cardft'>
										<h4>EL</h4>
									</div>
								</div>
							</div>
							<div className='card-col'>
								<div className='clcards'>
									<div className='heads'>
										<h4>2</h4>
									</div>

									<div className='cardft'>
										<h4>SL</h4>
									</div>
								</div>
							</div>
						</div>
						<div className='mt-5 md:mt-0 md:col-span-2'>
							<form action='#' method='POST'>
								<div className=' overflow-hidden sm:rounded-md'>
									<div className='sm:p-6'>
										<div className='grid grid-cols-6 gap-6'>
											<div className='col-span-6 sm:col-span-3'>
												<label
													htmlFor='first-name'
													className='block text-sm font-medium text-gray-700'>
													From Date* {` --  ${weekdays[fromDay]}`}
												</label>

												<DatePicker
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													dateFormat={"dd/MM/yyyy"}
													selected={startdate}
													onChange={(date) => {
														setStartDate(date);
														setFromDate(date.toLocaleDateString());
														setFromDay(date.getDay());

														changedFunction();
													}}
												/>
											</div>

											<div className='col-span-6 sm:col-span-3'>
												<label
													htmlFor='country'
													className='block text-sm font-medium text-gray-700 d-label'>
													&nbsp;
												</label>
												<select
													id='country'
													name='country'
													autoComplete='country-name'
													className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
													onChange={(e) => {
														setFromType(e.target.value);
														changedFunction();
													}}>
													{DTypes.map((d) => {
														return <option key={d}>{d}</option>;
													})}
												</select>
											</div>

											<div className='col-span-6 sm:col-span-3'>
												<label
													htmlFor='first-name'
													className='block text-sm font-medium text-gray-700'>
													To Date*
												</label>
												<DatePicker
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													dateFormat={"dd/MM/yyyy"}
													selected={enddate}
													onChange={(date) => {
														setEndDate(date);
														setToDate(date.toLocaleDateString());
														setToDay(date.getDay());
														changedFunction();
													}}
												/>
											</div>

											<div className='col-span-6 sm:col-span-3'>
												<label
													htmlFor='country'
													className='block text-sm font-medium text-gray-700 d-label'>
													&nbsp;
												</label>
												<select
													id='country'
													name='country'
													autoComplete='country-name'
													className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
													onChange={(e) => {
														setToType(e.target.value);
														changedFunction();
													}}>
													{DTypes.map((d, i) => {
														return <option key={i}>{d}</option>;
													})}
												</select>
											</div>

											<div className='col-span-6'>
												<label
													htmlFor='country'
													className='block text-sm font-medium text-gray-700'>
													Leave Type*
												</label>
												<select
													id='country'
													name='country'
													autoComplete='country-name'
													className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
													value={type}
													onChange={(e) => setType(e.target.value)}>
													<option>Health Emergency Leave</option>
													<option>Vacation Leave</option>
													<option>UnPlanned Leave</option>
												</select>
											</div>

											<div className='col-span-6'>
												<label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
													Number Of Days
												</label>
												<input
													type='number'
													name='street-address'
													id='street-address'
													autoComplete='street-address'
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													disabled={true}
													value={day}
												/>
											</div>

											<div className='col-span-6'>
												<label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
													Reason*
												</label>
												<textarea
													id='about'
													name='about'
													rows='3'
													className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
													placeholder=''
													value={reason}
													onChange={(e) =>
														setReason(e.target.value)
													}></textarea>
											</div>
										</div>
									</div>
									<div className=' py-3 bg-gray-50 text-right sm:px-6'>
										<button
											type='submit'
											className='inline-flex bg-indigo-500 blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											onClick={(e) => {
												e.preventDefault();
												ApplyLeaveRoute({
													body: {
														from: {
															date: fromDate,
															ltype: fromType,
															day: weekdays[fromDay],
														},
														to: {
															date: toDate,
															ltype: toType,
															day: weekdays[toDay],
														},
														reason: reason,
														day: day,
														type: type,
													},
													user,
												}).then((res) => {
													if (res.status) {
														setShowModal(false);
													}
												});
											}}>
											Apply
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</HOCMOdal>
			) : (
				""
			)}
		</>
	);
}

Leavetable.defaultProps = {
	color: "light",
};

Leavetable.propTypes = {
	color: PropTypes.oneOf(["light", "dark"]),
};
