import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-robotoslab'>
			<div className='sticky top-0 bg-[#FB212F]'>
				<Navbar />{' '}
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
