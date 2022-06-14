import React, { useMemo, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// import { ThemeProvider } from "app/provider/theme";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import GlobalStyles from "../src/style/globalStyle";
import { ProgressToastProvider } from "../src/providers/ProgressToastProvider";
import { useBreakPointGetter } from "../src/hooks/useBreakPointGetter";
import { AppProps } from "next/app";
import useAuth from "../src/hooks/useAuth";
import { User } from "firebase/auth";
import { getAccountDTO } from "../src/client-api/account";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import * as gtag from "../lib/gtag";
import Gtag from "./gtag";
import GAtag from "./gatag";
import * as fbq from "../lib/fpixel";
import FPixel from "./fpixel";

export const AuthContext = createContext<{
  identity: null | User | undefined;
  account: null | getAccountDTO;
  getTokenForAPI: null | (() => Promise<string>);
  refetchAccount: null | (() => Promise<void>);
  loaded: boolean;
}>({
  identity: null,
  getTokenForAPI: null,
  account: null,
  refetchAccount: null,
  loaded: false,
});

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const getBreakPoint = useBreakPointGetter();
  const theme = useMemo(() => ({ ...primary, getBreakPoint }), [getBreakPoint]);
  const { t } = useTranslation();
  const { identity, account, getTokenForAPI, loaded, refetchAccount } =
    useAuth();
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 2 * 60 * 1000,
            retry: false,
          },
        },
      })
  );

  useEffect(() => {
    if (!gtag.GA_TRACKING_ID) {
      return;
    }

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // fbq.pageview();

    const handleRouteChange = () => {
      // fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {fbq.FB_PIXEL_ID && <FPixel id={fbq.FB_PIXEL_ID} />}
      {gtag.GOOGLE_TAG_ID && <Gtag id={gtag.GOOGLE_TAG_ID} />}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <GlobalStyles />

          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta property="og:title" content={t("ogMeta.title")} />
            <meta property="og:description" content={t("ogMeta.description")} />
            <meta
              property="og:image"
              content="https://uasos.org/assets/fb_banner.png"
            />
            <meta property="og:image:type" content="image/png" />
          </Head>
          {gtag.GA_TRACKING_ID && <GAtag id={gtag.GA_TRACKING_ID} />}
          <ThemeProviderWeb theme={theme}>
            <ThemeProviderNative theme={theme}>
              <AuthContext.Provider
                value={{
                  identity,
                  account,
                  getTokenForAPI,
                  loaded,
                  refetchAccount,
                }}
              >
                <ProgressToastProvider>
                  <Component {...pageProps} />
                </ProgressToastProvider>
              </AuthContext.Provider>
            </ThemeProviderNative>
          </ThemeProviderWeb>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
