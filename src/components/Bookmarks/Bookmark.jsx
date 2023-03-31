import React from 'react';

const Bookmark = ({ bookmarkItems }) => {
	return (
		<div className='p-2 mt-4 rounded-lg bg-gray-200 w-80 m-auto'>
			<h2 className='text-xl font-semibold p-4'>Bookmarked Blogs : {bookmarkItems.length}</h2>
			<ul className='bookmark-list list-decimal list-inside '>
				{bookmarkItems.map((bookmarkItem) => (
					<li key={bookmarkItem} className='text-xl font-semibold  p-4 bg-white m-2 rounded-md'>{bookmarkItem}</li>
				))}
			</ul>
		</div>
	);
};

export default Bookmark;
