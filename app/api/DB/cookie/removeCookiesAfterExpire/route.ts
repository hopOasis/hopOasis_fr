import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { oaza_guest } from '@/app/static/constants';
import { DBService } from '../../DBService';

export async function GET() {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);
  await DBService.removeCookiesAfterExpireFromDataBase(oazaCookie);
  return NextResponse.json({ message: 'success' });
}
