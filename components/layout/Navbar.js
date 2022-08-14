import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
	return (
		<div className='grid grid-cols-2 py-4 items-center px-5 text-white tracking-wider   max-w-7xl mx-auto'>
			<div className='flex space-x-3'>
				<Link href={'/'}>
					<span className='text-2xl  cursor-pointer'>
						<AiFillHome />
					</span>
				</Link>
				<span>{`(651) 455-7595`}</span>
			</div>
			<div className='flex justify-between'>
				<span>About us</span>
				<span>Contact</span>
				<span>Inspiration</span>
				<span>State Capitol</span>
			</div>
		</div>
	);
};

export default Navbar;
