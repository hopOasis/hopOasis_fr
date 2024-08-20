import { ApiEndpoints } from '@/app/static/constants';
import { preparingProducts } from '@/app/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(ApiEndpoints.specialForYou);

  if (!res.ok) {
    throw new Error('Failed to fetch SPECIAL FOR YOU data');
  }

  const parsedRes = await res.json();
  const products = preparingProducts(parsedRes);

  return NextResponse.json({ ...products });
}
