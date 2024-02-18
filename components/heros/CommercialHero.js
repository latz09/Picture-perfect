import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import hero from '../../public/images/corporate/commercial-services.png';
import { motion } from 'framer-motion';

const CommercialHero = () => {
	return (
		<div className='relative  h-[40vh] md:h-[55vh]'>
			<div className='-z-10 '>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority={true}
				/>
			</div>
			<motion.div className='relative flex justify-center shadow-lg shadow-primary/40 items-center h-full bg-gradient-to-b from-dark/10 via-dark/90 to-dark/10 text-light '>
				<div className='grid gap-2 text-center justify-items-center   mt-16'>
					<h1 className='text-3xl md:text-6xl font-tinos '>
						Commercial Services
					</h1>
					<div className=' text-lg md:text-2xl text-white tracking-wider px-4'>
						<span className=''> Competitevely priced </span>
						to impress your clients and inspire your staff
					</div>
					<span className='text-5xl text-primary animate-pulse '>
						<MdKeyboardArrowDown />{' '}
					</span>
				</div>
			</motion.div>
		</div>
	);
};

export default CommercialHero;
