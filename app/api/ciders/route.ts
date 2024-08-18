import { NextResponse } from 'next/server';
import { ProductsResponseType } from '../types';

import { ApiEndpoints } from '@/app/static/constants';

export async function GET() {
  const resProducts = await fetch(ApiEndpoints.ciders);

  if (!resProducts.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}
