import { ProxiEndpoints } from '@/app/static/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  // if (Boolean(cartId) === false) {
  //   return NextResponse.json({ items: [], priceForAll: 0 });
  // }
  // const resCart = await fetch(`${ProxiEndpoints.cart}/${cartId}`, { method: 'POST' });
  // const cart = await resCart.json();

  return NextResponse.json({  items: [], priceForAll: 0  });
}
