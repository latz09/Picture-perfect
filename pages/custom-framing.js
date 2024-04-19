import { customFramingData } from '../data/customFramingData';
import CustomFramingHero from '../components/heros/CustomFramingHero';
import FramingTemplate from '../components/utils/FramingTemplate';
import Head from 'next/head';

const customFraming = () => {
	return (
		<>
		<Head>
				<title> Custom Framing at Picture Perfect </title>
				<meta
					name='description'
					content='Custom picture frame shop in West Saint Paul Minnesota Quality framing at affordable prices since 1990'
					keywords='picture framing, custom framing, picture frames, custom picture frames, picture framing shop, custom picture framing'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='UTF-8' />
				{/* Facebook/Twiiter */}
				<meta property='og:title' content='Picture Perfect West Saint Paul' />
				<meta
					property='og:description'
					content='Custom picture frame shop in West Saint Paul, Minnesota. Quality framing at affordable prices since 1990.'
				/>
				<meta property='og:image' content='/images/picture-framing.jpg' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='http://www.pictureperfectmn.com/' />

				{/* Twitter */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Picture Perfect West Saint Paul' />
				<meta
					name='twitter:description'
					content='Custom picture frame shop in West Saint Paul, Minnesota. Quality framing at affordable prices since 1990.'
				/>
				<meta
					name='twitter:image'
					content='/images/picture-framing.jpg'
				/>
				<meta name='robots' content='index, follow' />
				<meta name='author' content='Latz Web Design' />
				<meta name='copyright' content='Copyright ©2024 Latz Web Design' />

				<link rel='canonical' href='http://www.pictureperfectmn.com/' />
				<link rel='icon' href='/favicon.png' />
			</Head>
		<div className='grid gap-4 '>
			<div>
				<CustomFramingHero />
			</div>
			<div className='lg:gap-24 gap-24 grid pt-12 max-w-5xl mx-auto py-16 '>
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
		</>
	);
};

export default customFraming;
