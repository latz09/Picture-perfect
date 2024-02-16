import ArtFraming from '../components/customFraming/ArtFraming';
import JerseyFraming from '../components/customFraming/JerseyFraming';
import Memorabilia from '../components/customFraming/Memorabilia';
import Preservation from '../components/customFraming/Preservation';

import CustomFramingHero from '../components/heros/CustomFramingHero';

const customFraming = () => {
	return (
		<div className='grid '>
			<CustomFramingHero />
			<div className='lg:gap-16 gap-8 grid'>
				<div className='bg-gradient-to-b from-primary/5 via-primary/5 to-primary/0'>
					<div className='max-w-7xl mx-auto'>
						<ArtFraming />
					</div>
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
