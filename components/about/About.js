import Image from 'next/image';
import mnOutline from '../../public/images/minnesota-outline.jpg';

const About = () => {
	return (
		<div className=' max-w-7xl mx-auto py-8 md:py-0 md:h-[45vh] grid text-gray-600'>
			<div className='grid md:grid-cols-2 items-center justify-items-center mx-4'>
				<div className="opacity-40">
					<Image
						src={mnOutline}
						alt=''
						height={200}
						width={200}
						layout='intrinsic'
					/>
				</div>
				<h1 className='text-lg  md:text-2xl tracking-widest  text-center'>
					<span className='text-red-500'>
						{' '}
						{`Picture Perfect Art & Frame`}{' '}
					</span>{' '}
					has been serving the art and custom framing needs of the Twin Cities
					since 1990
				</h1>
			</div>
		</div>
	);
};

export default About;
