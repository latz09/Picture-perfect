import { FaArrowDown } from 'react-icons/fa';
import { RecentPiece } from './RecientPiece';

const RecentWorks = ({ data, heading }) => {
	return (
		<div className='max-w-5xl mx-auto  grid gap-8'>
			<div className='font-bold font-tinos text-dark text-center text-xl lg:text-2xl lg:hidden grid place-items-center '>
				<div className='flex gap-2 items-center '>
					<span>{heading}</span>
					<FaArrowDown className='text-2xl animate-bounce text-primary ' />
				</div>
			</div>
			<div className=' grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 px-4 py-8 lg:py-12'>
				{data.map((piece, index) => (
					<RecentPiece
						key={index}
						image={piece.image}
						title={piece.title}
						description={piece.description}
					/>
				))}
			</div>
		</div>
	);
};

export default RecentWorks;
