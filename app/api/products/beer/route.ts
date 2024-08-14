import { NextRequest, NextResponse } from "next/server";
import { Endpoints, ProductsResponseType } from "../../types";

export async function GET() {
  const resProducts = await fetch(process.env.API_URL + Endpoints.beer);
  if (!resProducts.ok) {
    console.log("error", resProducts);
    throw new Error("Failed to fetch data");
  }

  const parsedRes: ProductsResponseType = await resProducts.json();

  return NextResponse.json({ ...parsedRes });
}

export async function POST(request: NextRequest) {
  const resProduct = await fetch(process.env.API_URL + Endpoints.beer, {
    method: "POST",
    body: request.body,
  });

  if (!resProduct.ok) {
    console.log("error", resProduct);
    throw new Error("Failed to fetch data");
  }

  const product = await resProduct.json();

  return NextResponse.json({ product });
}
