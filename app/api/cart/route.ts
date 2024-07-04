import { NextRequest, NextResponse } from "next/server";
import { CartResponseType, Endpoints } from "../types";

export async function GET() {
  const res = await fetch(process.env.API_URL! + Endpoints.cart);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const parsedRes: CartResponseType = await res.json();

  console.log("parsed res", parsedRes);

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
  const path = request.nextUrl.searchParams.get("path");
  const body = await request.json();
  console.log({ path, body });
  const res = await fetch(process.env.API_URL! + Endpoints.cart, {
    method: "POST",
    body,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return NextResponse.json({ message: "sucsess" });
}
