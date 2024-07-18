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

  // const oazaGuest = cookies().has("oaza-guest");
  // if (!oazaGuest) {
  //   const value = v4();
  //   response.cookies.set({
  //     name: "oaza-guest",
  //     value,
  //     path: "/",
  //   });

  //   return response;
  // }

  // const oazaCookie = cookies().get("oaza-guest");

  // console.log(
  //   "--------------------------middleware---------------------------"
  // );
  
  // response.cookies.set({
  //   ...oazaCookie,
  //   path: "/",
  //   // httpOnly: true,
  //   // secure: false,
  // });

  return response;
}

export const config = {
  matcher: "/:path*",
};
