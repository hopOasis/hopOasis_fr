import { NextResponse } from 'next/server';

import { ApiEndpoints } from '@/app/static/constants';
import { preparingProducts } from '@/app/utils';
import { CiderApiResponse } from '@/app/types/ciders';

export async function GET() {
  const res = await fetch(ApiEndpoints.ciders,  { method: 'GET' });

  if (!res.ok) {
    throw new Error('Failed to fetch CIDER data');
  }

  const parsedRes: CiderApiResponse = await res.json();
  const products = preparingProducts(parsedRes);

  return NextResponse.json({ ...products });
}
