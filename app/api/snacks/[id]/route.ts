import { ApiEndpoints } from '@/app/static/constants';
import { SnackType } from '@/app/types/snacks';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: number;
};

export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;
  const res = await fetch(`${ApiEndpoints.snacks}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch SNACK data');
  }

  const parsedRes: SnackType = await res.json();

  return NextResponse.json({ ...parsedRes });
}
