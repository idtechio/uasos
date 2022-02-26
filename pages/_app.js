import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components/native";
import { primary, secendary } from "../src/style/theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={primary}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
