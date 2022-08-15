import Image from 'next/image';
import hero from '../../public/images/inside-of-building.jpg';

const FrameAnythingHero = () => {
	return (
		<div className='relative w-[100vw] h-[40vh] md:h-[75vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='left'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='grid gap-4 text-center tracking-widest text-gray-200'>
					<h1 className='text-5xl md:text-6xl font-robotoslab text-white text-left'>
						We frame everything.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FrameAnythingHero;
