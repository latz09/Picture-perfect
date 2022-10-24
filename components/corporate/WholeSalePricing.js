import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';

const WholeSalePricing = () => {
	return (
		<div className='pb-4 md:py-12'>
			<div className='grid gap-3 md:grid-cols-3 items-center text-gray-500 mx-2'>
				<div className='col-span-2 grid gap-5 order-2 md:order-1'>
					<WhileInView>
						<div className='grid gap-3 bg-gray-100 p-3 shadow-md'>
							<h1 className='text-2xl md:text-3xl text-gray-600'>
								Whole Sale Pricing{' '}
							</h1>
							<p className='text-justify'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. A
								iaculis at erat pellentesque adipiscing commodo. Aenean euismod
								elementum nisi quis eleifend quam adipiscing vitae. Est placerat
								in egestas erat imperdiet sed.
							</p>
						</div>
					</WhileInView>
					<WhileInView>
						<div className='grid gap-3 bg-gray-100 p-3 shadow-md'>
							<h1 className='text-2xl md:text-3xl text-gray-600'>
								Delivery and installation{' '}
							</h1>
							<p className='text-justify'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. A
								iaculis at erat pellentesque adipiscing commodo. Aenean euismod
								elementum nisi quis eleifend quam adipiscing vitae. Est placerat
								in egestas erat imperdiet sed.
							</p>
						</div>
					</WhileInView>
					<WhileInView>
						<div className='grid gap-3 bg-gray-100 p-3 shadow-md'>
							<h1 className='text-2xl md:text-3xl text-gray-600'>
								Custom Framing
							</h1>
							<p className='text-justify'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. A
								iaculis at erat pellentesque adipiscing commodo. Aenean euismod
								elementum nisi quis eleifend quam adipiscing vitae. Est placerat
								in egestas erat imperdiet sed.
							</p>
							<Link href={'/custom-framing'}>
								<div className='mt-2'>
									<button className='bg-red-500 p-4 hover:bg-opacity-75 transition duration-700 text-lg text-white'>
										Custom Framing
									</button>
								</div>
							</Link>
						</div>
					</WhileInView>
				</div>
				<div className='order-1 md:order-2 mx-3 md:justify-self-center'>
					<h1 className='text-3xl md:text-4xl text-red-500 tracking-widest'>
						Services
					</h1>
				</div>
			</div>
		</div>
	);
};

export default WholeSalePricing;
