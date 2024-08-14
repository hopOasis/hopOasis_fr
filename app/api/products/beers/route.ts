import { NextRequest, NextResponse } from "next/server";
import { ApiEndpoints, ProductsResponseType } from "../../types";

export async function GET() {
  const resProducts = await fetch(ApiEndpoints.beer);
  if (!resProducts.ok) {
    throw new Error("Failed to fetch data");
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}

export async function POST(request: NextRequest) {
  const resProduct = await fetch(ApiEndpoints.beer, {
    method: "POST",
    body: request.body,
  });

  if (!resProduct.ok) {
    throw new Error("Failed to fetch data");
  }

  const product = await resProduct.json();

  return NextResponse.json({ product });
}
