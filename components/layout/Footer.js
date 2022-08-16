import Link from 'next/link';
import Hours from '../contact/Hours';
import ContactInfo from '../contact/ContactInfo';
import Newsletter from '../contact/Newsletter';

const Footer = () => {
	return (
		<div className='grid gap-6 justify-center md:grid-cols-3 md:place-items-center  px-3 pb-12 bg-gray-200'>
			<Hours />
			<div className='grid gap-5  h-full w-full md:justify-center md:items-center'>
			
				<div className='flex space-x-4 text-gray-600'>
					<Link href={'/'}>
						<span className='cursor-pointer hover:text-gray-800'>Home</span>
					</Link>
					<Link href={'/custom-framing'}>
						<span className='cursor-pointer hover:text-gray-800'>
							Custom-Framing
						</span>
					</Link>
					<Link href={'/contact-us'}>
						<span className='cursor-pointer hover:text-gray-800'>Contact</span>
					</Link>
				</div>
				<div className='justify-self-center mt-8'>
					<ContactInfo />
				</div>
			</div>
			<Newsletter />
		</div>
	);
};

export default Footer;
