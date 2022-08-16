const Form = () => {
	return (
		<form className='grid gap-4 tracking-wider'>
			<input
				type='text'
				name='name'
				id='name'
				placeholder='Name'
				className='w-full  border border-gray-700 bg-gray-100 py-3 px-6 text-base text-gray-700] outline-none focus:shadow-md focus:ring-gray-600 focus:bg-gray-50'
			/>
			<input
				type='email'
				name='email'
				id='email'
				placeholder='Email'
				className='w-full  border border-gray-700 bg-gray-100 py-3 px-6 text-base text-gray-700] outline-none  focus:shadow-md focus:ring-gray-600 focus:bg-gray-50'
			/>
			<textarea
				rows='6'
				name='message'
				id='message'
				placeholder='Type your message'
				className='w-full  border border-gray-700 bg-gray-100 py-3 px-6 text-base text-gray-700] outline-none  focus:shadow-md focus:ring-gray-600 resize-none focus:bg-gray-50'
			></textarea>
			<div>
				<button className=' bg-red-500 py-3 px-8 text-base font-rubik  text-white outline-none hover:bg-opacity-70 transition duration-700'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
