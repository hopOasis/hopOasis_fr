import { NextRequest, NextResponse } from 'next/server';
import { DB } from '../DB';

export async function GET() {
  try {
    const cart = DB.readDB();
    return NextResponse.json({ message: 'sucsess', cart });
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw new Error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    DB.writeDB(body);
    return NextResponse.json({ message: 'sucsess' });
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw new Error();
  }
}

export async function DELETE() {
  try {
    DB.removeRecord('id');
    return NextResponse.json({ message: 'sucsess' });
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw new Error();
  }
}
