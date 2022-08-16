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
			<div className=''>
				<div className='grid gap-1 tracking-wide '>
					<h1 className='text-3xl md:text-5xl '>{title}</h1>
					<p className='text-gray-500 text-lg md:text-xl '>{heading}</p>
					<p className='mt-6 text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
						malesuada pellentesque elit eget gravida cum sociis natoque. Eget
						nullam non nisi est sit amet facilisis magna etiam. Semper eget duis
						at tellus at urna condimentum mattis.
					</p>
					<div className="my-4">
						<Link href={link}>
							<span className='cursor-pointer px-4 py-2 shadow-lg bg-red-500 text-center text-white tracking-wider text-lg hover:opacity-75 transition duration-700 mt-5'>
								{linkTitle}
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className='p-20'>
				<div className='shadow-lg grid gap-2 '>
					<Image src={image} alt={alt} layout='intrinsic' />
					<span className='text-center text-sm md:text-base text-gray-500 py-2'>
						{imageDescription}
					</span>
				</div>
			</div>
		</div>
	);
};

export default FramingTemplate;
