import { ImLocation2 } from 'react-icons/im';

const Address = () => {
	return (
		<div className='grid gap-1 place-items-center text-2xl text-gray-600'>
			<span className="text-red-500 text-3xl py-2">
				<ImLocation2 />{' '}
			</span>
			<span>898 Smith Avenue South</span>
			<span>West Saint Paul, MN 55118</span>
		</div>
	);
};

export default Address;
