import Link from 'next/link';
import Hours from '../contact/Hours';
import ContactInfo from '../contact/ContactInfo';
import Address from '../contact/Address';

const Footer = () => {
	return (
		<div className='grid gap-6 justify-center md:grid-cols-3 md:place-items-center  px-3 py-24 max-w-5xl mx-auto '>
			<Hours />
			<div className='grid gap-2  h-full w-full md:justify-center md:items-center font-semibold font-tinos'>
			
				<div className='grid place-items-center gap-3'>
					<Link href={'/'}>
						<span className='cursor-pointer hover:text-gray-800'>Home</span>
					</Link>
					<Link href={'/about-us'}>
						<span className='cursor-pointer hover:text-gray-800'>About Us</span>
					</Link>
					<Link href={'/custom-framing'}>
						<span className='cursor-pointer hover:text-gray-800'>
							Custom-Framing
						</span>
					</Link>
					<Link href={'/commercial-services'}>
						<span className='cursor-pointer hover:text-gray-800'>Commercial</span>
					</Link>
				</div>
				<div className='justify-self-center mt-8 font-questrial font-normal'>
					<ContactInfo />
				</div>
			</div>
			<Address />
		</div>
	);
};

export default Footer;
