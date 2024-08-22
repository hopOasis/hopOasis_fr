import { ApiEndpoints, oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  //  if request from SWAGGER cartId in body
  //  if request from APP getting cartId from cookie
  let body = await req.json();
  const cookieStore = cookies();
  const oazaGuest = cookieStore.get(oaza_guest);

  //  only for swagger - next.js don't catch cookie from swagger
  if (oazaGuest) {
    body = { ...body, cartId: oazaGuest.value };
  }

  const resCart = await fetch(ApiEndpoints.carts, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });

  if (!resCart.ok) {
    throw new Error('Failed to post CART data');
  }
  const cart = await resCart.json();

  return NextResponse.json({ ...cart });
}
