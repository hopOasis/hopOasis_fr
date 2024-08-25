import { ApiEndpoints } from '@/app/static/constants';
import { separateId } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: string;
};
export async function POST(req: NextRequest, context: { params: Params }) {
  const body = await req.json();
  const id = context.params.id;

  const res = await fetch(`${ApiEndpoints.beers}/${separateId(id)}/ratings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch RATING data');
  }

  return NextResponse.json({ message: 'succsess' });
}
