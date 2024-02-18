import AfterHours from '../components/corporate/AfterHours';
import Blurb from '../components/corporate/Blurb';
import WholeSalePricing from '../components/corporate/WholeSalePricing';
import CommercialHero from '../components/heros/CommercialHero';

const Commercial = () => {
	return (
		<div className='grid gap-12  '>
			<CommercialHero />
			<div className="max-w-7xl mx-auto grid gap-16 px-4">
				<Blurb />
				<WholeSalePricing />
                <AfterHours />
			</div>
		</div>
	);
};

export default Commercial;
