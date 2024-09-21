import { DBService } from '@/app/api/DB/DBService';
import { ApiEndpoints, oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { separateFilter, separateId } from '@/app/utils';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: string;
};
export async function POST(req: NextRequest, context: { params: Params }) {
  const body = await req.json();
  const id = context.params.id;

  const res = await fetch(`${ApiEndpoints[separateFilter(id)]}/${separateId(id)}/ratings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body }),
  });

  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);
  await DBService.addVote({ cookie: oazaCookie, productId: id });
  
  if (!res.ok) {
    throw new Error('Failed to fetch RATING data');
  }

  return NextResponse.json({ message: 'succsess' });
}
