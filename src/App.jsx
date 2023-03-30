import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	const notify = () => {
		toast('🦄 Wow so easy!', {
			position: 'bottom-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		});
	};

	return (
		<div className='App'>
			<button onClick={notify}>Click</button>
			<ToastContainer
				position='top-right'
				autoClose={2000}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
			/>
		</div>
	);
}

export default App;
