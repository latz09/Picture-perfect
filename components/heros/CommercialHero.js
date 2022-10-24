import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import hero from '../../public/images/corporate/commercial-services.png';

const CommercialHero = () => {
	return (
		<div className='relative w-[100vw] h-[60vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='left'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='grid gap-4 text-center justify-items-center tracking-widest text-gray-200'>
					<h1 className='text-3xl md:text-6xl font-robotoslab text-white'>
						Commercial Services
					</h1>
					<div className=' text-lg md:text-2xl text-gray-200 tracking-wider '>
						<span className='text-white underline underline-offset-8 decoration-red-500'>
							{' '}
							Competitevely priced{' '}
						</span>
						to impress your clients and inspire your staff
					</div>
					<span className='text-5xl text-red-500 animate-pulse '>
						<MdKeyboardArrowDown />{' '}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CommercialHero;
