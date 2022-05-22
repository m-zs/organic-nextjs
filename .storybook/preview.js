import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { LocalizationProvider } from "../src/context/localization";
import { theme, GlobalStyles } from "../src/styles";
import en from "../src/content/translations/en.json";
import pl from "../src/content/translations/pl.json";

const messages = {
  en,
  pl,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locales: ["en", "pl"],
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <LocalizationProvider locale={"en"} messages={messages["en"]}>
      <GlobalStyles />
      {story()}
    </LocalizationProvider>
  </ThemeProvider>
));
