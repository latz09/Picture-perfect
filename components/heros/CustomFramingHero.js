import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import hero from '../../public/images/custom/colors.jpg';
import { motion } from 'framer-motion';

const CustomFramingHero = () => {
	return (
		<div className='relative h-[33vh] md:h-[55vh] overflow-hidden'>
			<div className='absolute top-0 left-0 w-full h-full z-0'>
				<Image
					src={hero}
					alt='Variety of custom frame colors'
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'left',
					}}
					priority
				/>
			</div>

			<div className='flex justify-center items-center relative h-full bg-dark/50 shadow-lg shadow-primary/40 z-10'>
				<div className='grid gap-4 items-center tracking-widest text-light max-w-5xl text-center'>
					<h1 className='text-5xl md:text-7xl text-light font-tinos'>
						Custom Framing
					</h1>

					<div className='text-light text-xl md:text-3xl grid gap-1 justify-items-center'>
						<span className='text-primary font-bold'>Get inspired.</span>
						<span className='text-5xl animate-pulse'>
							<MdKeyboardArrowDown />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomFramingHero;
