import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { oaza_guest } from './app/static/constants';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Type', 'application/json');  

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  if (!oazaCookie) {
    const generateRandomID = () => {
      const randomBigInt = BigInt.asUintN(
        64,
        BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) *
          BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
      );
      const number = Math.round(Number(randomBigInt) * 0.000000000001);
      return number.toString();
    };

    const cookieValue = generateRandomID();
    response.cookies.set(oaza_guest, cookieValue, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', // Использовать только в HTTPS в продакшене
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
