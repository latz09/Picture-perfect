import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';

const RecentWorkhero = ({ image, heading, subheading, recentWorkHeading }) => {
	return (
		<div className='relative w-full text-dark flex flex-col lg:grid lg:grid-cols-5'>
			{/* For screen sizes below 'lg' */}
			<div className='block lg:hidden'>
				<div className='flex-shrink-0'>
					<Image
						src={image}
						alt='hero'
						className='w-full h-[16rem] object-cover'
						priority
						width={500}
						height={500}
					/>
				</div>
				<div className='bg-dark flex flex-col justify-between flex-grow px-4 pt-8 pb-12 text-light'>
					<div className='flex flex-col gap-2 justify-center h-full text-left'>
						<h1 className='text-2xl font-bold'>{heading}</h1>
						<h2 className='text-lg leading-8 mt-2'>{subheading}</h2>
					</div>
				</div>
			</div>
			{/* For screen sizes 'lg' and above */}
			<div className='hidden lg:flex lg:col-span-3 bg-dark flex-col justify-between px-20 py-16 relative text-light'>
				<div className='flex flex-col gap-2 lg:gap-4 justify-center h-full max-w-7xl mx-auto px-4 text-left'>
					<h1 className='text-4xl xl:text-5xl font-bold'>{heading}</h1>
					<h2 className='text-xl xl:text-2xl mt-2 leading-7'>{subheading}</h2>
				</div>
				<div className='absolute bottom-3 right-3 text-light flex items-center gap-3 m-2'>
					<span className='font-bold'>{recentWorkHeading}</span>
					<FaArrowDown className='text-2xl animate-bounce text-primary' />
				</div>
			</div>
			<div className='hidden lg:block lg:col-span-2'>
				<Image
					src={image}
					alt='hero'
					className='w-full h-full object-cover'
					priority
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
};

export default RecentWorkhero;
