import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const {city} = await request.json();
  const resCitiesLibrary = await fetch(process.env.NEW_POST_URL!, {
    method: "POST",
    body: JSON.stringify({
      apiKey: process.env.NEW_POST_API_KEY!,
      modelName: "AddressGeneral",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName: city,
        // Limit: "50",
        // Page: "2",
      },
    }),
  });

  if (!resCitiesLibrary.ok) {
    throw new Error("Failed to fetch NEW_POST data");
  }

  const parsedRes = await resCitiesLibrary.json();

  return NextResponse.json({ ...parsedRes });
}
