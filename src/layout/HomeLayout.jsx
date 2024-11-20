import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div className='w-full flex flex-col '>
			<Header />
			<main className='w-full'>
				<Outlet />
			</main>
		</div>
	);
};

export default HomeLayout;
