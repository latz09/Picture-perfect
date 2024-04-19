import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturedItem = ({ image, title }) => {
	return (
		<div className="">
			<div className='relative text-center grid shadow-lg  '>
				<Image src={image} alt={title} height={380} width={320} className="rounded-sm"/>

				<div className='absolute bottom-0  bg-gradient-to-t from-light via-light to-light/90 text-primary p-4 w-full'>
					<motion.h1
						className=' text-lg md:text-2xl font-bold '
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0, duration: 1.5 }}
					>
						{title}
					</motion.h1>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
