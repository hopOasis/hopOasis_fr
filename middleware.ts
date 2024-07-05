import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set("x-session-id", "session-id");
  const cookieStore = cookies();
  console.log(cookieStore);
  console.log(
    "--------------------------middleware---------------------------"
  );

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: "/:path*", // Применяет middleware ко всем маршрутам
};
