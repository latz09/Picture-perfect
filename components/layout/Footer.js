import Hours from "../contact/Hours";
import ContactInfo from "../contact/ContactInfo";
import Newsletter from "../contact/Newsletter";

const Footer = () => {
	return (
		<div className='grid gap-6 justify-center md:grid-cols-3 md:place-items-center  px-3 pb-12 bg-gray-200'>
			<Hours />

			<ContactInfo />
			<Newsletter />
		</div>
	);
};

export default Footer;
