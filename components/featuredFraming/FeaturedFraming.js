import FeaturedItem from './FeaturedItem';
import { featuredFraming } from '../../data/featuredFraming';

const FeaturedFraming = () => {
	return (
		<div className="grid gap-4 py-8 bg-gray-50 text-gray-900">
            <h1 className="text-center text-3xl tracking-wider text-gray-700 my-8">We will frame almost anything for you</h1>
		
			<div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 '>
				{featuredFraming.map((item) => (
					<span key={item.title}>
						<FeaturedItem image={item.image} title={item.title} />
					</span>
				))}
			</div>
           
		</div>
	);
};

export default FeaturedFraming;
