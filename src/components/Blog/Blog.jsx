import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Blog = ({ handleReadTime, bookmarkHandler, bookmarkItems }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((data) => data.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<Post
					bookmarkHandler={bookmarkHandler}
					handleReadTime={handleReadTime}
					post={post}
					bookmarkItems={bookmarkItems}
					key={post.id}></Post>
			))}
		</div>
	);
};

export default Blog;
