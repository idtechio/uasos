import { useMemo } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../src/style/globalStyle";
import { useBreakPointGetter } from "../src/hooks/useBreakPointGetter";
import { useEffect } from "react";
import { init } from "./../src/helpers/ga";
import { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getBreakPoint = useBreakPointGetter();
  const theme = useMemo(() => ({ ...primary, getBreakPoint }), [getBreakPoint]);

  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyDMkJxobsqjQOKeOgZh0bLOwTptF3DfTyM",
    authDomain: "ukrn-hlpr-dev.firebaseapp.com",
    projectId: "ukrn-hlpr-dev",
    storageBucket: "ukrn-hlpr-dev.appspot.com",
    messagingSenderId: "727398461288",
    appId: "1:727398461288:web:af67d40f717ab97143b0dd",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

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
