import type { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const options: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID || '',
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || '',
      tenantId: process.env.AZURE_AD_TENANT_ID || '',
      authorization: {
        url: "https://login.microsoftonline.com/a3299bba-ade6-4965-b011-bada8d1d9558/oauth2/v2.0/authorize",
        params: {
          scope: "email profile offline_access",
        },
      },
  }),

  // Add other providers here
],
  callbacks: {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
   async signIn({ user, account, profile, email, credentials }) {
     try {
        //await connectToDatabase(); // TODO: Connect to the database, when deployed
       console.log('AZURE AD signIn: ', user, account, profile, email, credentials);

        // const { db } = await connectToDatabase();
        // const userCollection = db.collection('users');
        // const userExists = await userCollection().findOne({
        //   email: email,
        // });
        // if (!userExists) {
        //   await userCollection().insertOne({
        //     email: email,
        //     name: profile.name,
        //     image: profile.picture,
        //     provider: account.provider,
        //     providerId: account.id,
        //     providerAccountId: account.id,
        //     accessToken: credentials.accessToken,
        //     refreshToken: credentials.refreshToken,
        //     accessTokenExpires: credentials.expires,
        //   });
        // }
        return true;
      }
      catch (error) {
        console.error('Error in signIn callback:', error);
        throw error;
        return false;
      }
    },
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    async redirect({ url, baseUrl }) {
      console.log('AZURE AD redirect: ', url, baseUrl);
      // Ensure the redirect URL is correct
      return url.startsWith(baseUrl) ? `${url}/home1` : `${baseUrl}/home2`;
    },
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    async session({ session, token, user }) {
      console.log('AZURE AD session: ', session, token, user);
      return session;
    },
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('jwt: ', token, user, account, profile, isNewUser);
      return token;
    },
  },
  pages: {
    signIn: '/signin',          // Custom sign-in page
    signOut: '/signout',        // Custom sign-out page
    error: '/error',            // Custom error page
    verifyRequest: '/verify-request', // Custom verification request page
    newUser: '/new-user',       // Custom new user page (optional)
  },
};

export default options;