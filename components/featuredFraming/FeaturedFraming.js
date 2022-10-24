import FeaturedItem from './FeaturedItem';
import { featuredFraming } from '../../data/featuredFraming';

const FeaturedFraming = () => {
	return (
		<div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 items-center justify-center my-12 max-w-7xl mx-auto px-2 '>
			{featuredFraming.map((item) => (
				<span key={item.title} className="">
					<FeaturedItem image={item.image} title={item.title} />
				</span>
			))}
		</div>
	);
};

export default FeaturedFraming;
