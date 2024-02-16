import Image from 'next/image';
import hero from '../../public/images/inside-of-building.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const FrameAnythingHero = () => {
	//variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.7,
				delay: 0.3,
			},
			exit: { opacity: 1 },
		},
	};
	const item = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.3,
			},
		},
	};

	// =============

	const phrase = ['We', 'frame', 'everything.'];

	return (
		<div className='relative h-[55vh] md:h-[75vh] shadow-lg shadow-primary/40'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='left'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-gradient-to-b from-dark/0 via-dark/70 to-dark/0 text-light'>
				<div className='grid gap-4 text-center tracking-widest '>
					<AnimatePresence>
						<h1 className='text-5xl md:text-7xl font-robotoslab text-white text-left'>
							<motion.div
								variants={container}
								initial='hidden'
								whileInView='show'
								exit='exit'
								className='flex  flex-wrap  '
							>
								{phrase.map((word) => (
									<motion.span key={word} variants={item} className='mx-2'>
										{word}
									</motion.span>
								))}
							</motion.div>
						</h1>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default FrameAnythingHero;