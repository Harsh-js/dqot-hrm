/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// const [showModal, setShowModal] = useState(false);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const Example = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
	const [startdate, setStartDate] = useState(new Date());
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
								Attendance
							</h3>
							<DatePicker
								dateFormat={"dd/MM/yyyy"}
								selected={startdate}
								onChange={(date) => setStartDate(date)}
							/>
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
									Date
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Day
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									In Time
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Out Time
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Hours
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									Time Stamp Modification Request Status
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}>
									action
								</th>
								<th
									className={
										"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
										(color === "light"
											? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
											: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
									}></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
									<span
										className={
											"font-bold " +
											+(color === "light" ? "text-blueGray-600" : "text-white")
										}>
										Dec 14,2021
									</span>
								</th>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									09:30:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									20:03:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									10:33
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									No
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									Approved
								</td>

								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
									<TableDropdown />
								</td>
							</tr>
							<tr>
								<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
									<span
										className={
											"font-bold " +
											+(color === "light" ? "text-blueGray-600" : "text-white")
										}>
										Dec 14,2021
									</span>
								</th>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									09:30:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									20:03:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									10:33
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									No
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									Approved
								</td>

								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
									<TableDropdown />
								</td>
							</tr>
							<tr>
								<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
									<span
										className={
											"font-bold " +
											+(color === "light" ? "text-blueGray-600" : "text-white")
										}>
										Dec 14,2021
									</span>
								</th>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									09:30:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									20:03:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									10:33
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									No
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									Approved
								</td>

								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
									<TableDropdown />
								</td>
							</tr>
							<tr>
								<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
									<span
										className={
											"font-bold " +
											+(color === "light" ? "text-blueGray-600" : "text-white")
										}>
										Dec 14,2021
									</span>
								</th>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									09:30:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									20:03:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									10:33
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									No
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									Approved
								</td>

								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
									<TableDropdown />
								</td>
							</tr>
							<tr>
								<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
									<span
										className={
											"font-bold " +
											+(color === "light" ? "text-blueGray-600" : "text-white")
										}>
										Dec 14,2021
									</span>
								</th>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									09:30:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									20:03:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									10:33
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									No
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									Approved
								</td>

								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
									<TableDropdown />
								</td>
							</tr>
							<tr>
								<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
									<span
										className={
											"font-bold " +
											+(color === "light" ? "text-blueGray-600" : "text-white")
										}>
										Dec 14,2021
									</span>
								</th>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									09:30:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									20:03:00
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									10:33
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									No
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									Approved
								</td>

								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
									<TableDropdown />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

CardTable.defaultProps = {
	color: "light",
};

CardTable.propTypes = {
	color: PropTypes.oneOf(["light", "dark"]),
};
