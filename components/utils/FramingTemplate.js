import Image from 'next/image';

import WhileInView from './animations/WhileInView';
import { motion } from 'framer-motion';

const FramingTemplate = ({ title, heading, image, imageDescription, alt }) => {
	return (
		<div className='grid md:grid-cols-2 justify-items-center items-center text-gray-700 py-9 mx-4'>
			<div className=''>
				<WhileInView>
					<div className='grid gap-1 tracking-wide place-items-center lg:place-items-start'>
						<h1 className='text-4xl md:text-6xl '>{title}</h1>
						<p className=' text-lg md:text-xl text-center lg:text-start'>
							{heading}
						</p>
						<motion.p
							className='italic mt-2 hidden lg:block'
							initial={{ opacity: 0, x: '20px' }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 1.3 }}
						>
							{imageDescription}
						</motion.p>
					</div>
				</WhileInView>
			</div>
			<div className=' py-5 md:p-16'>
				<div className='shadow-lg shadow-primary/40 grid place-items-center w-5/6 mx-auto '>
					<Image src={image} alt={alt} layout='intrinsic' />
				</div>
				<motion.p
					className='italic mt-4 text-center lg:hidden'
					initial={{ opacity: 0, x: '20px' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 1.3 }}
				>
					{imageDescription}
				</motion.p>
			</div>
		</div>
	);
};

export default FramingTemplate;
