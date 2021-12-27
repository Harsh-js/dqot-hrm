/** @format */

import React, { useState } from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { useRecoilState } from "recoil";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HOCMOdal from "components/Hoc/Modal.js";
import { CheckModalAtom, ModalAtom, TimeModalAtom } from "@/store/recoil";

export default function Navbar() {
	const [showModal, setShowModal] = useRecoilState(CheckModalAtom);
	const [TimeshowModal, setTimeShowModal] = useRecoilState(TimeModalAtom);

	const [startdate, setStartDate] = useState(new Date());
	const [enddate, setEndDate] = useState(new Date());
	return (
		<>
			{/* Navbar */}
			<nav className='absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4'>
				<div className='w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
					{/* Brand */}
					<a
						className='text-white text-sm uppercase hidden lg:inline-block font-semibold'
						href='#pablo'
						onClick={(e) => e.preventDefault()}>
						Dashboard
					</a>
					{/* Form */}
					<div
						className='lg:flex flex-grow items-center'
						id='example-navbar-warning'>
						<ul className='flex flex-col lg:flex-row list-none ml-auto'>
							<li className='nav-item'>
								<a
									className='px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									onClick={() => setTimeShowModal(true)}>
									<i className='far fa-clock mr-2'></i>
									Time Card
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									onClick={() => setShowModal(true)}>
									<i className='far fa-clock mr-2'></i>
									Check/Check in Out
								</a>
							</li>
						</ul>
					</div>
					{/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}
					{/* User */}
					<ul className='flex-col md:flex-row list-none items-center hidden md:flex'>
						<span className=' leading-snug text-white mr-2'>Admin</span>
						<UserDropdown />
					</ul>
				</div>
			</nav>
			{/* End Navbar */}

			{showModal ? (
				<HOCMOdal type={"Check"} title={"Chek in/Check Out"}>
					<div className='apply-leave'>
						<form action='#' method='POST'>
							<div className='flex items-center justify-center'></div>
							<div className='col-span-6 mb-4'>
								<label
									htmlFor='street-address'
									className='block text-sm font-medium text-gray-700'>
									Date
								</label>
								<DatePicker
									className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
									dateFormat={"dd/MM/yyyy"}
									selected={enddate}
									onChange={(date) => {
										setEndDate(date);
										setToDate(date.toLocaleDateString());

										changedFunction(date);
									}}
								/>
							</div>
							<div className='col-span-6'>
								<label
									htmlFor='street-address'
									className='block text-sm font-medium text-gray-700'>
									Action
								</label>
								<button
									type='submit'
									class='inline-flex bg-indigo-500 blue-btn justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
									Chek in
								</button>
							</div>
						</form>
					</div>
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
							<button type="button" class="px-6 py-2 border-2 border-black-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">	Add More Project Info</button>
								
							</div>
							<div className="project_column"
							>
							<button type="button" class="btn-close"><i class="fas fa-times"></i></button>
							
							<div className="grid grid-cols-6  gap-3">
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
									<li>1.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
									<li>2.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
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
