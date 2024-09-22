import { revalidate } from '@/app/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidate();
  return NextResponse.json({ message: 'success' });
}
