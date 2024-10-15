import { /*NextRequest, */NextResponse } from 'next/server';

export async function GET(/*req: NextRequest*/) {
  return NextResponse.json({ error: 'This is a GET request error' });
}

export async function POST(/*req: NextRequest*/) {
  return NextResponse.json({ error: 'This is a POST request error' });
}