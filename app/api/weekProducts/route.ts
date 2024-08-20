import { ApiEndpoints } from '@/app/static/constants';
import { NextResponse } from 'next/server';
import { WeekProductsApiResponse } from '@/app/types/weekProducts';

export async function GET() {
  const res = await fetch(ApiEndpoints.weekProducts);

  let products = [];

  if (res.status === 404) {
    return NextResponse.json({ content: products });
  }

  const parsedRes: WeekProductsApiResponse = await res.json();

  const beers = parsedRes?.specialOfferBeers ?? [];
  const ciders = parsedRes?.specialOfferCiders ?? [];
  const snacks = parsedRes?.specialOfferSnacks ?? [];
  const sets = parsedRes?.specialOfferProductBundles ?? [];

  products = [...beers, ...ciders, ...snacks, ...sets];

  return NextResponse.json({ content: products });
}
