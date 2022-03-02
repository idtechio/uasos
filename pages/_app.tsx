import * as React from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={primary}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
