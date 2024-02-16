import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='  font-questrial text-dark bg-light'>
			<div className='shadow-lg shadow-primary/20 sticky top-0 z-50 bg-light'>
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
