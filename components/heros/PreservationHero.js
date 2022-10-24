import Image from 'next/image';
import hero from '../../public/images/preservation/step-4.jpg';
import { motion } from 'framer-motion';

const Preservationhero = () => {
	return (
		<motion.div
			className='relative w-[100vw]'
			initial={{ height: '90vh' }}
			animate={{ height: '40vh' }}
			transition={{ duration: 2, delay: 1.1 }}
		>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='left'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-70 px-3'>
				<div className='grid gap-4 text-left tracking-widest text-gray-200 items-center justify-items-center'>
					<motion.h1
						className='text-5xl font-rubik text-white text-center'
						initial={{ fontSize: '4.5rem', lineHeight: '1' }}
						animate={{ fontSize: '3rem', lineHeight: '1' }}
						transition={{ duration: 1.8, delay: 1.3 }}
					>
						Preservation process
					</motion.h1>
					<div className='max-w-3xl mx-auto text-center text-xl'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt.
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Preservationhero;
