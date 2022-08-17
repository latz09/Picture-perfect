import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
	return (
		<div className='grid grid-cols-2 py-4 items-center px-5 text-white tracking-wider  max-w-7xl mx-auto'>
			<div className=''>
				<>
					<Link href={'/'}>
						<span className='text-2xl cursor-pointer hover:opacity-75 transition duration-700'>
							<AiFillHome />
						</span>
					</Link>
				</>
				<span className='text-gray-300 tracking-widest'>{`(651) 455-7595`}</span>
			</div>
			<div className='flex justify-end items-center space-x-5 text-center'>
				<Link href={'/custom-framing'}>
					<span className='border border-white border-opacity-40 hover:border-opacity-100 p-1 md:py-3 lg:p-4 bg-red-500 cursor-pointer transition duration-700'>
						{' '}
						Custom Framing
					</span>
				</Link>
				<Link href={'/commercial-services'}>
					<span className='border border-white border-opacity-40 hover:border-opacity-100 p-1 md:py-3 md:px-2 lg:p-4 bg-red-500 cursor-pointer transition duration-700'>
						{' '}
						Commercial Services
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
