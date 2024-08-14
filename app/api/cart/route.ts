import { NextRequest, NextResponse } from 'next/server';
import { CartResponseType, Endpoints } from '../types';

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
  try {
    const headers = new Headers(request.headers);
    const res = await fetch(API_URL + Endpoints.cart, {
      headers,
    });
    if (!res.ok) {
      throw new Error('Failed to GET fetch CART data');
    }

    const parsedRes: CartResponseType = await res.json();

    const data = {
      ...parsedRes,
      items: parsedRes.items.map(({ imageName, ...rest }) => ({
        ...rest,
        imageName: imageName.map(
          (name) => `${API_URL + Endpoints.beer}/images/${name}`,
        ),
      })),
    };

    return NextResponse.json({ ...data });
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw new Error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const requestHeaders = new Headers(request.headers);

    const res = await fetch(`${API_URL + Endpoints.cart}/items`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
      credentials: 'include',
    });
    if (!res.ok) {
      console.log(res.status);
      throw new Error('Failed to POST fetch CART data');
    }

    return NextResponse.json({ message: 'sucsess' });
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw new Error();
  }
}
