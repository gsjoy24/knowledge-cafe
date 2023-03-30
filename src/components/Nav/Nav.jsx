import React from 'react';

const Nav = () => {
	return (
		<nav className='flex justify-between items-center py-3 px-8'>
			<h2 className='text-2xl font-extrabold'>Knowledge Cafe</h2>
			<div className='user_profile'>
				<img
					className='w-14 rounded-[100%] hover:scale-105 active:scale-75 duration-200'
					src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
					alt='user'
				/>
			</div>
		</nav>
	);
};

export default Nav;
