import FramingTemplate from '../utils/FramingTemplate';
import jersey from '../../public/images/jersey.jpg';

const JerseyFraming = () => {
	return (
		
			<FramingTemplate
				title='Jersey Framing'
				link='/custom-framing'
				linkTitle='Learn More'
				heading='Display your favorite team in style'
				image={jersey}
				alt='A framed Green Bay Packer Jersey'
				imageDescription='Display your favorite team in style'
			/>
		
	);
};

export default JerseyFraming;
