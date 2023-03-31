import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Blog = ({ handleReadTime, bookmarkHandler }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((data) => data.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<Post bookmarkHandler={bookmarkHandler} handleReadTime={handleReadTime} post={post} key={post.id}></Post>
			))}
		</div>
	);
};

export default Blog;
