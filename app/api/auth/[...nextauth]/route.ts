import NextAuth, { AuthOptions } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import options from './options'

// import { connectToDatabase } from '@utils/database'; // TODO: Uncomment when deployed

const handler = NextAuth(options);

export {handler as GET, handler as POST}