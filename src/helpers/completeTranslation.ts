import { GetServerSidePropsResult } from "next";

export const completeTranslation = async <P>(
  authorizedProps: GetServerSidePropsResult<P>
): Promise<GetServerSidePropsResult<P>> => {
  return authorizedProps;
};
