'use client';
import { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import TestimonialCard from '@/components/home/testimonial/card';
import { TestimonialsList } from '@/lib/testimonialsList';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary } from '@/lib/i18n';

import Cta from '@/components/home/cta';

export default function Page({ params }) {
	const [dict, setDict] = useState({ About: {}, Testimonial: {}, CTA: {}, CTAButton: {} });
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardsPerView, setCardsPerView] = useState(1);
	const containerRef = useRef(null);
	
	useEffect(() => {
		const fetchDictionary = async () => {
			const d = await getDictionary(langName);
			setDict(d);
		};
		fetchDictionary();
	}, );

	const pathname = usePathname();
	const [langName, setLangName] = useState(params.lang || defaultLocale);
	useEffect(() => {
		if (pathname === '/') {
			setLangName(defaultLocale);
		} else {
			setLangName(pathname.split('/')[1]);
		}
	}, [pathname, langName]);

	const list = TestimonialsList[`TESTIMONIAL_${langName.toUpperCase()}`] || [];

	useEffect(() => {
		const updateCardsPerView = () => {
			if (window.innerWidth >= 768) {
				setCardsPerView(3); // Show 3 cards on larger screens
			} else {
				setCardsPerView(1); // Show 1 card on smaller screens
			}
		};
	
		updateCardsPerView();
		window.addEventListener('resize', updateCardsPerView);
	
		return () => window.removeEventListener('resize', updateCardsPerView);
	}, []);
	
	const handlePrev = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	};
	
	const handleNext = () => {
		setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, list.length - cardsPerView));
	};
	
	const getTransformValue = () => {
		const cardWidth = containerRef.current?.offsetWidth / cardsPerView || 0;
		return `translateX(-${currentIndex * cardWidth}px)`;
	};

	return (
		<main className='container mx-auto px-5'>
			<section>
				<div className='relative z-10 flex flex-col items-start md:items-center pt-10 mb-5 overflow-hidden'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
					>
						<h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
							{dict.About.h1}
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.4,
							duration: 1,
						}}
					>
						<h2 className='w-full px-4 md:w-10/12 mx-auto text-xl sm:text-xl md:text-2xl text-base-content/80 text-center mb-5 md:mb-10'>
    {dict.About.h2}
</h2>
					</motion.div>
				</div>
				<div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[200px]'>
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
			</section>
			<section className='flex flex-col gap-y-10 mb-32'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<div className='flex flex-col md:flex-row items-stretch justify-between gap-10'>
						<div className='w-full md:w-3/5 relative rounded-2xl overflow-hidden shadow-xl'>
							<Image
								src={'/image/fsae22.png'}
								layout='fill'
								objectFit='cover'
								className='hover:scale-105 transition-all'
								alt='about_1'
								style={{objectPosition: 'center 30%'}} // move image lower
							/>
						</div>
						<div className='w-full md:w-2/5 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200 shadow-xl'>
						<div className='flex items-center justify-between py-5 gap-4 md:gap-6'>
					
								<h2 className='text-3xl font-bold'>{dict.About.why}</h2>
								<BsPatchQuestionFill size={48} />
							</div>
							<p className={`text-lg break-words text-center md:text-left ${langName === 'ar' && 'text-right'}`}>
    {dict.About.why_content}
</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<div className='flex flex-col md:flex-row items-stretch justify-between gap-10'>
						<div className='w-full md:w-2/5 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200 shadow-xl'>
						<div className='flex items-center justify-between py-5 gap-4 md:gap-6'>
    <h2 className='text-3xl font-bold'>
        {dict.About.team}
    </h2>
	<RiTeamFill size={48} />
</div>
							<p className={`text-lg break-words text-center md:text-left ${langName === 'ar' && 'text-right'}`}>
    {dict.About.team_content}
</p>
						</div>
						<div className='w-full md:w-3/5 relative rounded-2xl overflow-hidden shadow-xl'>
							<Image
								src={'/image/fsae_workshop.jpg'}
								layout='fill'
								objectFit='cover'
								className='hover:scale-105 transition-all'
								alt='about_2'
							/>
						</div>
					</div>
				</motion.div>
			</section>
			<section className='relative'>
			<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.5,
        }}
    >
        <div className='relative z-10 flex flex-col gap-5 items-center md:items-center mb-10 mx-auto'>
            <h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em]'>
                {dict.Testimonial.h3}
            </h3>

            <h4 className='w-full text-xl md:text-2xl text-base-content/80 text-center'>
                {dict.Testimonial.description1}
                <a
                    title='feedback'
                    className='text-primary'
                    href='#'
                >
                    {dict.Testimonial.description2}
                </a>
                {dict.Testimonial.description3}
            </h4>
        </div>
    </motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
					}}
				>
					<div className='relative z-10 w-full md:w-10/12 mx-auto overflow-hidden'>
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
                        width: `${100 / cardsPerView}%`,
                    }}
                >
                    <TestimonialCard testimonialItem={item} langName={langName} />
                </div>
            ))}
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

				<div className='hidden md:block absolute right-[70%] top-[40%] z-0'>
					<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.primary/15%),rgba(255,255,255,0))]'></div>
				</div>
			</section>

			<Cta
				locale={dict.CTA}
				CTALocale={dict.CTAButton}
			/>
		</main>
	);
}
