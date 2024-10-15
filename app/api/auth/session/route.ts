import {/* NextRequest, */NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export async function GET(/*req: NextRequest, res: NextResponse*/) {
  try {
    const session = await getSession();

    if (session) {
      // Signed in
      return NextResponse.json(session);
    } else {
      // Not Signed in
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }
  } catch (error) {
    console.error("Error fetching session", error);
    return NextResponse.json({ error: error?.toString() }, { status: 500 });
  }
}