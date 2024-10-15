import { /*NextRequest,*/ NextResponse } from 'next/server';
import AzureADProvider from 'next-auth/providers/azure-ad';

export async function GET(/*_req: NextRequest */) {
  const providers = [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ];

  return NextResponse.json(providers);
}