import { NextRequest, NextResponse } from 'next/server';
import { ProxiEndpoints } from '@/app/static/constants';
import { ProductsResponseType } from '@/app/types/products';

export async function GET(req: NextRequest) {
  const filter = req.nextUrl.searchParams.get('filter');
  const resProducts = await fetch(ProxiEndpoints?.[filter.toLowerCase()] ?? ProxiEndpoints.beers, { method: 'GET' });

  if (!resProducts.ok) {
    throw new Error('Failed to  fetch PRODUCTS data');
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}
