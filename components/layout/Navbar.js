import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { navLinks } from '../../data/navLinks';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};

	const dropDownVariant = {
		hidden: { y: '-70px', opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		exit: { y: '-100vh', transition: { duration: 1 } },
	};

	return (
		<nav className='text-white py-1 tracking-wider '>
			<div className='max-w-7xl mx-auto flex justify-between items-center px-8 z-10  '>
				<button className='py-1' onClick={closeMenu}>
					<Link href={'/'}>
						<a className='text-3xl hover:opacity-70 transition duration-700'>
							<div className='grid gap-1 place-items-center'>
								<AiFillHome />
								<span className='text-gray-200 text-lg'>{`(651) 455-7595`}</span>
							</div>
						</a>
					</Link>
				</button>

				<div className='hidden md:flex'>
					{navLinks.map((link) => (
						<div
							key={link.name}
							className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
						>
							<Link href={link.link}>
								<a className='hover:opacity-70 transition duration-700'>
									{link.name}
								</a>
							</Link>
						</div>
					))}
				</div>

				<div className='text-3xl md:hidden'>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						<GiHamburgerMenu />
					</button>
				</div>
			</div>
			<AnimatePresence mode='wait'>
				{open && (
					<motion.div
						className='absolute w-full h-[24vh] z-40  shadow-lg text-white bg-red-500'
						variants={dropDownVariant}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<div className='grid place-items-center gap-2 h-full py-3'>
							{navLinks.map((link) => (
								<div
									key={link.name}
									className='text-lg z-30'
									onClick={() => setOpen(!open)}
								>
									<Link href={link.link}>
										<a className=''>{link.name}</a>
									</Link>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;

// <div className='flex justify-between px-3 py-4 text-white tracking-widest  max-w-7xl mx-auto'>
// 	<div className=''>
// 		<Link href={'/'}>
// 			<div className='grid gap-1 place-items-center'>
// 				<span className='text-3xl cursor-pointer hover:opacity-75 transition duration-700'>
// 					<AiFillHome />
// 				</span>
// 				<span className='text-gray-200'>{`(651) 455-7595`}</span>
// 			</div>
// 		</Link>
// 	</div>
// 	<div className='flex justify-end items-center text-xl'>
// 		<div className='hidden md:flex space-x-8'>
// 			{navLinks.map((link) => (
// 				<div key={link.name}>
// 					<Link href={link.link}>{link.name}</Link>
// 				</div>
// 			))}
// 		</div>
// 		<div className="md:hidden text-2xl px-4">
// 			<GiHamburgerMenu />
// 		</div>
// 	</div>
// </div>
