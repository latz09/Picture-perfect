import Image from 'next/image';
import hero from '../../public/images/inside-of-building.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const FrameAnythingHero = () => {
    // Variants for animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.7,
                delay: 0.3,
            },
        
        },
    };
    const item = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1.3,
            },
        },
    };

    // Phrase for animation
    const phrase = ['We', 'frame', 'everything.'];

    return (
        <div className='relative h-[55vh] md:h-[75vh] shadow-lg shadow-primary/40 overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full z-0'>
                <Image
                    src={hero}
                    alt="Interior view of a building"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='left'
                />
            </div>
            <div className='relative flex justify-center items-center h-full bg-gradient-to-b from-dark/0 via-dark/70 to-dark/0 z-10'>
                <div className='grid gap-4 text-center tracking-widest'>
                    <AnimatePresence>
                        <h1 className='text-5xl md:text-7xl font-robotoslab text-white'>
                            <motion.div
                                variants={container}
                                initial='hidden'
                                whileInView='show'
                                exit='exit'
                                className='flex flex-wrap lg:justify-center text-light'
                            >
                                {phrase.map((word, index) => (
                                    <motion.span key={index} variants={item} className='mx-2'>
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </h1>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default FrameAnythingHero;
