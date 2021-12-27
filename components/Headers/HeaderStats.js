/** @format */

import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
	return (
		<>
			{/* Header */}
			<div className='relative bg-blueGray-800 md:pt-32 pb-32 pt-12'>
				<div className='px-4 md:px-10 mx-auto w-full'>
					<div>
						{/* Card stats */}
						<div className='flex flex-wrap'>
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
		</>
	);
}
