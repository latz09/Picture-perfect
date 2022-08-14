import Image from 'next/image';

const FeaturedItem = ({ image, title }) => {
	return (
		<div className="grid gap-5 justify-items-center">
			<div className="text-xl md:text-3xl text-red-500 tracking-widest">{title}</div>
			<div className="shadow-lg">
				<Image src={image} alt={title} height={350} width={300} />
			</div>
		</div>
	);
};

export default FeaturedItem;
