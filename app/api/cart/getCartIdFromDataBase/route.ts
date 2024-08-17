import { NextRequest, NextResponse } from 'next/server';
import { DB } from '../../DB';

export async function POST(req: NextRequest) {
  const body = req.json();
  const cartId = DB.readDB();

  return NextResponse.json({ cartId });
}
