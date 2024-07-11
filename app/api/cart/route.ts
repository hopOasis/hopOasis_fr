import { NextRequest, NextResponse } from "next/server";
import { CartResponseType, Endpoints } from "../types";

export async function GET(request: NextRequest) {
  const headers = new Headers(request.headers);
  const res = await fetch(process.env.API_URL! + Endpoints.cart, {
    headers,
  });
  if (!res.ok) {
    throw new Error("Failed to GET fetch CART data");
  }

  const parsedRes: CartResponseType = await res.json();

  // console.log("get cart/ parsed-res", parsedRes);

  const data = {
    ...parsedRes,
    items: parsedRes.items.map(({ imageName, ...rest }) => ({
      ...rest,
      imageName: imageName.map(
        (name) => process.env.API_URL! + Endpoints.beer + "/images/" + name
      ),
    })),
  };

  return NextResponse.json({ ...data });
}

export async function POST(request: NextRequest) {
  // const cook = cookies();
  // console.log("REQUEST", cook);

  const body = await request.json();
  const requestHeaders = new Headers(request.headers);

  const res = await fetch(process.env.API_URL! + Endpoints.cart + "/items", {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(body),
    credentials: "include",
  });
  if (!res.ok) {
    console.log(res.status);
    throw new Error("Failed to POST fetch CART data");
  }

  return NextResponse.json({ message: "sucsess" });
}
