import { NextRequest, NextResponse } from 'next/server';
import { ProxiEndpoints } from '../types';

export async function POST(req: NextRequest) {
  const { cartId } = await req.json();

  if (!cartId) {
    return NextResponse.json({ items: [], priceForAll: 0 });
  }
  const resCart = await fetch(`${ProxiEndpoints.cart}/${cartId}`, { method: 'GET' });
  const cart = await resCart.json();

  return NextResponse.json({ ...cart });
}
