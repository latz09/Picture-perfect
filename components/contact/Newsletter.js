const Newsletter = () => {
	return (
		<form>
			<div className='grid gap-2'>
				
				<input
					type='email'
					placeholder='email..'
					className='border-2 border-gray-300 p-2'
				/>
				<button className="bg-red-500 p-3 text-white font-bold hover:bg-opacity-60 transition duration-700 shadow-lg">Sign up for our newsletter!</button>
			</div>
		</form>
	);
};

export default Newsletter;
