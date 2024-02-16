import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { navLinks } from '../../data/navLinks';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [open, setOpen] = useState(false);
	const toggleMenu = () => {
        setOpen(!open);
        if (!open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    useEffect(() => {
        // Clean up function to ensure the overflow style is reset when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const dropDownVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
    };

    return (
        <nav className='text-white py-1 tracking-wider z-40'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-8'>
                {/* Home Link */}
                <button className='py-1' onClick={() => setOpen(false)}>
                    <Link href={'/'}>
                        <a className='text-3xl text-primary transition duration-700'>
                            <div className='grid gap-1 place-items-center'>
                                <AiFillHome />
                                <span className='text-sm'>{`(651) 455-7595`}</span>
                            </div>
                        </a>
                    </Link>
                </button>

                {/* Desktop Links */}
                <div className='hidden md:flex'>
                    {navLinks.map((link) => (
                        <div key={link.name} className='md:ml-8 text-lg md:my-0 my-7 text-center'>
                            <Link href={link.link}>
                                <a className='hover:opacity-70 transition duration-700'>{link.name}</a>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Hamburger Icon */}
                <div className='text-3xl md:hidden'>
                    <button onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            <AnimatePresence mode='wait'>
                {open && (
                    <motion.div
                        className='fixed inset-0 z-50 bg-light/80 backdrop-blur text-white flex justify-center items-center'
                        variants={dropDownVariant}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <div className='p-5'>
                            {navLinks.map((link) => (
                                <div key={link.name} className='text-2xl font-bold text-ight font-tinos py-8 text-center' onClick={toggleMenu}>
                                    <Link href={link.link}>
                                        <a>{link.name}</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {/* Optionally, add a close button or use the area outside the menu to close the modal */}
						<div className='absolute top-4 right-4 text-3xl'>
							<button onClick={toggleMenu}>&times;</button>
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
