import FramingTemplate from '../utils/FramingTemplate';
import marathon from '../../public/images/memorabilia/marathon.jpg';

const Memorabilia = () => {
	return (
		<FramingTemplate
			title='Memorabilia'
			heading='Keep your treasured items displayed, not tucked away'
			image={marathon}
			alt='image of a marathon runners medal framed'
			imageDescription='Display your accomplishments'
			linkTitle='Learn More'
			link='/custom-framing'
		/>
	);
};

export default Memorabilia;
