import { ApiEndpoints } from '@/app/static/constants';
import { SetsType } from '@/app/types/sets';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.sets}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch SET data');
  }

  const parsedRes: SetsType = await res.json();

  return NextResponse.json({ ...parsedRes });
}
