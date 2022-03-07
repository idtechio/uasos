import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { ParsedUrlQuery } from "querystring";

/*
 * Facing issue with combination of `next-auth` and `next-18next`
 * After changing page language, session from next-auth is empty, page needs to be reloaded
 * See issue https://github.com/isaachinman/next-i18next/issues/1680
 * Using workaround https://github.com/isaachinman/next-i18next/issues/1680#issuecomment-1039649501
 */

export const withSession = <P>(
  gssp: (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
    session: Session
  ) => Promise<GetServerSidePropsResult<P>>
): GetServerSideProps => {
  return async (context) => {
    const session = await getSession({ req: context.req });
    return gssp(context, session);
  };
};
