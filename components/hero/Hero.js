import Image from 'next/image';
import hero from '../../public/images/front-of-building.jpg';

const Hero = () => {
	return (
		<div className='relative w-[100vw] h-[75vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='grid gap-4 text-center tracking-widest text-gray-200'>
					<h1 className='text-3xl md:text-6xl font-robotoslab text-white'>{`Picture Perfect Art & Frame`}</h1>
					<span className=' text-lg md:text-2xl '>
						Designing the perfect framing to suit your style and budget
					</span>
				</div>
			</div>
		</div>
	);
};

export default Hero;
