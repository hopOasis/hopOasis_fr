import { Endpoints } from "@/app/api/types";
import { ProductType } from "@/app/types/types";
import { NextResponse } from "next/server";

type Params = {
  id: number;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(process.env.API_URL! + Endpoints.beer + "/" + id);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const parsedRes: ProductType = await res.json();
  const data = {
    ...parsedRes,
    imageName: parsedRes.imageName.map(
      (name) => process.env.API_URL! + Endpoints.beer + "/images/" + name
    ),
  };
  return NextResponse.json({ ...data });
}
