import type { AppProps } from "next/app";
import { NextPage } from "next";

export const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);
