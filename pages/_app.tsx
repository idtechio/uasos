import { useMemo, createContext, useEffect } from "react";
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
      <GlobalStyles />
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={t("ogMeta.title")} />
          <meta property="og:description" content={t("ogMeta.description")} />
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
    </>
  );
}

export default appWithTranslation(MyApp);
