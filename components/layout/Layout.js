import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-robotoslab'>
			<div className=' bg-red-500'>
				<Navbar />{' '}
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
