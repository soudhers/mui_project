import {NextRequest, NextResponse } from 'next/server';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import authOptions from '../[...nextauth]/options';

export async function GET(/*_req: NextRequest*/) {
  try {
    const providers = await getProviders();
    return NextResponse.json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    return NextResponse.json({ error: 'Error fetching providers' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { providerId, callbackUrl } = await req.json();
  console.log('SignIn API: providerId, call back URL:', providerId, callbackUrl);
  try {
    // Get the session to ensure the user is not already signed in
    const session = await getServerSession(authOptions);
    if (session) {
      return NextResponse.redirect(callbackUrl || '/');
    }

    // Construct the sign-in URL manually
    const signInUrl = `${process.env.NEXTAUTH_URL}/api/auth/signin/${providerId}?callbackUrl=${encodeURIComponent(callbackUrl || '/')}`;
    return NextResponse.redirect(signInUrl);
  } catch (error) {
    console.error('Error signing in:', error);
    return NextResponse.json({ error: 'Error signing in' }, { status: 500 });
  }
}