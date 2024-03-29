import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/corporate/commercial-services.png';

import { AnimatePresence, motion } from 'framer-motion';

const CorporateHero = () => {
	return (
		<div className='relative h-[80vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div className='relative flex justify-center items-center  bg-dark/80 h-full'>
				<AnimatePresence>
					<div className='grid gap-1 text-center tracking-widest text-light'>
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.3, delay: 0.3 }}
							exit={{ opacity: 0 }}
							className='text-3xl md:text-6xl font-tinos max-w-4xl mx-auto '
						>
							Comprehensive Commercial Framing Services
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5, delay: .7 }}
							exit={{ opacity: 0 }}
							className=' text-lg md:text-2xl text-gray-300 px-4'
						>
							From Small Projects to Government-Scale Endeavors
						</motion.p>
						<Link href={'/commercial-services'}>
							<div className="mt-8">
								<button className='btn-primary'>
									Learn More
								</button>
							</div>
						</Link>
					</div>
				</AnimatePresence>
			</div>
		</div>
		
	);
};

export default CorporateHero;
