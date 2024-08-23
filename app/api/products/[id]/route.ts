import { NextRequest, NextResponse } from 'next/server';
import { ProxiEndpoints } from '@/app/static/constants';
import { separateId } from '@/app/utils';

type Params = {
  id: number;
};

export async function GET(req: NextRequest, context: { params: Params }) {
  const id = context.params.id.toString();
  const filter = req.nextUrl.searchParams.get('filter');
  const separatedId = separateId(id);

  const cases = {
    BEER: 'beers',
    CIDER: 'ciders',
    SNACK: 'snacks',
    PRODUCT_BUNDLE: 'sets',
  };

  const res = await fetch(`${ProxiEndpoints?.[cases[filter]]}/${separatedId}`, { method: 'GET' });

  if (!res.ok) {
    throw new Error('Failed to fetch SINGLE PRODUCT data');
  }

  const product = await res.json();
  return NextResponse.json({ ...product });
}
