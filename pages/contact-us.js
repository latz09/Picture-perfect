import ContactInfo from '../components/contact/ContactInfo';
import Form from '../components/contact/Form';
import Hours from '../components/contact/Hours';

const ContactUs = () => {
	return (
		<div className='grid md:grid-cols-2 max-w-7xl mx-auto my-12 justify-items-center items-center'>
			<div className='grid gap-8 order-2 md:order-1'>
				<Hours />
				<div className='grid gap-4'>
					{/* <h1 className="text-3xl">Contact Info</h1> */}
					<ContactInfo />
				</div>
			</div>
			<div className='grid gap-8 justify-items-center order-1 md:order-2'>
				<h1 className='text-4xl tracking-wider text-gray-600'>Questions</h1>
				<Form />
				<p className='text-xl  text-gray-600  tracking-widest mx-3 my-4'>
					If you would prefer a{' '}
					<span className='text-red-500'>
						{' '}
						private after hours appointment{' '}
					</span>{' '}
					we are happy to accommodate you with that as well!
				</p>
			</div>
		</div>
	);
};

export default ContactUs;
