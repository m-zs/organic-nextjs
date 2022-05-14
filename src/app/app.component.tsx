import { NextPage } from "next";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "src/styles";
import { LocalizationProvider } from "src/context/localization";
import { Locale } from "src/types/internalization";
import en from "src/content/translations/en.json";
import pl from "src/content/translations/pl.json";

const messages = {
  en,
  pl,
};

export const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  return (
    <LocalizationProvider
      locale={locale!}
      messages={messages[locale as Locale]}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps.page} />
      </ThemeProvider>
    </LocalizationProvider>
  );
};
