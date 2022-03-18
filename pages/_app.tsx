import { useMemo } from "react";
import Head from "next/head";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../src/style/globalStyle";
import { useBreakPointGetter } from "../src/hooks/useBreakPointGetter";
import { useEffect } from "react";
import { init } from "./../src/helpers/ga";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getBreakPoint = useBreakPointGetter();
  const theme = useMemo(() => ({ ...primary, getBreakPoint }), [getBreakPoint]);
  const { t } = useTranslation();

  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);

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
        <ThemeProviderWeb theme={theme}>
          <ThemeProviderNative theme={theme}>
            <Component {...pageProps} />
          </ThemeProviderNative>
        </ThemeProviderWeb>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
