import Image from 'next/image';
import hero from '../../public/images/picture-framing.jpg';
import { motion } from 'framer-motion';

const WelcomeHero = () => {
	const delayVariant = {
		hidden: { opacity: 0,  },
		visible: {
			opacity: 1,
		
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
  fill
  style={{
    objectFit: 'cover',
    objectPosition: 'bottom'
  }}
  priority
/>

			<div className='relative flex justify-center items-center h-full bg-gradient-to-t from-dark/0 via-dark/80 to-dark/0 px-4 '>
				<div className='grid gap-2  bg-gradient-to-b from-dark/0 via-dark/60 to-dark/0 '>
				
					<h1 className='text-4xl md:text-7xl  text-light font-tinos text-center font-bold px-2 md:px-0'>{`Picture Perfect Art & Frame`}</h1>
					<motion.div
						variants={delayVariant}
						initial='hidden'
						animate='visible'
						className=' text-xl md:text-3xl lg:text-4xl  text-center text-light '
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
							className=" mt-4 lg:mt-8 text-2xl md:text-3xl "
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
