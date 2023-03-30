import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './components/Blog/Blog';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<Nav></Nav>
			<hr />
			<Blog></Blog>
		</div>
	);
}

export default App;
