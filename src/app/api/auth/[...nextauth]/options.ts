import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID_PROD as string || process.env.GITHUB_ID_DEV as string,
      clientSecret: process.env.GITHUB_SECRET_PROD as string || process.env.GITHUB_SECRET_DEV as string,
    }),
  ],
};
