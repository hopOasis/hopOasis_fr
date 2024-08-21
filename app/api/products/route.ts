import { NextRequest, NextResponse } from 'next/server';
import { ApiEndpoints } from '@/app/static/constants';
import { ProductsResponseType } from '@/app/types/products';

export async function POST(req: NextRequest) {
  const { filter } = await req.json();
  //need to check fields in ApiEndpoints
  const resProducts = await fetch(ApiEndpoints?.[filter] ?? ApiEndpoints.beers, { method: 'GET' });

  if (!resProducts.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}
