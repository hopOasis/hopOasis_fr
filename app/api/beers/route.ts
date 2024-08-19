import { NextResponse } from 'next/server';
import { ApiEndpoints } from '@/app/static/constants';
import { BeersApiResponse } from '@/app/types/beers';

export async function GET() {
  const res = await fetch(ApiEndpoints.beers);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsedRes: BeersApiResponse = await res.json();

  return NextResponse.json({ ...parsedRes });
}
