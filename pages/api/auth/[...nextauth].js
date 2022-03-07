import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { Routes } from "../../../src/consts/router";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: Routes.SIGN_IN,
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#1A3764", // Hex color code
    logo: "https://sosua.help/logo.svg", // Absolute URL to image
  },
  callbacks: {
    redirect({ url }) {
      return url ?? Routes.HOMEPAGE;
    },
  },
});
