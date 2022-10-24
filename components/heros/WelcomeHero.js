import Image from 'next/image';
import hero from '../../public/images/front-of-building.jpg';
import { motion } from 'framer-motion';

const WelcomeHero = () => {
	const delayVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: .5,
				duration: 1.9,
			},
		},
	};

	return (
		<div className='relative w-[100vw] h-[75vh] z-10'>
			<Image
				src={hero}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60 text-white'>
				<div className='grid gap-4  tracking-widest '>
					<h1 className='text-4xl md:text-6xl font-robotoslab font-bold px-4 md:px-0'>{`Picture Perfect Art & Frame`}</h1>
					<motion.p
						variants={delayVariant}
						initial='hidden'
						animate='visible'
						className=' text-lg md:text-2xl  text-center  font-rubik bg-red-500 py-3 bg-opacity-75'
					>
						Designing the perfect framing to suit your style and budget
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHero;
