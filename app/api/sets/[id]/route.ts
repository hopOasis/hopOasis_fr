import { ApiEndpoints } from '@/app/static/constants';
import { PreparedProductType } from '@/app/types/products';
import { SetsType } from '@/app/types/sets';
import { preparingSingleProducts } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.sets}/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch SET data');
  }

  const parsedRes: SetsType = await res.json();
  const product: PreparedProductType = preparingSingleProducts(parsedRes);

  return NextResponse.json({ ...product });
}
