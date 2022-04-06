import { useMemo, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../src/style/globalStyle";
import { useBreakPointGetter } from "../src/hooks/useBreakPointGetter";
import { AppProps } from "next/app";
import useAuth from "../src/hooks/useAuth";
import { User } from "firebase/auth";
import { getAccountDTO } from "../src/client-api/account";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import * as gtag from "../lib/gtag";
import Gtag from "./gtag";
import * as fbq from "../lib/fpixel";

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

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <GlobalStyles />
          <SessionProvider session={session}>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta property="og:title" content={t("ogMeta.title")} />
              <meta
                property="og:description"
                content={t("ogMeta.description")}
              />
              <meta
                property="og:image"
                content="https://uasos.org/assets/fb_banner.png"
              />
              <meta property="og:image:type" content="image/png" />
            </Head>
            {gtag.GA_TRACKING_ID && <Gtag id={gtag.GA_TRACKING_ID} />}
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
                  <Component {...pageProps} />
                </AuthContext.Provider>
              </ThemeProviderNative>
            </ThemeProviderWeb>
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
