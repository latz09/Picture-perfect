import Image from 'next/image';
import Link from 'next/link';
import WhileInView from './animations/WhileInView';
import { motion } from 'framer-motion';

const FramingTemplate = ({
	title,
	heading,
	image,
	imageDescription,
	alt,
	link,
	linkTitle,
}) => {
	return (
		<div className='grid md:grid-cols-2 justify-items-center items-center text-gray-700 py-9 mx-4'>
			<div className=''>
				<WhileInView>
					<div className='grid gap-1 tracking-wide '>
						<h1 className='text-3xl md:text-5xl '>{title}</h1>
						<p className='text-gray-500 text-lg md:text-xl '>{heading}</p>
						<p className='mt-6 text-gray-600'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
							malesuada pellentesque elit eget gravida cum sociis natoque. Eget
							nullam non nisi est sit amet facilisis magna etiam. Semper eget
							duis at tellus at urna condimentum mattis.
						</p>
						<div className='my-4'>
							<Link href={link}>
								<span className='cursor-pointer px-4 py-2 shadow-lg bg-red-500 text-center text-white tracking-wider text-lg hover:opacity-75 transition duration-700 mt-5'>
									{linkTitle}
								</span>
							</Link>
						</div>
					</div>
				</WhileInView>
			</div>
			<div className=' py-5 md:p-16'>
				<div className='shadow-lg grid gap-2 '>
					<Image src={image} alt={alt} layout='intrinsic' />
					<motion.p
						className='md:text-center text-base md:text-lg font-bold text-gray-500 py-6 px-2'
						initial={{ opacity: 0, x: '20px' }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 1.3 }}
					>
						{imageDescription}
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default FramingTemplate;
