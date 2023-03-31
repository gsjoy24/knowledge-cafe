import React from 'react';

const Bookmark = ({ bookmarkItems }) => {
	return (
		<div>
			<h2 className='text-xl font-semibold p-4'>Bookmarked Blogs : 8</h2>
			<ul className='bookmark-list list-decimal list-inside'>
				{bookmarkItems.map((bookmarkItem) => (
					<li>{bookmarkItem}</li>
				))}
			</ul>
		</div>
	);
};

export default Bookmark;
