const Hours = () => {
	return (
		<div className='grid place-items-center'>
			<h1 className='text-3xl mb-4  text-primary font-tinos'>Hours</h1>
			<div className='grid grid-cols-2 gap-4 place-items-center text-center '>
				<div className='grid '>
					<span className='font-bold text-gray-700'>Sunday & Monday</span>
					<span>Closed</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Tuesday</span>
					<span>10:00-6:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Wednesday</span>
					<span>10:00-6:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Thursday</span>
					<span>10:00-8:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Friday</span>
					<span>10:00-6:00</span>
				</div>
				<div className='grid'>
					<span className='font-bold text-gray-700'>Saturday</span>
					<span>10:00-4:00</span>
				</div>
			</div>
		</div>
	);
};

export default Hours;
