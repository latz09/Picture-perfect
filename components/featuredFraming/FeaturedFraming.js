import FeaturedItem from './FeaturedItem';
import { featuredFraming } from '../../data/featuredFraming';

const FeaturedFraming = () => {
	return (
		<div className='grid  lg:grid-cols-4 max-w-7xl mx-auto gap-24 '>
			{featuredFraming.map((item) => (
				<span key={item.title} className="">
					<FeaturedItem image={item.image} title={item.title} />
				</span>
			))}
		</div>
	);
};

export default FeaturedFraming;
