/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "@/configs/index";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { userStateAtom } from "@/store/user";
import { CheckInRoute } from "network/misc";
import moment from "moment";
import { toast } from "react-toastify";
import { CheckModalAtom, TimeModalAtom } from "@/store/recoil";
const fetcher = (url, token) =>
	axios
		.get(url, { headers: { authorization: `Bearer ${token}` } })
		.then((res) => res.data);
function TimeCard(props) {
	const [user, setUser] = useRecoilState(userStateAtom);
	const [modal, setModal] = useRecoilState(CheckModalAtom);
	const [time, settime] = useState("");

	const { data, error } = useSWR(
		[`${baseUrl}/user/misc/attendance`, user.token],
		fetcher
	);
	let timeFun = () => {
		if (data?.data) {
			var startTime = moment(data?.data.start, "HH:mm:ss a");
			var endTime = moment();

			var duration = moment.duration(endTime.diff(startTime));
			// duration in hours
			var hours = parseInt(duration.asHours());

			// duration in minutes
			var minutes = parseInt(duration.asMinutes()) % 60;

			// duration in sec
			var seconds = parseInt(duration.asSeconds()) % 60;

			return `${hours.toString().length > 1 ? hours : "0" + hours}:${
				minutes.toString().length > 1 ? minutes : "0" + minutes
			}:${seconds.toString().length > 1 ? seconds : "0" + seconds}`;
		}
	};

	let endtimeFun = () => {
		if (data?.data.end) {
			var startTime = moment(data?.data.start, "HH:mm:ss a");
			var endTime = moment(data?.data.end, "HH:mm:ss a");

			var duration = moment.duration(endTime.diff(startTime));
			// duration in hours
			var hours = parseInt(duration.asHours());

			// duration in minutes
			var minutes = parseInt(duration.asMinutes()) % 60;

			// duration in sec
			var seconds = parseInt(duration.asSeconds()) % 60;

			return `${hours.toString().length > 1 ? hours : "0" + hours}:${
				minutes.toString().length > 1 ? minutes : "0" + minutes
			}:${seconds.toString().length > 1 ? seconds : "0" + seconds}`;
		}
	};
	setInterval(() => {
		settime(timeFun());
	}, 1000);
	return (
		<div className='apply-leave'>
			<form action='#' onChange={(e) => e.preventDefault()}>
				<div className='flex items-center justify-center'></div>
				<div className='col-span-6 mb-4  timerModalIn'>
					<h1>
						{data?.data?.end
							? endtimeFun()
							: data?.data?.start
							? timeFun()
							: "00:00:00"}
					</h1>
				</div>
				<div className='col-span-6'>
					<label
						htmlFor='street-address'
						className='block text-sm font-medium text-gray-700'></label>
					{data?.data ? (
						<button
							type='submit'
							class='inline-flex bg-indigo-500 blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							onClick={(e) => {
								CheckInRoute({
									body: {
										end: `${moment().format("hh:mm:ss a")}`,
										type: "end",
									},
									user,
								}).then((res) => {
									if (res.status) {
										setModal(false);
									}
								});
							}}>
							Chek Out
						</button>
					) : (
						<button
							type='submit'
							class='inline-flex bg-indigo-500 blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							onClick={(e) => {
								CheckInRoute({
									body: {
										start: `${moment().format("hh:mm:ss a")}`,
										type: "start",
									},
									user,
								}).then((res) => {
									if (res.status) {
										setModal(false);
									}
								});
							}}>
							Chek in
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default TimeCard;
