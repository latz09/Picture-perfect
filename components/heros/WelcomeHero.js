import Image from 'next/image';
import hero from '../../public/images/front-of-building2.jpg';
import { motion } from 'framer-motion';

const WelcomeHero = () => {
	const delayVariant = {
		hidden: { opacity: 0, x: '-100vw' },
		visible: {
			opacity: 1,
			x: 1,
			transition: {
				delay: 0.5,
				duration: 1.9,
			},
		},
	};

	return (
		<div className='relative  h-[50vh] lg:h-[80vh] z-10'>
			<Image
				src={hero}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='bottom'
			/>

			<div className='relative flex justify-center items-center h-full bg-gradient-to-t from-dark/0 via-dark/60 to-dark/0 px-2 '>
				<div className='grid gap-1   '>
				
					<h1 className='text-4xl md:text-7xl  text-light font-tinos text-center font-bold px-2 md:px-0'>{`Picture Perfect Art & Frame`}</h1>
					<motion.div
						variants={delayVariant}
						initial='hidden'
						animate='visible'
						className=' text-xl md:text-2xl  text-center text-light'
					>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: .3, duration: 1.2 }}
						>
							Designing the Perfect Framing to Suit Your Style and Budget
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 1.2 }}
							className="italic mt-6"
						>
							West Saint Paul, MN
						</motion.p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHero;
