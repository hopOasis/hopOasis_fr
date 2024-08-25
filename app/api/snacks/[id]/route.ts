import { ApiEndpoints } from '@/app/static/constants';
import { PreparedProductType } from '@/app/types/products';
import { SnackType } from '@/app/types/snacks';
import { preparingSingleProducts } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.snacks}/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch SNACK data');
  }

  const parsedRes: SnackType = await res.json();
  const product: PreparedProductType = preparingSingleProducts(parsedRes);

  return NextResponse.json({ ...product });
}
