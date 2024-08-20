import { ApiEndpoints } from '@/app/static/constants';
import { CartApiResponse } from '@/app/types/cart';
import { generateId } from '@/app/utils';
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

  const parsedRes: CartApiResponse = await res.json();

  const cart = {
    ...parsedRes,
    items: parsedRes.items.map((item) => ({ ...item, itemId: generateId({ type: item.type, id: item.itemId }) })),
  };
  return NextResponse.json({ ...cart });
}

export async function POST(request: NextRequest, { params: Params }) {
  const body = await request.json();
  const requestHeaders = new Headers(request.headers);
  // const res = await fetch(`${ApiEndpoints.carts}/${params}`, {
  //   method: 'POST',
  //   headers: requestHeaders,
  //   body: JSON.stringify(body),
  // });

  // if (res.status !== 200) {
  //   return NextResponse.json({ items: [], priceForAll: 0 });
  // }

  return NextResponse.json({ message: 'succsess' });
}
