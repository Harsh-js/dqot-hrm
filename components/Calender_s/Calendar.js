/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import HOCMOdal from "components/Hoc/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { CalModalAtom, ModalAtom } from "@/store/recoil";
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
import moment from "moment";
import {
	AddEventRoute,
	DeleteEventRoute,
	UpdateEventRoute,
} from "network/admin";

export default function Calendar({ color, events, user }) {
	const [showModal, setShowModal] = useRecoilState(CalModalAtom);
	const [currMonth, setCurrMonth] = useState(moment());
	const [calendar, setCalendar] = useState([]);
	const [today, setToday] = useState("");
	const [changed, setChanged] = useState(false);
	const [eventTitle, setETitle] = useState("");
	const [eventColor, setEColor] = useState("");
	const [eventDesc, setEDesc] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventId, setEventId] = useState("");

	let eventList = events?.map((e) => e.date);

	useEffect(() => {
		let startDay = currMonth.clone().startOf("month").startOf("week");
		let endDay = currMonth.clone().endOf("month").startOf("week");
		let day = startDay.clone().subtract(1, "day");
		setToday(moment().format("DD/MM/YYYY"));
		let a = [];
		let startOfNextMonth = moment().add(1, "M").startOf("month");

		let startOfPrevMonth = moment().subtract(1, "M").startOf("month");

		while (day.isBefore(endDay, "day")) {
			a.push(
				Array(7)
					.fill(0)
					.map(() => day.add(1, "day").clone())
			);
		}
		setCalendar(a);
		// console.log(a);
		console.log("calendar updated");
	}, [currMonth, changed]);

	return (
		<>
			<div
				className={
					"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
					(color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
				}>
				<div className='rounded-t mb-0 px-4 py-3 border-0'>
					<div className='flex flex-wrap items-center'>
						<div className='relative w-full px-4 max-w-full flex-grow flex-1 flex flex-row'>
							<h3
								className={
									"font-semibold text-lg date-heading " +
									(color === "light" ? "text-blueGray-700" : "text-white")
								}>
								{currMonth.format("MMM DD YYYY")}
							</h3>
						</div>
					</div>
				</div>
				<div className='block w-full overflow-x-auto'>
					<div className='card-calendar card'>
						<div className='p-0 card-body'>
							<div className='calendar fc fc-media-screen fc-direction-ltr fc-theme-standard'>
								<div className='fc-view-harness fc-view-harness-active'>
									<div className='fc-daygrid fc-dayGridMonth-view fc-view'>
										<table className='fc-scrollgrid  fc-scrollgrid-liquid'>
											<thead>
												<tr className='fc-scrollgrid-section fc-scrollgrid-section-header'>
													<td>
														<div className='fc-scroller-harness'>
															<div className='fc-scroller'>
																<table className='fc-col-header'>
																	<colgroup></colgroup>
																	<tbody>
																		<tr>
																			<th className='fc-col-header-cell c fc-day-sun'>
																				<div className='fc-scrollgrid-sync-inner'>
																					<a className='fc-col-header-cell-cushion'>
																						Sun
																					</a>
																				</div>
																			</th>
																			<th className='fc-col-header-cell fc-day fc-day-mon'>
																				<div className='fc-scrollgrid-sync-inner'>
																					<a className='fc-col-header-cell-cushion'>
																						Mon
																					</a>
																				</div>
																			</th>
																			<th className='fc-col-header-cell fc-day fc-day-tue'>
																				<div className='fc-scrollgrid-sync-inner'>
																					<a className='fc-col-header-cell-cushion'>
																						Tue
																					</a>
																				</div>
																			</th>
																			<th className='fc-col-header-cell fc-day fc-day-wed'>
																				<div className='fc-scrollgrid-sync-inner'>
																					<a className='fc-col-header-cell-cushion'>
																						Wed
																					</a>
																				</div>
																			</th>
																			<th className='fc-col-header-cell fc-day fc-day-thu'>
																				<div className='fc-scrollgrid-sync-inner'>
																					<a className='fc-col-header-cell-cushion'>
																						Thu
																					</a>
																				</div>
																			</th>
																			<th className='fc-col-header-cell fc-day fc-day-fri'>
																				<div className='fc-scrollgrid-sync-inner'>
																					<a className='fc-col-header-cell-cushion'>
																						Fri
																					</a>
																				</div>
																			</th>
																			<th className='fc-col-header-cell fc-day fc-day-sat'>
																				<div
																					className='fc-scrollgrid-sync-inner'
																					onClick={() => {
																						// console.log("hi");
																						setCurrMonth(
																							currMonth
																								.add(1, "M")
																								.startOf("month")
																						);
																						setChanged(!changed);
																						// console.log(currMonth);
																					}}>
																					<a className='fc-col-header-cell-cushion'>
																						Sat
																					</a>
																				</div>
																			</th>
																		</tr>
																		{calendar?.map((week) => {
																			return (
																				<tr>
																					{week?.map((day) => {
																						let currDate = day
																							.format("DD/MM/YYYY")
																							.toString();
																						// console.log("day: " + currDate);
																						let index =
																							eventList?.indexOf(currDate);
																						// console.log(events);
																						let multiEvents = events?.filter(
																							(f) => currDate == f.date
																						);
																						console.log(
																							multiEvents?.map((m) => m)
																						);
																						let d;
																						if (index >= 0) {
																							d = events[index];
																						}

																						return (
																							<td class='fc-daygrid-day fc-day fc-day-wed fc-day-past'>
																								<div
																									class='fc-daygrid-day-frame fc-scrollgrid-sync-inner'
																									id={
																										today == currDate
																											? "currDay"
																											: ""
																									}
																									onClick={() => {
																										setEventDate(currDate);
																										setShowModal(true);
																									}}>
																									<div class='fc-daygrid-day-top'>
																										<a class='fc-daygrid-day-number'>
																											{day
																												.format("D")
																												.toString()}
																										</a>
																									</div>

																									{eventList?.includes(currDate)
																										? multiEvents?.map((m) => {
																											return (
																												<div
																													class='fc-daygrid-day-events'
																													onClick={(e) => {
																														setEventId(m.id);
																														setETitle(m.msg);
																														setEDesc(m.desc);
																														setEColor(
																															m.color
																														);
																														setEventDate(
																															m.date
																														);
																														setShowModal(
																															true
																														);
																													}}>
																													<div class='fc-daygrid-event-harness'>
																														<a
																															class={`fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past ${m.color}`}>
																															<div class='fc-event-main'>
																																<div class='fc-event-main-frame'>
																																	<div class='fc-event-title-container'>
																																		<div class='fc-event-title fc-sticky'>
																																			{" "}
																																			{
																																				m.msg
																																			}{" "}
																																		</div>
																																	</div>
																																</div>
																															</div>
																														</a>
																													</div>
																												</div>
																											);
																										})
																										: ""}
																								</div>
																							</td>
																						);
																					})}
																				</tr>
																			);
																		})}
																	</tbody>
																</table>
															</div>
														</div>
													</td>
												</tr>
											</thead>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showModal ? (
				<HOCMOdal type={"Calendar"} title={"Add Event"}>
					<div className='apply-leave events-modal'>
						<div className='mt-5 md:mt-0 md:col-span-2'>
							<form action='#' onSubmit={(e) => e.preventDefault()}>
								<div className=' overflow-hidden sm:rounded-md'>
									<div className='sm:p-6'>
										<div className='grid grid-cols-6 gap-6'>
											<div className='col-span-6'>
												<label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
													Add Event
												</label>
												<input
													type='text'
													name='street-address'
													id='street-address'
													autoComplete='street-address'
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													value={eventTitle}
													onChange={(e) => setETitle(e.target.value)}
												/>
											</div>
											<div className='col-span-6'>
												<label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
													Status color
												</label>

												<input
													className='form-check-input bg-warning appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
													type='radio'
													name='flexRadioDefault'
													onChange={(e) => setEColor(e.target.value)}
													value={"bg-warning"}
													id='flexRadioDefault2'
												/>
												<input
													className='form-check-input bg-danger appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
													type='radio'
													name='flexRadioDefault'
													onChange={(e) => setEColor(e.target.value)}
													value={"bg-danger"}
													id='flexRadioDefault3'
												/>
												<input
													className='form-check-input bg-success  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
													type='radio'
													name='flexRadioDefault'
													onChange={(e) => setEColor(e.target.value)}
													value={"bg-success"}
													id='flexRadioDefault4'
												/>
												<input
													className='form-check-input bg-default  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
													type='radio'
													name='flexRadioDefault'
													onChange={(e) => setEColor(e.target.value)}
													value={"bg-default"}
													id='flexRadioDefault5'
												/>
												<input
													className='form-check-input bg-primary   appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
													type='radio'
													name='flexRadioDefault'
													onChange={(e) => setEColor(e.target.value)}
													value={"bg-primary"}
													id='flexRadioDefault6'
												/>
											</div>
											<div className='col-span-6'>
												<label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
													Description
												</label>
												<textarea
													id='description'
													name='description'
													rows='3'
													className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
													placeholder=''
													value={eventDesc}
													onChange={(e) => setEDesc(e.target.value)}></textarea>
											</div>
											<div className=' py-3 bg-gray-50 flex flex-col text-right col-span-6'>
												<div className='enent-buttons'>
													{eventId ? (
														<>
															<button
																type='submit'
																className='inline-flex bg-red-500 mr-2  blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
																onClick={() => {
																	let body = {
																		_id: eventId,
																		title: eventTitle,
																		color: eventColor,
																		description: eventDesc,
																		date: eventDate,
																	};
																	UpdateEventRoute({ body, user, setShowModal }).then();
																}}>
																Update
															</button>
															<button
																type='submit'
																className='inline-flex bg-pink-500 blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
																onClick={() => {
																	let body = {
																		_id: eventId,
																	};
																	DeleteEventRoute({ body, user, setShowModal }).then();
																}}>
																Delete
															</button>
														</>
													) : (
														<button
															type='submit'
															className='inline-flex bg-red-500 mr-2  blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
															onClick={() => {
																let body = {
																	title: eventTitle,
																	color: eventColor,
																	description: eventDesc,
																	date: eventDate,
																};
																AddEventRoute({ body, user, setShowModal }).then();
															}}>
															Add
														</button>
													)}
												</div>
											</div>
										</div>
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

Calendar.defaultProps = {
	color: "light",
};

Calendar.propTypes = {
	color: PropTypes.oneOf(["light", "dark"]),
};
