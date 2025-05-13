'use client';
import { FAQList } from '@/lib/faqsList';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

export default function Feature({ locale, langName = 'en' }) {
	let list = FAQList[`FAQ_${langName.toUpperCase()}`] || [];
	return (
		<section
			id='faq'
			className='relative py-10 md:py-20'
		>
		<motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
        duration: 0.5,
    }}
>
    <div className='relative z-10 flex flex-col gap-5 items-center md:items-center mb-10 mx-auto'>
        <div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group hover:bg-base-content hover:text-base-100 transition-all'>
            <div className='inline-flex items-center justify-center gap-2 z-10'>
                <FaQuestionCircle /> <h2 className='text-center'>{locale.h2}</h2>
            </div>
            <div className='absolute w-0 h-full bg-base-content z-[0]'></div>
        </div>

        <h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em]'>
            {locale.h3}
        </h3>

        <h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 text-center'>
            {locale.description}
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
				<div className='relative z-10 w-full md:w-10/12 mx-auto flex flex-col gap-5'>
					{list.map((item, index) => {
						return (
							<div
								key={index}
								tabIndex={0}
								className='collapse collapse-arrow bg-base-200 border-b-[1px] border-base-content rounded-none bg-transparent'
							>
								<div className={`collapse-title text-xl font-medium ${langName === 'ar' ? 'text-right' : ''}`}>
									{item.question}
								</div>
								<div className={`collapse-content ${langName === 'ar' ? 'text-right' : ''}`}>
									<p>{item.answer}</p>
								</div>
							</div>
						);
					})}
				</div>
			</motion.div>

			
		</section>
	);
}
