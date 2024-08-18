import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const cookieStore = cookies();
  const oazaGuest = cookieStore.get(oaza_guest);

  const resCart = await fetch(ProxiEndpoints.cart, {
    method: 'POST',
    body: JSON.stringify({ ...body, cartId: oazaGuest.value }),
  });
  const cart = await resCart.json();

  return NextResponse.json({ ...cart });
}
