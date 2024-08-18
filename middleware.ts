import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { oaza_guest } from './app/static/constants';
import { generateRandomID } from './app/utils';

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
    const cookieValue = generateRandomID();
    response.cookies.set(oaza_guest, cookieValue, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', // Использовать только в HTTPS в продакшене
      sameSite: 'lax', // Защита от CSRF атак
      maxAge: 60 * 60 * 24 * 30,
      path: '/', // Куки будут доступны на всех страницах сайта
    });
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
