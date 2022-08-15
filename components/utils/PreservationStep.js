import Image from 'next/image';

const PreservationStep = ({ step, image, description }) => {
	return (
		<div>
			<h1>{step}</h1>
			<div>
				<Image src={image} alt={step} layout='intrinsic' height={400} width={300} />
			</div>
			<span>{description}</span>
		</div>
	);
};

export default PreservationStep;
