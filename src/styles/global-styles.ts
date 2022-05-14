import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
  ${({ theme }) => `
    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.fonts.main};
      color: ${theme.colors.common.darkGray};
    }

    a, button {
      all: unset;
      cursor: pointer;
    }

    *:focus-visible {
      outline: 2px solid ${theme.colors.primary.main};
    }
  `}
`;
