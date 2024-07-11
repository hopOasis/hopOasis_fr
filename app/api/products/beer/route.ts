import { Endpoints, PruductsResponseType } from "../../types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const resProducts = await fetch(process.env.API_URL! + Endpoints.beer);

  if ( !resProducts.ok) {
    throw new Error("Failed to fetch data");
  }

  const parsedRes: PruductsResponseType = await resProducts.json();


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
  console.log("URL", process.env.API_URL! + Endpoints.beer);
  const resProduct = await fetch(process.env.API_URL! + Endpoints.beer, {
    method: "POST",
    body: request.body,
  });

  if (!resProduct.ok) {
    throw new Error("Failed to fetch data");
  }

  const product = await resProduct.json();

  return NextResponse.json({ product });
}
