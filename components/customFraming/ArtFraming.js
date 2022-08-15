import prince from '../../public/images/not-to-big/prince.jpg';
import FramingTemplate from '../utils/FramingTemplate';

const ArtFraming = () => {
	return (
		<FramingTemplate
			title='Art Framing'
			heading='Framing anything from Posters to Fine Art'
			image={prince}
			imageDescription='No Job is too big, as this original of Prince by Garibaldi demonstrates'
            alt='framed painting of Prince'
			linkTitle='LearnMore'
			link='/'
		/>
	);
};

export default ArtFraming;
