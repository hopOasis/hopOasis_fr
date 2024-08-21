import { ApiEndpoints } from "@/app/static/constants";
import { BeerType } from "@/app/types/beers";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.beers}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch BEER data");
  }
  const parsedRes: BeerType = await res.json();

  return NextResponse.json({ ...parsedRes });
}
