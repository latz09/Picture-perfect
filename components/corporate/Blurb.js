import { MdOutlineCorporateFare } from 'react-icons/md';

const Blurb = () => {
	return (
		<div className="max-w-3xl mx-auto  ">
			<div className='py-12 grid gap-2 md:grid-cols-4 items-center mx-2'>
				<div className='text-5xl text-red-500'>
					<MdOutlineCorporateFare />
				</div>
				<p className='col-span-3 tracking-wide md:tracking-wider leading-7 text-justify text-gray-600'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis
					at erat pellentesque adipiscing commodo. Aenean euismod elementum nisi
					quis eleifend quam adipiscing vitae. Est placerat in egestas erat
					imperdiet sed.
				</p>
			</div>
		</div>
	);
};

export default Blurb;
