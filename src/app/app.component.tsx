import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "src/styles";

export const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);
