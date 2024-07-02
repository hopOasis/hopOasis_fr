import { NextResponse } from "next/server";
import { CartResponseType, Endpoints } from "../types";

export async function GET(request: Request) {
  const res = await fetch(process.env.API_URL! + Endpoints.cart);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const parsedRes: CartResponseType = await res.json();

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
