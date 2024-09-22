import { revalidateProductPage } from '@/app/actions';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  id: string;
};
export async function GET(_: NextRequest, context: { params: Params }) {
  const id = context.params.id;

  revalidateProductPage(id);
  return NextResponse.json({ message: 'success' });
}
