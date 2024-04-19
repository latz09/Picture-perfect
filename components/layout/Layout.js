import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='  font-questrial text-dark  bg-light '>
			<div className='shadow-lg shadow-dark/30 sticky top-0 z-50 bg-primary '>
				<Navbar />{' '}
			</div>
			<main className='flex-grow '>{children}</main>
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
