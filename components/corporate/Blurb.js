import { MdOutlineCorporateFare } from 'react-icons/md';
import WhileInView from '../utils/animations/WhileInView';

const Blurb = () => {
	return (
		<WhileInView>
			<p className='max-w-3xl mx-auto text-center leading-8 lg:leading-10'>
				<span className='text-lg lg:text-2xl '>
					Delve into a world where each frame tells a story and every service is
					tailored to perfection. At{' '}
					<span className='text-primary font-bold font-tinos'>
						Picture Perfect Art & Frame
					</span>
					, we go beyond mere framing; we offer a holistic suite of services
					designed to meet a wide array of needs, from individual art lovers to
					large-scale commercial projects. Our commitment to quality, combined
					with competitive pricing and personalized service, ensures your
					framing experience is unmatched. 
				</span>
			</p>
		</WhileInView>
	);
};

export default Blurb;
