import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './components/Blog/Blog';
import Bookmark from './components/Bookmarks/Bookmark';
import Nav from './components/Nav/Nav';
import TimeCounter from './components/Time_counter/TimeCounter';

function App() {
	return (
		<div className='App'>
			<Nav></Nav>
			<hr />
			<div className='my-10 flex lg:flex-row flex-col justify-around'>
				<Blog></Blog>
				<hr className='block lg:hidden my-3 mx-8 h-[2px] bg-gray-200' />
				<div>
					<TimeCounter></TimeCounter>
					<Bookmark></Bookmark>
				</div>
			</div>
		</div>
	);
}

export default App;
