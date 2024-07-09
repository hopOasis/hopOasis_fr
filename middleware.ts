import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Content-Type", "application/json");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // console.log(
  //   "--------------------------middleware---------------------------"
  // );

  response.cookies.set({
    name: "JSESSIONID",
    value: "3049223C17C032FC4D7DEBB78A7BDD8F",
    path: "/",
    httpOnly: true,
    secure: false,
  });

  return response;
}

export const config = {
  matcher: "/:path*",
};
