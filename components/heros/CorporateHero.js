import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/corporate/office.jpg';

const CorporateHero = () => {
	return (
		<div className='relative w-[100vw] h-[40vh] md:h-[70vh]'>
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
				<div className='grid gap-4 text-center tracking-widest text-gray-200'>
					<h1 className='text-3xl md:text-6xl font-robotoslab text-white'>
						Commercial Services
					</h1>
					<span className=' text-lg md:text-2xl text-gray-300 '>
						elegantly framed artwork your clients can enjoy
					</span>
					<Link href={'/commercial-services'}>
						<div>
							<button className='bg-red-500 p-4 hover:bg-opacity-75 transition duration-700 text-xl'>Learn More</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CorporateHero;
