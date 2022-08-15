const Hours = () => {
	return (
		<div className='tracking-wide text-gray-600'>
			<h1 className='text-3xl my-3 tracking-widest'>Hours</h1>
			<div className='grid grid-cols-2 gap-3 '>
				<div className='grid '>
					<span className='font-bold text-gray-700'>Sunday / Monday:</span>
					<span>Closed</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Tuesday:</span>
					<span>10:00-6:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Wednesday:</span>
					<span>10:00-6:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Thursday:</span>
					<span>10:00-8:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Friday:</span>
					<span>10:00-6:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Saturday:</span>
					<span>10:00-4:00</span>
				</div>
			</div>
		</div>
	);
};

export default Hours;
