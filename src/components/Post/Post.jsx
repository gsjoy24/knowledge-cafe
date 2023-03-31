import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post, handleReadTime, bookmarkHandler }) => {
	const { author, author_img, blog_img, blog_title, read_time, publish_date, tags } = post;
	return (
		<div className='max-w-[650px] p-3 m-auto lg:m-0'>
			{/* blog image */}
			<img className='w-full rounded-md' src={blog_img} alt='' />
			{/* blog detail */}
			<div className='mt-6 flex justify-between items-center'>
				<div className='author flex items-center'>
					<img className='w-14 h-14 rounded-full mr-4' src={author_img} alt='' />
					{/* author detail and date */}
					<div>
						<h5 className='font-bold'>{author}</h5>
						<p className='text-xs font-semibold text-zinc-500'>{publish_date}</p>
					</div>
				</div>
				{/* reading time */}
				<div>
					<p className='text-sm font-semibold text-zinc-500'>
						0{read_time} min read
						<FontAwesomeIcon
							onClick={() => bookmarkHandler(blog_title)}
							className='ml-2 cursor-pointer '
							icon={faBookmark}
						/>
					</p>
				</div>
			</div>
			<h1 className='text-3xl font-bold my-4'>{blog_title}</h1>
			{tags.map((tag) => (
				<span key={tag} className='mr-3 text-sm text-slate-500'>#{tag}</span>
			))}
			<button
				onClick={() => handleReadTime(read_time)}
				className='text-purple-600 underline font-semibold block mt-4 hover:border-purple-600 border border-solid rounded-md duration-200 active:scale-75 p-2 '>
				Mark as read
			</button>
		</div>
	);
};

export default Post;
