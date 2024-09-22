import { NextResponse } from 'next/server';
import { DBService } from '../../../DBService';

export async function GET() {
  const data = await DBService.readDB();

  return NextResponse.json({ data, message: 'success' });
}
