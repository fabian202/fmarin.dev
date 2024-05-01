import { NextResponse  } from "next/server";
import data from '../data/commands.json'

export async function GET() {
  return NextResponse.json(data)
}
