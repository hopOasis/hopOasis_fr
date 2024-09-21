import { NextResponse } from 'next/server';
import { DBService } from '../DBService';
import { cookies } from 'next/headers';
import { oaza_guest } from '@/app/static/constants';

export async function GET() {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);
  await DBService.saveCookieToDataBase(oazaCookie);
  return NextResponse.json({ message: 'success' });
}
