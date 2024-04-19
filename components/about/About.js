import Image from 'next/image';
import mnOutline from '../../public/images/minnesota-outline.png';
import WhileInView from '../utils/animations/WhileInView';
import Link from 'next/link';

const About = () => {
	return (
		<div className=' max-w-7xl mx-auto py-8   grid '>
			<div className='grid gap-8 md:grid-cols-2 items-center justify-items-center mx-4'>
				<div className='w-1/3'>
					<Image src={mnOutline} alt=''  />
				</div>
				<WhileInView>
					<div className='grid gap-6'>
						<p className='text-2xl  md:text-2xl lg:text-3xl text-center'>
							<span className='text-primary font-bold'>
								{' '}
								{`Picture Perfect Art & Frame`}{' '}
							</span>{' '}
							has been serving the art and custom framing needs of the Twin
							Cities since 1990.
						</p>
						<div className='btn-primary lg:w-1/2 mx-auto'>
							<Link href='/about-us' className=''>
								<span className=''>Learn More About Us</span>
							</Link>
						</div>
					</div>
				</WhileInView>
			</div>
		</div>
	);
};

export default About;
