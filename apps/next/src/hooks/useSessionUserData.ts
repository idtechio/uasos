import { useSession } from "next-auth/react";

export const useSessionUserData = () => {
  const session = useSession();
  const { name, email, image } = session.data?.user ?? {};

  return {
    name: name ?? undefined,
    email: email ?? undefined,
    image,
  };
};
