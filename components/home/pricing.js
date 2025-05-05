'use client';
import PricingCard from './pricing/card';
import { PricingList } from '@/lib/pricingList';
import { motion } from 'framer-motion';
import { FaHandsHelping } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Feature({ locale, langName = 'en' }) {
    let list = PricingList[`PRICING_${langName.toUpperCase()}`] || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3); // Default to 3 cards per view

    // Dynamically calculate the width of one card and adjust cards per view
    useEffect(() => {
        const updateCardWidth = () => {
            if (containerRef.current) {
                const cardElement = containerRef.current.querySelector('.carousel-card');
                if (cardElement) {
                    setCardWidth(cardElement.offsetWidth); // Get card width
                }

                // Adjust cards per view based on screen size
                if (window.innerWidth < 768) {
                    setCardsPerView(1); // Show 1 card on smaller screens
                } else {
                    setCardsPerView(3); // Show 3 cards on larger screens
                }
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth); // Recalculate on window resize
        return () => window.removeEventListener('resize', updateCardWidth);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, list.length - cardsPerView));
    };

    const getTransformValue = () => {
        // Calculate the transform value to center the cards
        const offset = cardsPerView === 1 ? (window.innerWidth - cardWidth) / 2 - 8 : 0; // Adjust offset slightly to fix alignment
        return `translateX(calc(-${currentIndex * cardWidth}px + ${offset}px))`;
    };

    return (
        <section
            id='sponsors'
            className='relative py-10 md:py-20'
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
            >
                <div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
                    <div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group hover:bg-base-content hover:text-base-100 transition-all'>
                        <div className='inline-flex items-center justify-center gap-2 z-10'>
                            <FaHandsHelping /> <h2>{locale.h2}</h2>
                        </div>
                        <div className='absolute w-0 h-full bg-base-content z-[0]'></div>
                    </div>

                    <h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
                        {locale.h3}
                    </h3>

                    <h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>{locale.description}</h4>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
            >
                <div className='relative z-10 w-full md:w-10/12 mx-auto'>
                    {/* Carousel Container */}
                    <div className='relative overflow-hidden'>
                        <div
                            ref={containerRef}
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{
                                transform: getTransformValue(),
                            }}
                        >
                            {list.map((item, index) => (
                                <div
                                    key={index}
                                    className='carousel-card flex-shrink-0 px-4'
                                    style={{
                                        width: cardsPerView === 1 ? '100%' : 'calc(100% / 3 - 1rem)', // Full width for phones, 3 cards for larger screens
                                        maxWidth: '400px', // Limit max width for larger screens
                                    }}
                                >
                                    <PricingCard pricingItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='absolute inset-0 flex justify-between items-center'>
                        <button
                            onClick={handlePrev}
                            className='btn btn-circle flex items-center justify-center absolute left-2 text-gray-500 bg-gray-200 hover:bg-gray-300'
                            aria-label='Previous'
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className='btn btn-circle flex items-center justify-center absolute right-2 text-gray-500 bg-gray-200 hover:bg-gray-300'
                            aria-label='Next'
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className='hidden md:block absolute left-[50%] top-[70%] z-0'>
                <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
            </div>
        </section>
    );
}