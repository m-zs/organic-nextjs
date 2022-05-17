import styled from "styled-components";

export const Nav = styled("nav")<{ toggled: boolean }>`
  ${({ theme, toggled }) => `
    ${theme.breakpoints.down("md")} {
      visibility: ${toggled ? "visible" : "hidden"};
      pointer-events: ${toggled ? "all" : "none"};
      position: absolute;
      opacity: ${toggled ? 1 : 0};
      min-height: 100vh;
      width: 100%;
      top: 80px;
      left: 0;
      display: flex;
      flex-direction: column;
      background: ${theme.colors.common.white};
      z-index: 99;
      transition-duration: ${theme.timings.regular};
      transform: translateY(${toggled ? 0 : "10px"});
      padding: 20px;
      box-sizing: border-box;
    }
  `}
`;

export const StyledLink = styled("a")<{ active: boolean }>`
  ${({ theme, active }) => `
    font-family: ${theme.fonts.highlight};
    font-size: 1.1rem;
    color: ${active ? theme.colors.primary.main : theme.colors.common.darkGray};
    padding: 5px 15px;
    position: relative;
    display: inline-block;
    transition-duration: ${theme.timings.regular};

    &:after {
      content: ' ';
      width: 0px;
      height: 2px;
      opacity: 0;
      background: ${
        active ? theme.colors.primary.main : theme.colors.common.darkGray
      };
      position: absolute;
      top: 0;
      left: 15px;
      transition-duration: ${theme.timings.regular};
    }

    &:hover {
      &:after {
        opacity: 1;
        width: calc(60% - 25px);
      }
    }

    ${theme.breakpoints.down("md")} {
      padding: 15px;
      display: inline-flex;
      margin: 0 auto;
    }
  `}
`;
