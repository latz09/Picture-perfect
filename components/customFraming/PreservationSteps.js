import { preservationImages } from '../../data/preservation';
import PreservationStep from '../utils/PreservationStep';

const PreservationSteps = () => {
	return (
		<div className='grid gap-4 max-w-7xl mx-auto my-8 text-gray-700'>
			<h1 className='text-5xl text-center'>Preservation Framing</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 mx-2 justify-items-center">
			{preservationImages.map((item) => (
				<div key={item.title}>
					<PreservationStep step={item.title} image={item.image} />{' '}
                    <span className="p-4 text-center">{item.description}</span>
				</div>
			))}
            </div>
		</div>
	);
};

export default PreservationSteps;
