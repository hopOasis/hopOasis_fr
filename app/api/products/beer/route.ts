import { Endpoints, PruductsResponseType } from "../../types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(process.env.API_URL! + Endpoints.beer);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const parsedRes: PruductsResponseType = await res.json();
  
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
