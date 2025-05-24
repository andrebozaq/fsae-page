'use client';
import React, { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default memo(function PricingCard({ pricingItem = {} }) {
	return (
		<div className={`w-full min-h-96 px-5 py-10 border-2 border-base-content rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl bg-base-100 ${pricingItem.recommend && 'md:scale-125'}`}>
			<h2 className='text-xl font-bold text-center'>{pricingItem.title}</h2>
			<p className='text-center'>{pricingItem.description}</p>
			<Image
				className='w-full h-40 object-contain my-4'
				src={pricingItem.image}
				alt={pricingItem.title}
				width={200}
				height={160}
			/>

			<ul className='w-full flex flex-col gap-2 py-5'>
				{pricingItem.features &&
					pricingItem.features.map((feature, Featureindex) => {
						return (
							<li
								className='flex items-center gap-2'
								key={Featureindex}
							>
								<FaCheck /> {feature}
							</li>
						);
					})}
			</ul>
		</div>
	);
});
