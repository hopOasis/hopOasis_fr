import { NextResponse } from 'next/server';

export async function GET() {
  const params = new URLSearchParams({
    apiKey: process.env.GEOLOCATION_API_KEY,
    fields: 'city',
  });

  const resLocation = await fetch(
    `${process.env.GEOLOCATION_URL}?${params.toString()}`,
  );

  if (!resLocation.ok) {
    throw new Error('Failed to fetch LOCATION data');
  }

  const parsedRes = await resLocation.json();

  return NextResponse.json({ ...parsedRes });
}
