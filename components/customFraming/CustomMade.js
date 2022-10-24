import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';
import { motion } from 'framer-motion';

const CustomMade = () => {
	return (
		<div className=' bg-gray-600 text-gray-100 text-3xl tracking-wide p-8 pb-28'>
			<WhileInView>
				<div className='grid gap-5  max-w-2xl mx-auto'>
					<h1 className='font-thin'>Each Frame is custom made</h1>
					<p className='font-bol text-4xl text-red-500'>Just for You</p>
					<p className='text-base font font-thin text-white'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
						vulputate odio ut enim. Scelerisque eleifend donec pretium vulputate
						sapien nec sagittis aliquam malesuada.
					</p>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 1.2 }}
					>
						<Link href={'/custom-framing'}>
							<span className='text-lg p-1 bg-red-500 w-40 text-center shadow-lg hover:bg-opacity-75 transition duration-700 cursor-pointer px-2 py-4'>
								{' '}
								Custom Framing{' '}
							</span>
						</Link>
					</motion.div>
				</div>
			</WhileInView>
		</div>
	);
};

export default CustomMade;
