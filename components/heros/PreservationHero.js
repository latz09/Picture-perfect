import Image from 'next/image';
import hero from '../../public/images/preservation/step-4.jpg';

const Preservationhero = () => {
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
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-70 px-3'>
				<div className='grid gap-4 text-left tracking-widest text-gray-200 items-center justify-items-center'>
					<h1 className='text-5xl font-rubik text-white text-center'>
						Preservation process
					</h1>
					<div className='mx-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
						nunc non blandit massa.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preservationhero;
