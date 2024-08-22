import { ApiEndpoints } from '@/app/static/constants';
import { SetsApiResponse } from '@/app/types/sets';
import { preparingProducts } from '@/app/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(ApiEndpoints.sets);

  if (!res.ok) {
    throw new Error('Failed to fetch SET data');
  }

  const parsedRes: SetsApiResponse = await res.json();
  const products = preparingProducts(parsedRes);

  return NextResponse.json({ ...products });
}
