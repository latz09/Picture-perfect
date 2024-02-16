import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import hero from '../../public/images/custom/colors.jpg';
import { motion } from 'framer-motion';

const CustomFramingHero = () => {
	return (
		<div className='relative h-[37vh]  md:h-[60vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='left'
				/>
			</div>

			<div className='flex justify-center items-center relative h-full bg-dark/50 shadow-lg shadow-primary/40'>
				<div className='grid gap-2 items-center tracking-widest text-light max-w-5xl text-center '>
					<h1 className='text-5xl md:text-7xl text-light font-tinos '>
						Custom Framing
					</h1>
				
					<div className='text-light  text-lg md:text-2xl grid gap-2 justify-items-center'>
						{' '}
						<span className="text-primary font-bold"> Get inspired</span>{' '}
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
