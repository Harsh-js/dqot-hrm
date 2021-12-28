/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
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

export default function Calendar({ color }) {
    const [showModal, setShowModal] = useRecoilState(ModalAtom);
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
							Calendar
							</h3>
						
						</div>
					</div>
				</div>
				<div className='block w-full overflow-x-auto'>
                <div className="card-calendar card">
<div className="p-0 card-body">
	<div className="calendar fc fc-media-screen fc-direction-ltr fc-theme-standard">
		<div className="fc-view-harness fc-view-harness-active">
			<div className="fc-daygrid fc-dayGridMonth-view fc-view">
				<table className="fc-scrollgrid  fc-scrollgrid-liquid">
				<thead>
 <tr className="fc-scrollgrid-section fc-scrollgrid-section-header">
  <td>
   <div className="fc-scroller-harness">
    <div className="fc-scroller">
     <table className="fc-col-header">
      <colgroup></colgroup>
      <tbody>
       <tr>
        <th className="fc-col-header-cell c fc-day-sun">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Sun</a></div>
        </th>
        <th className="fc-col-header-cell fc-day fc-day-mon">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Mon</a></div>
        </th>
        <th className="fc-col-header-cell fc-day fc-day-tue">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Tue</a></div>
        </th>
        <th className="fc-col-header-cell fc-day fc-day-wed">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Wed</a></div>
        </th>
        <th className="fc-col-header-cell fc-day fc-day-thu">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Thu</a></div>
        </th>
        <th className="fc-col-header-cell fc-day fc-day-fri">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Fri</a></div>
        </th>
        <th className="fc-col-header-cell fc-day fc-day-sat">
         <div className="fc-scrollgrid-sync-inner"><a className="fc-col-header-cell-cushion">Sat</a></div>
        </th>
       </tr>
       <tr>
    <td class="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other" data-date="2021-11-28">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner" onClick={() => setShowModal(true)}>
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">28</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other" data-date="2021-11-29" onClick={() => setShowModal(true)}>
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">29</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-tue fc-day-past fc-day-other" data-date="2021-11-30">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">30</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-wed fc-day-past" data-date="2021-12-01">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">1</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-red" onClick={() => setShowModal(true)}>
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Call with Dave</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-thu fc-day-past" data-date="2021-12-02">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">2</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-yellow">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Cyber Week</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-fri fc-day-past" data-date="2021-12-03">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">3</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-sat fc-day-past" data-date="2021-12-04">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">4</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
</tr>
<tr>
    <td class="fc-daygrid-day fc-day fc-day-sun fc-day-past" data-date="2021-12-05">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">5</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-mon fc-day-past" data-date="2021-12-06">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">6</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-tue fc-day-past" data-date="2021-12-07">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">7</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-wed fc-day-past" data-date="2021-12-08">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">8</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-thu fc-day-past" data-date="2021-12-09">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">9</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-fri fc-day-past" data-date="2021-12-10">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">10</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-sat fc-day-past" data-date="2021-12-11">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">11</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
</tr>
<tr>
    <td class="fc-daygrid-day fc-day fc-day-sun fc-day-past" data-date="2021-12-12">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">12</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-mon fc-day-past" data-date="2021-12-13">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">13</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-tue fc-day-past" data-date="2021-12-14">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">14</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-wed fc-day-past" data-date="2021-12-15">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">15</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-thu fc-day-past" data-date="2021-12-16">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">16</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-fri fc-day-past" data-date="2021-12-17">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">17</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-sat fc-day-past" data-date="2021-12-18">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">18</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
</tr>
<tr>
    <td class="fc-daygrid-day fc-day fc-day-sun fc-day-past" data-date="2021-12-19">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">19</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-red">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Dinner with Family</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-mon fc-day-past" data-date="2021-12-20">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">20</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-tue fc-day-past" data-date="2021-12-21">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">21</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-warning">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Digital event</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-purple">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Marketing event</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-wed fc-day-past" data-date="2021-12-22">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">22</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-thu fc-day-past" data-date="2021-12-23">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">23</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-blue">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Black Friday</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-fri fc-day-past" data-date="2021-12-24">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">24</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-sat fc-day-past" data-date="2021-12-25">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">25</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
</tr>
<tr>
    <td class="fc-daygrid-day fc-day fc-day-sun fc-day-past" data-date="2021-12-26">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">26</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-blue">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Meeting with Mary</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-mon fc-day-past" data-date="2021-12-27">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">27</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end bg-orange">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Lunch meeting</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-tue fc-day-today" data-date="2021-12-28">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">28</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-wed fc-day-future" data-date="2021-12-29">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">29</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future bg-red">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">Winter Hackaton</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-thu fc-day-future" data-date="2021-12-30">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">30</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-fri fc-day-future" data-date="2021-12-31">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">31</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-sat fc-day-future fc-day-other" data-date="2022-01-01">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">1</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
</tr>
<tr>
    <td class="fc-daygrid-day fc-day fc-day-sun fc-day-future fc-day-other" data-date="2022-01-02">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">2</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-mon fc-day-future fc-day-other" data-date="2022-01-03">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">3</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-tue fc-day-future fc-day-other" data-date="2022-01-04">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">4</a></div>
            <div class="fc-daygrid-day-events">
                <div class="fc-daygrid-event-harness">
                    <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future bg-green">
                        <div class="fc-event-main">
                            <div class="fc-event-main-frame">
                                <div class="fc-event-title-container"><div class="fc-event-title fc-sticky">All day conference</div></div>
                            </div>
                        </div>
                        <div class="fc-event-resizer fc-event-resizer-end"></div>
                    </a>
                </div>
            </div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-wed fc-day-future fc-day-other" data-date="2022-01-05">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">5</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-thu fc-day-future fc-day-other" data-date="2022-01-06">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">6</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-fri fc-day-future fc-day-other" data-date="2022-01-07">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">7</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
    <td class="fc-daygrid-day fc-day fc-day-sat fc-day-future fc-day-other" data-date="2022-01-08">
        <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
            <div class="fc-daygrid-day-top"><a class="fc-daygrid-day-number">8</a></div>
            <div class="fc-daygrid-day-events"></div>
            <div class="fc-daygrid-day-bg"></div>
        </div>
    </td>
</tr>



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
				<HOCMOdal type={"Leave"} title={"Add Event"}>
                    <div className='apply-leave events-modal'>
                    <div className='mt-5 md:mt-0 md:col-span-2'>
                    <form action='#' method='POST'>
                    <div className=' overflow-hidden sm:rounded-md'>
                    <div className='sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6'>
												<label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
													Event title
												</label>
												<input
													type='text'
													name='street-address'
													id='street-address'
													autoComplete='street-address'
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
												
													
												/>
                                              
             
											</div>
                                            <div className='col-span-6'>
                                            <label
													htmlFor='street-address'
													className='block text-sm font-medium text-gray-700'>
												Status color
												</label>
                                            <input className="form-check-input bg-info appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <input className="form-check-input bg-warning appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <input className="form-check-input bg-danger appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <input className="form-check-input bg-success  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <input className="form-check-input bg-default  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                            <input className="form-check-input bg-primary   appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />


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
													></textarea>
											</div>
                                            <div className=' py-3 bg-gray-50 flex flex-col text-right col-span-6'>
                                                <div className="enent-buttons">
                                                <button
											type='submit'
											className='inline-flex bg-red-500 mr-2  blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											>
										Update
										</button>
                                        <button
											type='submit'
											className='inline-flex bg-pink-500 blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											>
										Delete
										</button>
							
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
