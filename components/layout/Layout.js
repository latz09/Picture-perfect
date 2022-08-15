import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-robotoslab'>
			<div className=' bg-red-500'>
				<Navbar />{' '}
			</div>
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
