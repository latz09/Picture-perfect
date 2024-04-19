import Link from 'next/link';
import WhileInView from '../utils/animations/WhileInView';


const CustomMade = () => {
	return (
		<div className='  bg-dark py-16 lg:py-24 text-light px-4'>
			<WhileInView>
				<div className='grid gap-6 max-w-5xl mx-auto'>
					<div>
						<h1 className='font-tinos text-3xl lg:text-5xl'>
							Each Frame is custom made
						</h1>
						<p className=' text-primary text-xl lg:text-3xl'>Just for You</p>
					</div>
					<p className='lg:w-3/5 leading-7 lg:text-lg'>
						From art and memorabilia to jerseys and heirlooms, our framing is as
						unique as your treasures. We combine craftsmanship with care to turn
						your valued items into prominent displays, ensuring each piece tells
						its story elegantly and safely.
					</p>
					<div className='mt-4'>
						<Link href='/custom-framing'>
							<span className='btn-secondary'>Learn More</span>
						</Link>
					</div>
				</div>
			</WhileInView>
		</div>
	);
};

export default CustomMade;
