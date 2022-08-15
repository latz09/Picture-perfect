import Link from 'next/link';

const CustomMade = () => {
	return (
		<div className=' bg-gray-600 text-gray-100 text-3xl tracking-wide p-8 pb-28'>
			<div className='grid gap-5  max-w-2xl mx-auto'>
				<h1 className='font-thin'>Each Frame is custom made</h1>
				<p className='font-bol text-4xl text-red-500'>Just for You</p>
				<p className='text-base font font-thin text-white'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
					vulputate odio ut enim. Scelerisque eleifend donec pretium vulputate
					sapien nec sagittis aliquam malesuada.
				</p>
				<Link href={'/custom-framing'}>
					<span className='text-lg p-1 bg-red-500 w-40 text-center shadow-lg hover:bg-opacity-75 transition duration-700 cursor-pointer'>
						{' '}
						Custom Framing{' '}
					</span>
				</Link>
			</div>
		</div>
	);
};

export default CustomMade;
