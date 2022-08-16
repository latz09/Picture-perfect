import Image from 'next/image';
import step1 from '../../public/images/preservation/step-1.jpg';
import step2 from '../../public/images/preservation/step-2.jpg';
import step3 from '../../public/images/preservation/step-3.jpg';
import step4 from '../../public/images/preservation/step-4.jpg';
import WelcomeHero from '../../components/heros/WelcomeHero';

const PreservationSteps = () => {
	return (
		<div className='grid border-b border-gray-700 border-opacity-40'>
			<div className='py-12'>
				<div className='grid gap-8 md:grid-cols-2 justify-items-center items-center max-w-5xl mx-auto '>
					<div className='shadow-lg order-2 md:order-1'>
						<Image
							src={step1}
							alt=''
							width={300}
							height={350}
							layout='intrinsic'
						/>
					</div>
					<div className='grid gap-4 order-1 md:order-2 px-4'>
						<span className='text-red-500 text-5xl font-rubik tracking-wider'>
							First
						</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
							quam nulla porttitor massa id neque aliquam vestibulum morbi.
						</p>
					</div>
				</div>
			</div>
			<div className='bg-gray-50 py-12'>
				<div className='grid gap-8 md:grid-cols-2 justify-items-center items-center max-w-5xl mx-auto '>
					<div className='grid gap-4 px-4'>
						<span className='text-red-500 text-5xl font-rubik'>next</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
							quam nulla porttitor massa id neque aliquam vestibulum morbi.
						</p>
					</div>
					<div className='shadow-lg '>
						<Image
							src={step2}
							alt=''
							width={300}
							height={350}
							layout='intrinsic'
						/>
					</div>
				</div>
			</div>
			<div className='bg-gray-200 py-12'>
				<div className='grid gap-8 md:grid-cols-2 justify-items-center items-center max-w-5xl mx-auto '>
					<div className='shadow-lg order-2 md:order-1'>
						<Image
							src={step3}
							alt=''
							width={300}
							height={350}
							layout='intrinsic'
						/>
					</div>
					<div className='grid gap-4 order-1 md:order-2 px-4'>
						<span className='text-red-500 text-5xl font-rubik'>then</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
							quam nulla porttitor massa id neque aliquam vestibulum morbi.
						</p>
					</div>
				</div>
			</div>
			<div className='bg-gray-50 py-12'>
				<div className='grid gap-8 md:grid-cols-2 justify-items-center items-center max-w-5xl mx-auto '>
					<div className='grid gap-4 px-4'>
						<span className='text-red-500 text-5xl font-rubik'>Finally</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
							quam nulla porttitor massa id neque aliquam vestibulum morbi.
						</p>
					</div>
					<div className='shadow-lg '>
						<Image
							src={step4}
							alt=''
							width={300}
							height={350}
							layout='intrinsic'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreservationSteps;
