import Image from 'next/image';
import Link from 'next/link';

const FramingTemplate = ({
	title,
	heading,
	image,
	imageDescription,
	alt,
	link,
	linkTitle,
}) => {
	return (
		<div className='grid md:grid-cols-2 justify-items-center items-center text-gray-700 py-9 mx-4'>
			<div className="w-1/2">
				<div className='grid gap-3 tracking-wide '>
					<h1 className='text-5xl '>{title}</h1>
					<p className='text-gray-500 text-lg font-rubik'>{heading}</p>
					<Link href={link}>
						<span className='cursor-pointer p-2 bg-red-500 text-center text-white tracking-wider text-lg hover:opacity-75 transition duration-700 mt-5'>
							{linkTitle}
						</span>
					</Link>
				</div>
			</div>
			<div className='m-20 shadow-lg grid gap-2'>
				<Image src={image} alt={alt} layout='intrinsic' />
				<span className='text-center text-sm md:text-base font-rubik text-gray-500 py-2'>
					{imageDescription}
				</span>
			</div>
		</div>
	);
};

export default FramingTemplate;
