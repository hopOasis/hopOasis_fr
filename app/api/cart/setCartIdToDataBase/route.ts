import { NextRequest, NextResponse } from 'next/server';
import { DB } from '../../DB';

export async function POST(request: NextRequest) {
  const body = await request.json();
  DB.writeDB(body);
  return NextResponse.json({ message: 'succsess' });
}
