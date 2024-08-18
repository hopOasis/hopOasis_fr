import { ApiEndpoints } from "@/app/static/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await fetch(
    `${ApiEndpoints.rating}/${body.id}/ratings`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ratingValue: body.value }),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return NextResponse.json({ message: "succsess" });
}
