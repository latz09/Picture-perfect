import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import hero from '../../public/images/custom/colors.jpg';

const CustomFramingHero = () => {
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

			<div className='flex justify-center items-center relative h-full bg-black bg-opacity-50'>
				<div className='grid gap-4 justify-items-center text-center tracking-widest text-gray-200 max-w-7xl  '>
					<h1 className='text-4xl md:text-6xl font-robotoslab text-white text-left'>
						Custom Framing
					</h1>
					<div className='text-sm md:text-base mx-2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Elementum sagittis vitae et leo duis ut diam quam.
					</div>
					<div className='text-red-500  text-lg md:text-3xl grid gap-2 justify-items-center'>
						{' '}
						<span> Get inspired</span>{' '}
						<span className='text-5xl animate-pulse'>
							<MdKeyboardArrowDown />{' '}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomFramingHero;
