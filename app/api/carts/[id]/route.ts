import { ApiEndpoints } from '@/app/static/constants';
import { ProductType } from '@/app/types/types';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.carts}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch CART data');
  }

  if (res.status === 404) {
    return NextResponse.json({ items: [], priceForAll: 0 });
  }
  
  const parsedRes: ProductType = await res.json();
  return NextResponse.json({ ...parsedRes });
}

export async function POST(request: NextRequest, { params: Params }) {
  const body = await request.json();
  const requestHeaders = new Headers(request.headers);
  // console.log('----------params', params);
  // const res = await fetch(`${ApiEndpoints.cart}/${params}`, {
  //   method: 'POST',
  //   headers: requestHeaders,
  //   body: JSON.stringify(body),
  // });

  // if (res.status !== 200) {
  //   return NextResponse.json({ items: [], priceForAll: 0 });
  // }

  return NextResponse.json({ message: 'succsess' });
}
