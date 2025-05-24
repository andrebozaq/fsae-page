import SponsorsClient from './SponsorsClient';
import { PricingList } from '@/lib/pricingList';
import { defaultLocale, getDictionary } from '@/lib/i18n';

export default async function SponsorsPage({ params }) {
  const langName = params?.lang || defaultLocale;
  const dict = await getDictionary(langName);
  const list = PricingList[`PRICING_${langName.toUpperCase()}`] || [];

  return <SponsorsClient dict={dict} list={list} />;
}
