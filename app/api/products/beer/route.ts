import { Endpoints, PruductsResponseType } from "../../types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const resCart = await fetch(process.env.API_URL! + Endpoints.cart);
  const resProducts = await fetch(process.env.API_URL! + Endpoints.beer);

  if (!resCart.ok || !resProducts.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // const parsedCart: PruductsResponseType = await resCart.json();
  const parsedRes: PruductsResponseType = await resProducts.json();

  // console.log({ parsedCart, parsedRes });

  const data = {
    ...parsedRes,
    content: parsedRes.content.map(({ imageName, ...rest }) => ({
      ...rest,
      imageName: imageName.map(
        (name) => process.env.API_URL! + Endpoints.beer + "/images/" + name
      ),
    })),
  };

  return NextResponse.json({ ...data });
}

export async function POST(request: NextRequest) {
  const resProduct = await fetch(process.env.API_URL! + Endpoints.beer, {
    method: "POST",
    body: request.body,
  });

  if (!resProduct.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const product = await resProduct.json();
  console.log("product", product);

  return NextResponse.json({ product });
}
