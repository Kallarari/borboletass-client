import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
    /*   async authorize({ password, username }) {
        const response = await axios
          .get(`api/users/Login?userName=${username}&password=${password}`)
          .then((res) => res);
        if (response.status > 300) return null;
        return (await response.data) ?? null;
      }, */
    }),
  ],
});
