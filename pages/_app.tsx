import { useMemo } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../src/style/globalStyle";
import { useBreakPointGetter } from "../src/hooks/useBreakPointGetter";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getBreakPoint = useBreakPointGetter();
  const theme = useMemo(() => ({ ...primary, getBreakPoint }), [getBreakPoint]);

  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
