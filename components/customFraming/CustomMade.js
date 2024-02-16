import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';
import { motion } from 'framer-motion';

const CustomMade = () => {
	return (
		<div className='  bg-dark py-16 text-light px-4'>
			<WhileInView>
				<div className='grid gap-8 max-w-5xl mx-auto'>
					<div>
						<h1 className='font-tinos text-3xl lg:text-5xl'>
							Each Frame is custom made
						</h1>
						<p className=' text-primary text-xl lg:text-3xl'>Just for You</p>
					</div>
					<p className='lg:w-2/3'>
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
							<span className='text-lg p-1 bg-primary rounded-sm font-bold  shadow-lg shadow-primary/40 hover:bg-opacity-75 transition duration-700 cursor-pointer px-2 py-4'>
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
