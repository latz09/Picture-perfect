import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/corporate/office.jpg';
import WhileInView from '../utils/animations/WhileInView';
import { AnimatePresence, motion } from 'framer-motion';

const CorporateHero = () => {
	return (
		<div className='relative w-[100vw] h-[80vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<AnimatePresence>
					<div className='grid gap-4 text-center tracking-widest text-gray-200'>
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.3, delay: 0.3 }}
							exit={{ opacity: 0 }}
							className='text-3xl md:text-6xl font-robotoslab text-white'
						>
							Commercial Services
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5, delay: .7 }}
							exit={{ opacity: 0 }}
							className=' text-lg md:text-2xl text-gray-300 '
						>
							elegantly framed artwork your clients can enjoy
						</motion.p>
						<Link href={'/commercial-services'}>
							<div>
								<button className='bg-red-500 p-4 hover:bg-opacity-75 transition duration-700 text-xl'>
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
