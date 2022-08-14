import Head from 'next/head';
import About from '../components/about/About';
import FeaturedFraming from '../components/featuredFraming/FeaturedFraming';

import Hero from '../components/hero/Hero';

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
				<Hero />
				<About />
				<FeaturedFraming />
				<div>contact form? / more framing examples</div>
				<div>Capital</div>
			</div>
		</div>
	);
}
