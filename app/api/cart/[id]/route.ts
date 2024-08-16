import { ApiEndpoints } from '@/app/api/types';
import { ProductType } from '@/app/types/types';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.beer}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const parsedRes: ProductType = await res.json();

  return NextResponse.json({ ...parsedRes });
}

export async function POST(request: NextRequest,  context: { params: Params }) {
  const body = await request.json();
  const requestHeaders = new Headers(request.headers);
  const res = await fetch(ApiEndpoints.cart, {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error('Failed to POST fetch CART data');
  }

  return NextResponse.json({ message: 'succsess' });
}