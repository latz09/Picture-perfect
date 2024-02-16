import Image from 'next/image';

import WhileInView from './animations/WhileInView';
import { motion } from 'framer-motion';

const FramingTemplate = ({
	title,
	heading,
	image,
	imageDescription,
	alt,
	index,
}) => {
	return (
		<div className='grid lg:grid-cols-2  '>
			<div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} place-self-center` }>
				<WhileInView>
					<div className='grid gap-1 tracking-wide place-items-center lg:place-items-start px-4'>
						<h1 className='text-3xl lg:text-5xl text-primary font-tinos'>{title}</h1>
						<p className='font-semibold text-lg lg:text-xl text-center lg:text-start mb-4 lg:mb-0'>
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
			<div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
				<div className='shadow-lg shadow-primary/40 grid place-items-center lg:w-2/3 mx-auto '>
					<Image src={image} alt={alt} layout='intrinsic' />
				</div>
				<p
					className='italic mt-4 text-center lg:hidden px-4'
			
				>
					{imageDescription}
				</p>
			</div>
		</div>
	);
};

export default FramingTemplate;
