import { ApiEndpoints } from '@/app/static/constants';
import { SnackApiResponse } from '@/app/types/snacks';
import { preparingProducts } from '@/app/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(ApiEndpoints.snacks);

  if (!res.ok) {
    throw new Error('Failed to fetch SNACK data');
  }

  const parsedRes: SnackApiResponse = await res.json();
  const products = preparingProducts(parsedRes);

  return NextResponse.json({ ...products });
}
