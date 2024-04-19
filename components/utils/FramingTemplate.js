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
		<motion.div className='grid lg:grid-cols-2  '
			initial={{ y: 60 }}
			whileInView={{ y: 0 }}
			transition={{ delay: 0.2, duration: .9 }}
		>
			<div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} place-self-center` }>
				<WhileInView>
					<div className='grid gap-2 tracking-wide place-items-center lg:place-items-center text-center px-4'>
						<h1 className='text-4xl lg:text-6xl text-primary font-tinos'>{title}</h1>
						<p className='font-semibold text-lg lg:text-2xl  mb-4 lg:mb-0'>
							{heading}
						</p>
						<motion.p
							className='text-lg  mt-2 hidden lg:block font-italic'
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
				<motion.div className='shadow-lg shadow-primary/40 grid place-items-center lg:w-2/3 mx-auto '
					initial={{ opacity: 0, scale: .8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 1.3 }}

				>
					<Image src={image} alt={alt}  />
				</motion.div>
				<p
					className=' mt-4 text-center lg:hidden px-4 text-lg'
			
				>
					{imageDescription}
				</p>
			</div>
		</motion.div>
	);
};

export default FramingTemplate;
