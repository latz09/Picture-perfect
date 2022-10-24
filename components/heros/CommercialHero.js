import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import hero from '../../public/images/corporate/commercial-services.png';
import { motion } from 'framer-motion';

const CommercialHero = () => {
	return (
		<div className='relative w-[100vw] h-[40vh] md:h-[80vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<motion.div
				className='relative flex justify-center items-center h-full bg-black '
				initial={{ opacity: 0.1 }}
				animate={{ opacity: 0.73 }}
				transition={{ delay: 0.4, duration: 3.3 }}
			>
				<div className='grid gap-4 text-center justify-items-center tracking-widest text-white '>
					<h1 className='text-3xl md:text-6xl font-robotoslab text-white'>
						Commercial Services
					</h1>
					<div className=' text-lg md:text-2xl text-white tracking-wider '>
						<span className='text-white underline underline-offset-8 decoration-red-500'>
							{' '}
							Competitevely priced{' '}
						</span>
						to impress your clients and inspire your staff
					</div>
					<span className='text-5xl text-red-500 animate-pulse '>
						<MdKeyboardArrowDown />{' '}
					</span>
				</div>
			</motion.div>
		</div>
	);
};

export default CommercialHero;
