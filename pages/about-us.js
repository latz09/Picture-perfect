import Head from 'next/head';
import Link from 'next/link';

const AboutUsPage = () => {
	return (
		<div className="bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 ">
			<Head>
				<title>About Picture Perfect West Saint Paul</title>
				<meta
					name='description'
					content='Custom picture frame shop in West Saint Paul Minnesota Quality framing at affordable prices since 1990'
					keywords='picture framing, custom framing, picture frames, custom picture frames, picture framing shop, custom picture framing'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charset='UTF-8' />
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
				<meta name='twitter:image' content='/images/picture-framing.jpg' />
				<meta name='robots' content='index, follow' />
				<meta name='author' content='Latz Web Design' />
				<meta name='copyright' content='Copyright ©2024 Latz Web Design' />

				<link rel='canonical' href='http://www.pictureperfectmn.com/' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<div className=' grid gap-8 max-w-3xl mx-auto '>
				<h1 className='text-4xl lg:text-5xl text-primary font-tinos text-center pt-16  '>
					About Us
				</h1>
				<div className='grid gap-4  h-full  text-lg px-4 lg:text-2xl text-center pb-4 '>
					<p className="leading-7 lg:leading-9">
						<span className='font-bold font-tinos text-primary'>
							{' '}
							Picture Perfect Art & Frame{' '}
						</span>{' '}
						opened its doors in the summer of 1990. We are a small family run
						business that can offer competitive pricing while giving you great
						quality and design services at the same time. All work is done on
						the premises and handled with care.
					</p>
					<p className="leading-7 lg:leading-9 font-semibold">
						We can frame anything from Jerseys to shadow boxes to simple
						posters, you name it and we can frame it!
					</p>
					<p className="leading-7 lg:leading-9 ">
						We have done jobs as small as simply replacing a piece of glass, to
						an entire office building with over 400 pieces needed.
					</p>

					<p className="leading-7 lg:leading-9">
						Stop in and let us give you a no obligation quote on your project.
					</p>
				</div>

				<Link href='/custom-framing'>
					<div className='grid place-items-center btn-primary w-3/4 mx-auto'>
						Custom Framing
					</div>
				</Link>
				<Link href='/commercial-services'>
					<div className='grid place-items-center btn-primary w-3/4 mx-auto'>
						Commercial Services
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AboutUsPage;
