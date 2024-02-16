import { customFramingData } from '../data/customFramingData';

import CustomFramingHero from '../components/heros/CustomFramingHero';
import { motion } from 'framer-motion';
import FramingTemplate from '../components/utils/FramingTemplate';

const customFraming = () => {
	return (
		<div className='grid gap-4 '>
			<div>
				<CustomFramingHero />
			</div>
			<div className='lg:gap-24 gap-16 grid pt-12 max-w-5xl mx-auto py-16 '>
				{customFramingData.map((item, index) => (
					<FramingTemplate
						key={index}
						title={item.heading}
						heading={item.subHeading}
						image={item.image}
						imageDescription={item.description}
						alt={item.description}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default customFraming;
