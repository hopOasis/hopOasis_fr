import { NextRequest, NextResponse } from "next/server";
import { DB } from "../DB";

export async function GET() {
  const cart = DB.readDB();
  return NextResponse.json({ message: "sucsess", cart });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  DB.writeDB(body);
  return NextResponse.json({ message: "sucsess" });
}

export async function DELETE() {
  DB.removeRecord("id");
  return NextResponse.json({ message: "sucsess" });
}
