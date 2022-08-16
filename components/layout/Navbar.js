import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
	return (
		<div className='grid grid-cols-2 py-4 items-center px-5 text-white tracking-wider  max-w-7xl mx-auto'>
			<div className='flex space-x-3'>
				<Link href={'/'}>
					<span className='text-2xl  cursor-pointer'>
						<AiFillHome />
					</span>
				</Link>
				<span>{`(651) 455-7595`}</span>
			</div>
			<div className='flex justify-between md:justify-around items-center text-center'>
				
				<Link href={'/custom-framing'}>Custom Framing</Link>
				{/* <span>State Capitol</span> */}
				{/* <span>About us</span> */}
				<Link href={'/contact-us'}>Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
