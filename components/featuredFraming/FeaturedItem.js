import Image from 'next/image';

const FeaturedItem = ({ image, title }) => {
	return (
		<div>
			<div className='relative text-center grid'>
				<Image src={image} alt={title} height={340} width={300} />

				<div className='absolute bottom-0  bg-black bg-opacity-60 px-1 md:px-2 md:py-3'>
					<h1 className=' text-lg md:text-xl  tracking-wide text-white'>
						{title}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
