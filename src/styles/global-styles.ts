import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
  ${({ theme }) => `
    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.fonts.main};
    }
  `}
`;
