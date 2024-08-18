import { ApiEndpoints } from '@/app/static/constants';
import { NextResponse } from 'next/server';
import { ProductsResponseType } from '../types';

export async function GET() {
  const resProducts = await fetch(ApiEndpoints.snacks);

  if (!resProducts.ok) {
    throw new Error('Failed to fetch SET data');
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}
