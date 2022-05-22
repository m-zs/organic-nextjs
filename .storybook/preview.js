import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { theme, GlobalStyles } from "../src/styles";

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
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));
