import { ApiEndpoints } from '@/app/static/constants';
import { NextResponse } from 'next/server';
import { WeekProductsApiResponse } from '@/app/types/weekProducts';
import { preparingProducts } from '@/app/utils';

export async function GET() {
  const res = await fetch(ApiEndpoints.weekProducts, { method: 'GET' });
  console.log('res.status', res.status);

  if (!res.ok && res.status === 404) {
    return NextResponse.json({ content: [] });
    // throw new Error('Error fetching WEEKLY PRODUCTS data');
  }

  const parsedRes: WeekProductsApiResponse = await res.json();

  const beers = parsedRes?.specialOfferBeers ?? [];
  const ciders = parsedRes?.specialOfferCiders ?? [];
  const snacks = parsedRes?.specialOfferSnacks ?? [];
  const sets = parsedRes?.specialOfferProductBundles ?? [];

  //@ts-ignore
  const products = preparingProducts({ content: [...beers, ...ciders, ...snacks, ...sets] });

  return NextResponse.json({ ...products });
}
