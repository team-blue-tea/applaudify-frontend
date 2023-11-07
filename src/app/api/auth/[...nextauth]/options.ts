import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import LinkedInProvider from "next-auth/providers/linkedin";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID_PROD as string || process.env.GITHUB_ID_DEV as string,
      clientSecret: process.env.GITHUB_SECRET_PROD as string || process.env.GITHUB_SECRET_DEV as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
};
