import React from 'react';

const TimeCounter = ({ currentReadTime }) => {
	return (
		<div className='bg-violet-100 w-80 m-auto lg:m-0 h-16 rounded-lg border-2 border-violet-600 text-center lg:mt-3 mt-8'>
			<p className='text-xl font-semibold text-violet-600 p-4'>Spent time on read : {currentReadTime} min</p>
		</div>
	);
};

export default TimeCounter;
