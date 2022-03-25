import { GetServerSidePropsResult } from "next";
// import { Session } from "next-auth";
import { Routes } from "../consts/router";

export const redirectIfUnauthorized = async <P>(
  session: any | null,
  authorizedProps: GetServerSidePropsResult<P>
): Promise<GetServerSidePropsResult<P>> => {
  if (!session) {
    return {
      redirect: {
        destination: Routes.SIGN_IN,
        permanent: false,
      },
    };
  }

  return authorizedProps;
};
