import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';
import { servicesData } from '../../data/commercialServicesData';
import Image from 'next/image';

const WholeSalePricing = () => {
	return (
		<div className='pb-4 md:py-12'>
			<div className='grid lg:grid-cols-3 gap-16 order-2 md:order-1'>
				{servicesData.map((service, index) => (
					<WhileInView key={index}>
						<div className='grid gap-4 place-items-center'>
							<h1 className='text-2xl md:text-3xl font-tinos'>
								{service.title}
							</h1>
							<div>
								<Image src={service.image} alt={service.title}
									height={100} width={100}
								/>
							</div>
							<p className='text-center'>{service.description}</p>
							{service.link && (
								<Link href={service.link}>
									<div className='mt-2'>
										<button className='text-primary font-bold border border-primary rounded p-2 shadow-lg'>
											{service.linkText}
										</button>
									</div>
								</Link>
							)}
						</div>
					</WhileInView>
				))}
			</div>
		</div>
	);
};

export default WholeSalePricing;
