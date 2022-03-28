import { useMemo, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
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

export const AuthContext = createContext<{
  identity: null | User | undefined;
  account: null | getAccountDTO;
  getTokenForAPI: null | (() => Promise<string>);
  loaded: boolean;
}>({ identity: null, getTokenForAPI: null, account: null, loaded: false });
import * as gtag from "../lib/gtag";
import Gtag from "./gtag";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getBreakPoint = useBreakPointGetter();
  const theme = useMemo(() => ({ ...primary, getBreakPoint }), [getBreakPoint]);
  const { t } = useTranslation();
  const { identity, account, getTokenForAPI, loaded } = useAuth();
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 2 * 60 * 1000, retry: false } },
      })
  );

  console.log("API_KEY");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  console.log("AUTH_DOMAIN");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
  console.log("PROJECT_ID");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
  console.log("STORAGE_BUCKET");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
  console.log("SENDER_ID");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID);
  console.log("APP_ID");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID);

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

  return (
    <>
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
                  value={{ identity, account, getTokenForAPI, loaded }}
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
