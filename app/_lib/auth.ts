import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.NEXT_AUTH_GOOGLE_ID,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.NEXT_AUTH_GITHUB_ID,
      clientSecret: process.env.NEXT_AUTH_GITHUB_SECRET,
    }),
  ],
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
