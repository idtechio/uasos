import { getSession } from "next-auth/react";

/*
 * Facing issue with combination of `next-auth` and `next-18next`
 * After changing page language, session from next-auth is empty, page needs to be reloaded
 * See issue https://github.com/isaachinman/next-i18next/issues/1680
 * Using workaround https://github.com/isaachinman/next-i18next/issues/1680#issuecomment-1039649501
 */

export const withSession = (gssp) => {
  return async (context) => {
    const session = await getSession({ req: context.req });
    return gssp(context, session);
  };
};
