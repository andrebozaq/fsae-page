'use client';
import { motion } from 'framer-motion';
import { CiMail } from "react-icons/ci";



export default function Cta({ locale, CTALocale }) {
	return (
		<section
			id='feature'
			className='relative py-10 md:py-20'
		><motion.div
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{
			duration: 0.5,
		}}
	>
		<div className='relative z-10 flex flex-col gap-5 items-center md:items-center mb-10 mx-auto'>
		<h2 className='font-bold text-4xl md:text-6xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em]'>
    {locale.h2}
</h2>
	
			<h3 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 text-center'>
				{locale.h3}
			</h3>
	
			<div className='relative z-10 flex flex-col md:flex-row gap-5 items-center md:justify-center mb-10 mx-auto'></div>
    <a
        title='compose email'
        className='btn btn-md md:btn-lg btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-center'
        href="mailto:arodriguez.fsaeluz@gmail.com?subject=FSAE%20LUZ%20Asesoria&body=Saludos%20FSAE%20LUZ,%0A%0AQuisiera%20informacion%20sobre..."
    >
        <CiMail size={20} />
        {CTALocale.btn1}
    </a>
		</div>
	</motion.div>

		</section>
	);
}
