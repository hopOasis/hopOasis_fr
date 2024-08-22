import { ApiEndpoints } from '@/app/static/constants';
import { CiderType } from '@/app/types/ciders';
import { PreparedProductType } from '@/app/types/products';
import { preparingSingleProducts } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.ciders}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch CIDER data');
  }

  const parsedRes: CiderType = await res.json();
  const product: PreparedProductType = preparingSingleProducts(parsedRes);

  return NextResponse.json({ ...product });
}
