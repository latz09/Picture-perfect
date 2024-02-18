import Link from 'next/link';

const AboutUsPage = () => {
	return (
		<div className=' grid gap-8 max-w-3xl mx-auto '>
			<h1 className='text-4xl lg:text-5xl text-primary font-tinos text-center pt-16  '>
				About Us
			</h1>
			<div className='grid gap-4  h-full  text-lg px-4 lg:text-xl text-center pb-4 leading-8'>
				<p>
					<span className='font-bold font-tinos text-primary'>
						{' '}
						Picture Perfect Art & Frame{' '}
					</span>{' '}
					opened its doors in the summer of 1990. We are a small family run
					business that can offer competitive pricing while giving you great
					quality and design services at the same time. All work is done on the
					premises and handled with care.
				</p>
				<p>
					We can frame anything from Jerseys to shadow boxes to simple posters,
					you name it and we can frame it!
				</p>
				<p>
					We have done jobs as small as simply replacing a piece of glass, to an
					entire office building with over 400 pieces needed
				</p>

				<p>
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
	);
};

export default AboutUsPage;
