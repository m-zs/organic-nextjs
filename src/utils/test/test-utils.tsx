import React, { FC, ReactElement, ReactNode } from "react";
import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "src/styles";
import { LocalizationProvider } from "src/context/localization";
import en from "src/content/translations/en.json";

const messages = {
  en,
};

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LocalizationProvider locale={"en"} messages={messages["en"]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender };
