import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Users from './pages/Users';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<HomeLayout />}
				>
					<Route
						path='users'
						element={<Users />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
