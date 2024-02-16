import Image from 'next/image';
import mnOutline from '../../public/images/minnesota-outline.png';
import WhileInView from '../utils/animations/WhileInView';

const About = () => {
	return (
		<div className=' max-w-7xl mx-auto py-8   grid '>
			<div className='grid gap-8 md:grid-cols-2 items-center justify-items-center mx-4'>
				<div className='w-1/3'>
					<Image
						src={mnOutline}
						alt=''
					 
						layout='intrinsic'
					/>
				</div>
				<WhileInView>
					<h1 className='text-2xl  md:text-2xl text-center md:text-start'>
						<span className='text-primary font-bold'>
							{' '}
							{`Picture Perfect Art & Frame`}{' '}
						</span>{' '}
						has been serving the art and custom framing needs of the Twin Cities
						since 1990.
					</h1>
				</WhileInView>
			</div>
		</div>
	);
};

export default About;
