import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';
import { servicesData } from '../../data/commercialServicesData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WholeSalePricing = () => {
	return (
		<div className='pb-4 md:py-12'>
			<div className='grid lg:grid-cols-2 gap-16 lg:gap-32 order-2 md:order-1'>
				{servicesData.map((service, index) => (
					<WhileInView key={index}>
						<motion.div
							className='grid gap-4 place-items-center'
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: index * 0.2 }}
						>
							<h1 className='text-3xl font-black md:text-4xl font-tinos'>
								{service.title}
							</h1>
							<div>
								<Image
									src={service.image}
									alt={service.title}
									height={100}
									width={100}
								/>
							</div>
							<p className='text-center text-lg lg:text-xl  leading-8 lg:leading-9 lg:mx-8 py-4'>
								{service.description}
							</p>
							{service.link && (
								<Link href={service.link}>
									<div className='mt-2'>
										<button className='text-primary font-bold border border-primary rounded-sm px-6 py-2 shadow-lg'>
											{service.linkText}
										</button>
									</div>
								</Link>
							)}
						</motion.div>
					</WhileInView>
				))}
			</div>
		</div>
	);
};

export default WholeSalePricing;
