/** @format */

import React, { useState, useContext, useEffect } from "react";
// import "./App.css";
import { getMonth } from "./Calendar_components/util";
import CalendarHeader from "./Calendar_components/CalendarHeader";
// import Sidebar from "./components/Sidebar";
import Month from "./Calendar_components/Month";
import GlobalContext from "context/GlobalContext";
import EventModal from "./Calendar_components/EventModal";

function Calendar() {
	const [currenMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	  }, [monthIndex]);
	return (
		<>
		{showEventModal && <EventModal />}
			<div className='relative w-full rounded h-600-px'>
			<CalendarHeader />
			<Month month={currenMonth} />
			</div>
		</>
	);
}

export default Calendar;
