import Link from 'next/link';
import Hours from '../contact/Hours';
import ContactInfo from '../contact/ContactInfo';
import Address from '../contact/Address';

const Footer = () => {
	return (
		<>
			<div className='grid gap-6 justify-center md:grid-cols-3 md:place-items-center  px-3 pt-24 pb-12 max-w-5xl mx-auto '>
				<Hours />
				<div className='grid gap-2  h-full w-full md:justify-center md:items-center font-semibold font-tinos'>
					<div className='grid place-items-center gap-3'>
						<Link href={'/'}>
							<span className='cursor-pointer hover:text-gray-800'>Home</span>
						</Link>
						<Link href={'/about-us'}>
							<span className='cursor-pointer hover:text-gray-800'>
								About Us
							</span>
						</Link>
						<Link href={'/custom-framing'}>
							<span className='cursor-pointer hover:text-gray-800'>
								Custom-Framing
							</span>
						</Link>
						<Link href={'/commercial-services'}>
							<span className='cursor-pointer hover:text-gray-800'>
								Commercial Services
							</span>
						</Link>
					</div>
					<div className='justify-self-center mt-8 font-questrial font-normal'>
						<ContactInfo />
					</div>
				</div>
				<Address />
			</div>
			<CopyRight />
		</>
	);
};

export default Footer;

const CopyRight = () => {
	// Get the current year
	const currentYear = new Date().getFullYear();

	return (
		<div className='text-center mb-3 mt-2 px-2'>
			<a
				href='https://www.latzwebdesign.com'
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center justify-center gap-2 font-tinos text-[#001D20]'
			>
				<p>
					© {currentYear} by Picture Perfect Art & Frame. Handcrafted with care by{' '}
					<span className='font-bold font-questrial'>LatzWebDesign.</span>
				</p>
			</a>
		</div>
	);
};
