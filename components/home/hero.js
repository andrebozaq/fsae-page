'use client';
import { motion } from 'framer-motion';
import { FaYoutube } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { useEffect, useState } from 'react';

export default function Hero({ locale, CTALocale }) {
    const [tilt, setTilt] = useState(45);
    const [duration, setDuration] = useState(0.8);

    useEffect(() => {
        // Handle scroll effect for tilt
        const handleScroll = () => {
            const maxTilt = 45; // Maximum tilt angle
            const scrollY = window.scrollY;
            const tiltValue = Math.max(maxTilt - scrollY / 8, 0); // Adjust tilt based on scroll
            setTilt(tiltValue);
            setDuration(0.3);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Dynamically load the Spline Viewer script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
        script.type = 'module';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <section
                className='relative z-10 flex flex-col items-center py-10 md:py-20 overflow-hidden'
                style={{ perspective: '800px' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                >
                    <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em] mb-3 px-4'>
    {locale.h1}
</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 4,
                    }}
                >
                    <h2 className='w-full md:w-10/12 mx-auto text-lg md:text-2xl text-base-content/80 text-center mb-5 md:mb-10 px-4'>
                        {locale.h2}
                    </h2>

                    <div className='relative z-10 flex flex-col md:flex-row gap-5 items-center md:justify-center mb-10 mx-auto'>
    <a
        title='compose email'
        className='btn btn-md md:btn-lg btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-center'
        href="mailto:arodriguez.fsaeluz@gmail.com?subject=FSAE%20LUZ%20Asesoria&body=Saludos%20FSAE%20LUZ,%0A%0AQuisiera%20informacion%20sobre..."
    >
        <GiReceiveMoney size={20} />
        {CTALocale.btn1}
    </a>
    <a
        title='watch video'
        className='btn btn-md md:btn-lg btn-base rounded-full flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-center'
        href='https://www.youtube.com/watch?v=-4Tmx3LAv4U'
        target='_blank'
    >
        <FaYoutube size={20} /> {CTALocale.btn2}
    </a>
</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: '0deg' }}
                    animate={{ opacity: 1, y: 0, rotateX: `${tilt}deg` }}
                    transition={{
                        delay: duration == 0.8 ? 0.4 : 0,
                        duration: duration,
                    }}
                    className='w-full mt-10'
                >
                    <spline-viewer url="https://prod.spline.design/XoOGvqvcRUglIv5f/scene.splinecode"></spline-viewer>
                </motion.div>
            </section>

            <div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    id='patternId'
                    width='100%'
                    height='100%'
                >
                    <defs>
                        <pattern
                            id='a'
                            patternUnits='userSpaceOnUse'
                            width='20'
                            height='20'
                            patternTransform='scale(3) rotate(0)'
                        >
                            <rect
                                x='0'
                                y='0'
                                width='100%'
                                height='100%'
                                fill='hsla(0, 0%, 100%, 0)'
                            ></rect>
                            <path
                                d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'
                                strokeWidth='0.5'
                                className='stroke-base-content/50'
                                fill='none'
                            ></path>
                        </pattern>
                    </defs>
                    <rect
                        width='800%'
                        height='800%'
                        transform='translate(0,0)'
                        fill='url(#a)'
                    ></rect>
                </svg>
                <div className='bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 '></div>
                <div className='bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
                <div className='bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
                <div className='bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
            </div>
        </>
    );
}