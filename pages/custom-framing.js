import ArtFraming from '../components/customFraming/ArtFraming';
import JerseyFraming from '../components/customFraming/JerseyFraming';
import Memorabilia from '../components/customFraming/Memorabilia';
import Preservation from '../components/customFraming/Preservation';

import CustomFramingHero from '../components/heros/CustomFramingHero';
import {motion } from 'framer-motion';
const customFraming = () => {
	return (
		<div className='grid  '>
			<CustomFramingHero />
			<div className='lg:gap-16 gap-8 grid pt-12'>
				<div className='bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0'>
					<motion.div className='max-w-7xl mx-auto'
						initial={{ opacity: 0, y: 88 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.3, delay: .9 }}

					>
						<ArtFraming />
					</motion.div>
				</div>
				<div className='bg-gray-50'>
					<div className='max-w-7xl mx-auto'>
						<Preservation />
					</div>
				</div>
				<div className='bg-gray-200'>
					<div className='max-w-7xl mx-auto'>
						<Memorabilia />
					</div>
				</div>
				<div className='bg-gray-50'>
					<div className='max-w-7xl mx-auto'>
						<JerseyFraming />
					</div>
				</div>
			</div>
		</div>
	);
};

export default customFraming;
