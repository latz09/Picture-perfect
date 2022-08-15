import FramingTemplate from '../utils/FramingTemplate';
import jersey from '../../public/images/jersey.jpg';

const JerseyFraming = () => {
	return (
		<div id='jersey'>
			<FramingTemplate
				title='Jersey Framing'
				link='/'
				linkTitle='Learn More'
				heading='Display your favorite team in style'
				image={jersey}
				alt='A framed Green Bay Packer Jersey'
				imageDescription='Display your favorite team in style'
			/>
		</div>
	);
};

export default JerseyFraming;
