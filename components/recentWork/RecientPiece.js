'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaExpandAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const RecentPiece = ({ image, title, description }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden'; // Prevent background scroll
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'auto'; // Re-enable background scroll
	};

	const handleModalClick = (e) => {
		closeModal();
	};

	useEffect(() => {
		return () => {
			document.body.style.overflow = 'auto'; // Cleanup in case modal is unmounted while open
		};
	}, []);

	return (
		<>
			<motion.div
				className='h-full relative flex flex-col justify-between border border-primary/20 rounded-sm bg-primary/5 shadow cursor-pointer'
				onClick={openModal}
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<FaExpandAlt className='absolute top-2 right-2 text-primary/60 text-xl m-2' />
				<div className='p-16 relative  h-full grid place-items-center'>
					<Image
						src={image}
						alt='recent piece'
						width={200}
						height={200}
						className='rounded shadow-lg shadow-primary/20'
						priority
					/>
				</div>
				<div className='grid gap-1 p-4 border-t border-primary/40 '>
					<h1 className='font-bold '>{title}</h1>
					<p className='text-sm'>{description}</p>
				</div>
			</motion.div>
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className='backdrop-blur-sm fixed inset-0 bg-dark/50 flex justify-center items-center z-[9999] modal-overlay cursor-pointer'
						onClick={handleModalClick}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className='relative bg-white p-4 rounded-sm'
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
						>
							<button
								className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 text-light font-bold p-2 bg-primary/70 flex items-center justify-center rounded-full shadow-lg shadow-primary/40'
								onClick={closeModal}
							>
								<FaArrowLeft />
							</button>
							<Image
								src={image}
								alt='Selected piece'
								width={400}
								height={400}
								className='mt-8 shadow-xl'
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
