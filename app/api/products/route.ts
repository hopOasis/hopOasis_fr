import { NextRequest, NextResponse } from 'next/server';
import { ApiEndpoints, ProductsResponseType } from '../types';

export async function POST(req: NextRequest) {
  const { filter } = await req.json();
  const resProducts = await fetch(ApiEndpoints[filter], { method: 'GET' });

  if (!resProducts.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}
