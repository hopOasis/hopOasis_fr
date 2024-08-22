import { NextRequest, NextResponse } from 'next/server';
import { ProxiEndpoints } from '@/app/static/constants';
import { ProductsResponseType } from '@/app/types/products';

export async function POST(req: NextRequest) {
  const { filter } = await req.json();
  //need to check fields in ApiEndpoints
  const resProducts = await fetch(ProxiEndpoints?.[filter] ?? ProxiEndpoints.beers, { method: 'GET' });

  if (!resProducts.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsedRes: ProductsResponseType = await resProducts.json();


  return NextResponse.json({ ...parsedRes });
}
