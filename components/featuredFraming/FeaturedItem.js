import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturedItem = ({ image, title }) => {
	return (
		<div>
			<div className='relative text-center grid shadow-lg '>
				<Image src={image} alt={title} height={340} width={300} />

				<div className='absolute bottom-0  bg-black bg-opacity-40 px-1 md:px-2 md:py-3 w-full'>
					<motion.h1
						className=' text-lg md:text-xl font-bold   tracking-widest text-white'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 1.5 }}
					>
						{title}
					</motion.h1>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
