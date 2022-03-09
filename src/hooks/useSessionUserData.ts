import { useSession } from "next-auth/react";

export type AuthSessionUserData = {
  name: string;
  email: string;
  image: string;
};

export const useSessionUserData = (): AuthSessionUserData => {
  const session = useSession();
  const { name, email, image } = session.data.user;

  return {
    name,
    email,
    image,
  };
};
