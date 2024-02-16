import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';
import { motion } from 'framer-motion';

const CustomMade = () => {
	return (
		<div className='  bg-dark py-16 lg:py-24 text-light px-4'>
			<WhileInView>
				<div className='grid gap-6 max-w-5xl mx-auto'>
					<div>
						<h1 className='font-tinos text-3xl lg:text-5xl'>
							Each Frame is custom made
						</h1>
						<p className=' text-primary text-xl lg:text-3xl'>Just for You</p>
					</div>
					<p className='lg:w-2/3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
						vulputate odio ut enim. 
					</p>
					<div>
						<Link href='/custom-framing'>
							<a className='btn-secondary'>Learn More</a>
						</Link>
					</div>
			
				</div>
			</WhileInView>
		</div>
	);
};

export default CustomMade;
