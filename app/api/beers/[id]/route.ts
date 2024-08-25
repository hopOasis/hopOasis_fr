import { ApiEndpoints } from '@/app/static/constants';
import { BeerType } from '@/app/types/beers';
import { PreparedProductType } from '@/app/types/products';
import { preparingSingleProducts } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.beers}/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch BEER data');
  }
  const parsedRes: BeerType = await res.json();
  const product: PreparedProductType = preparingSingleProducts(parsedRes);

  return NextResponse.json({ ...product });
}
