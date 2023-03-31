import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './components/Blog/Blog';
import Bookmark from './components/Bookmarks/Bookmark';
import Nav from './components/Nav/Nav';
import TimeCounter from './components/Time_counter/TimeCounter';

function App() {
	const [currentReadTime, setCurrentReadTime] = useState(0);

	const handleReadTime = (time) => {
		setCurrentReadTime(currentReadTime + time);
	};

	let [bookmarkItems, setBookmarkItems] = useState([]);
	const bookmarkHandler = (title) => {
		const newBookmarkItems = [...bookmarkItems, title];
		setBookmarkItems(newBookmarkItems);
	};
	return (
		<div className='App'>
			<Nav></Nav>
			<hr />
			<div className='my-10 flex lg:flex-row flex-col justify-around'>
				<Blog handleReadTime={handleReadTime} bookmarkHandler={bookmarkHandler}></Blog>
				<hr className='block lg:hidden my-3 mx-8 h-[2px] bg-gray-200' />
				<div className='max-h-[90vh] sticky top-2 left-0'>
					<TimeCounter currentReadTime={currentReadTime}></TimeCounter>
					<Bookmark bookmarkItems={bookmarkItems}></Bookmark>
				</div>
			</div>
		</div>
	);
}

export default App;
