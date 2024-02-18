import { AiFillPhone } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactInfo = () => {
	return (
		<div className='grid gap-2 place-items-center'>
			<div className='flex space-x-3 items-center'>
				<a href="tel:(651) 455-7595" className='flex space-x-3 items-center'>
					<span className='text-xl text-gray-400'>
						<AiFillPhone />
					</span>
					<span>{`(651) 455-7595`}</span>
				</a>
			</div>
			
			<div className='flex space-x-3 items-center'>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.facebook.com/pictureperfectartandframe'
					className='flex space-x-3 items-center text-xl text-[#4267B2]'
				>
					<BsFacebook />
					<span>Follow us on Facebook!</span>
				</a>
			</div>
		</div>
	);
};

export default ContactInfo;


{/* <div className='text-2xl font-bold py-8 text-center' onClick={toggleMenu}>
<Link href='/'>
	<a className='font-tinos'>Home</a>
</Link>
</div> */}