import FramingTemplate from '../utils/FramingTemplate';
import comic from '../../public/images/preservation/step-4.jpg';

const Preservation = () => {
	return (
		<FramingTemplate
			image={comic}
			title='Preservation Framing'
			heading='Display special items without causing damage to the value'
            alt='framed comic book'
            imageDescription='Keep your treasured items out of hiding and up on the wall where you can enjoy them every day'
        
		/>
	);
};

export default Preservation;
