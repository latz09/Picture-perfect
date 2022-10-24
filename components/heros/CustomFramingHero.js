import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import hero from '../../public/images/custom/colors.jpg';
import { motion } from 'framer-motion';

const CustomFramingHero = () => {
	return (
		<div className='relative w-[100vw] h-[50vh] md:h-[65vh]'>
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
				<div className='grid gap-4 place-items-center tracking-widest text-gray-200 max-w-5xl text-center '>
					<h1 className='text-5xl md:text-7xl  font-robotoslab text-white text-left mt-20'>
						Custom Framing
					</h1>
					<motion.div
						className='text-base md:text-2xl mx-2'
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{delay: .6, duration: 1.5}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</motion.div>
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
