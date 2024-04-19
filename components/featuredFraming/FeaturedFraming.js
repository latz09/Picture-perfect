import FeaturedItem from './FeaturedItem';
import { featuredFraming } from '../../data/featuredFraming';
import { motion } from 'framer-motion';
const FeaturedFraming = () => {
	return (
		<div className='grid  lg:grid-cols-4 place-items-center h-ful max-w-7xl mx-auto gap-24 lg:gap-12 '>
			{featuredFraming.map((item, index) => (
				<motion.div
					key={item.title}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: .2 * index }}
					className=""
					
				>
					<FeaturedItem image={item.image} title={item.title} />
				</motion.div>
			))}
		</div>
	);
};

export default FeaturedFraming;
