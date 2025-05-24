'use client';

import PricingCard from '@/components/home/pricing/card';
import { FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SponsorsClient({ dict, list }) {
  // Get unique tiers from the list, preserving order in the data
  const uniqueTiers = [];
  list.forEach(item => {
    if (item.tier && !uniqueTiers.includes(item.tier)) {
      uniqueTiers.push(item.tier);
    }
  });
  // Map tier keys to display names and colors
  const tierDisplay = [
    { key: 'tier1', label: dict.Pricing?.tier1, color: 'from-[#b3b3b3] to-[#e5e4e2]' },
    { key: 'tier2', label: dict.Pricing?.tier2, color: 'from-[#FFD700] to-[#FFEF8B]' },
    { key: 'tier3', label: dict.Pricing?.tier3, color: 'from-[#C0C0C0] to-[#E0E0E0]' },
    { key: 'tier4', label: dict.Pricing?.tier4, color: 'from-[#CD7F32] to-[#E6B98A]' },
  ];
  // Group sponsors by their tier key
  const sponsorsByTier = {};
  tierDisplay.forEach(tier => {
    sponsorsByTier[tier.key] = list.filter(item => (item.tier || '').toLowerCase() === tier.key.toLowerCase());
  });

  return (
    <div className="container mx-auto md:px-5 py-10 md:py-20">
      <section id="sponsors" className="relative py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 flex flex-col gap-5 items-center md:items-center mb-10 mx-auto">
            <div className="relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group hover:bg-base-content hover:text-base-100 transition-all">
              <div className="inline-flex items-center justify-center gap-2 z-10">
                <FaHandsHelping /> <h2 className="text-center">{dict.Pricing.h2}</h2>
              </div>
              <div className="absolute w-0 h-full bg-base-content z-[0]"></div>
            </div>
           
            <h4 className="w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 text-center">
              {dict.Pricing.description}
            </h4>
          </div>
        </motion.div>
        {tierDisplay.map((tier, idx) => (
          sponsorsByTier[tier.key].length > 0 && tier.label && (
            <div key={tier.key} className="mb-16">
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r ${tier.color} bg-clip-text text-transparent capitalize`}>
                {tier.label}{dict.Pricing?.sponsors && dict.Pricing?.sponsors !== 'Patrocinadores' && dict.Pricing?.sponsors !== 'Patrocinador' && dict.Pricing?.sponsors !== 'Patrocinadora' && dict.Pricing?.sponsors !== 'Patrocinadoras' ? ` ${dict.Pricing.sponsors}` : ''}
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`relative z-10 w-full md:w-10/12 mx-auto grid gap-5 ${sponsorsByTier[tier.key].length === 1 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
                  {sponsorsByTier[tier.key].length === 1 ? (
                    <div className="col-span-1 md:col-start-2 md:col-span-1 flex justify-center">
                      <PricingCard pricingItem={sponsorsByTier[tier.key][0]} />
                    </div>
                  ) : (
                    sponsorsByTier[tier.key].map((item, index) => (
                      <PricingCard key={index} pricingItem={item} />
                    ))
                  )}
                </div>
              </motion.div>
              {idx < tierDisplay.length - 1 && (
                <div className="w-full flex justify-center my-10">
                  <div className="h-1 w-2/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50 rounded-full" />
                </div>
              )}
            </div>
          )
        ))}
      </section>
    </div>
  );
}
