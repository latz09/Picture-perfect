import Link from 'next/link';
import { AiFillPhone } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactInfo = () => {
	return (
		<div className='grid gap-3 tracking-wide'>
			<div className='flex space-x-3 items-center'>
				<span className='text-xl text-gray-400'>
					<AiFillPhone />{' '}
				</span>
				<span>{`(651) 455-7595`}</span>{' '}
			</div>
			<div className='flex space-x-3 items-center'>
				<span className='text-xl text-red-500'>
					<MdEmail />{' '}
				</span>
				<span>{`info@pictureperfectmn.com`}</span>{' '}
			</div>
			<div className='flex space-x-3 items-center'>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.facebook.com/pictureperfectartandframe/photos'
					className='text-xl text-[#4267B2]'
				>
					<BsFacebook />{' '}
				</a>
				<span>Follow us on facebook!</span>{' '}
			</div>
		</div>
	);
};

export default ContactInfo;
