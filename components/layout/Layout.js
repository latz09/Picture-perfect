import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-robotoslab flex flex-col h-screen '>
			<div className=' bg-red-500 '>
				<Navbar />{' '}
			</div>
			<main className='flex-grow'>{children}</main>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
