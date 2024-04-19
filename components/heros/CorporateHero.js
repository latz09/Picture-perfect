import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/corporate/commercial-services.png';

import { AnimatePresence, motion } from 'framer-motion';

const CorporateHero = () => {
    return (
        <div className='relative h-[80vh] overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full z-0'>
                <Image
                    src={hero}
                    alt="Commercial services offered by the company"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                />
            </div>
            <div className='relative flex justify-center items-center bg-gradient-to-b from-dark/70 via-dark/80 to-dark/70 h-full z-10'>
                <AnimatePresence>
                    <div className='grid gap-3 text-center tracking-widest text-light'>
                        <motion.h1
                            initial={{ opacity: 0, scale:.9  }}
                            whileInView={{ opacity: 1, scale:1  }}
                            transition={{ duration: 1.3, delay: 0.3 }}
                            exit={{ opacity: 0 }}
                            className='text-4xl md:text-6xl font-tinos max-w-4xl mx-auto'
                        >
                            Comprehensive Commercial Framing Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1, scale:1 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            exit={{ opacity: 0 }}
                            className='text-lg md:text-2xl text-gray-300 px-4'
                        >
                            From Small Projects to Government-Scale Endeavors
                        </motion.p>
                        <Link href={'/commercial-services'}>
                            <div className="mt-8">
                                <button className='btn-primary'>
                                    Learn More
                                </button>
                            </div>
                        </Link>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CorporateHero;
