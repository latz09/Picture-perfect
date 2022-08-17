import Head from 'next/head';
import About from '../components/about/About';
import CorporateSection from '../components/corporate/CommercialSection';
import CustomMade from '../components/customFraming/CustomMade';
import FeaturedFraming from '../components/featuredFraming/FeaturedFraming';
import FrameAnythingHero from '../components/heros/FrameAnythingHero';

import WelcomeHero from '../components/heros/WelcomeHero';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Picture Perfect West Saint Paul</title>
				<meta
					name='description'
					content='Custom picture frame shop in West Saint Paul Minnesota Quality framing at affordable prices since 1990'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='grid '>
				<WelcomeHero />
				<About />
				<FrameAnythingHero />
				<FeaturedFraming />
				<CustomMade />	
				<CorporateSection />	
			</div>
		</div>
	);
}
