import { NextResponse } from 'next/server';
import { ApiEndpoints } from '@/app/static/constants';
import { BeersApiResponse } from '@/app/types/beers';
import { preparingProducts } from '@/app/utils';

export async function GET() {
  const res = await fetch(ApiEndpoints.beers, { method:"GET" });

  if (!res.ok) {
    throw new Error('Failed to fetch BEER data');
  }

  const parsedRes: BeersApiResponse = await res.json();

  const products = preparingProducts(parsedRes);

  return NextResponse.json({ ...products });
}
