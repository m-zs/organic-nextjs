import styled from "styled-components";

export const Wrapper = styled("header")`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 80px;
  }
`;

export const Content = styled("div")`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const Logo = styled("a")`
  ${({ theme }) => `
    color: ${theme.colors.primary.main};
    font-family: ${theme.fonts.highlight};
    font-size: 1.4rem;
    position: relative;
    display: block;
    transition-duration: ${theme.timings.regular};
    font-weight: 700;

    &:after {
      content: ' ';
      width: 100%;
      height: 100%;
      background: ${theme.colors.primary.main};
      left: -5px;
      bottom: -10px;
      position: absolute;
      z-index: -1;
      transition-duration: ${theme.timings.regular};
      opacity: 0;
      padding: 2px 5px;
    }

    &:hover {
      color: ${theme.colors.common.white};

      &:after {
        bottom: -2px;
        opacity: 1;
      }
    }
  `}
`;

export const HamburgerContainer = styled("div")`
  ${({ theme }) => `
    display: none;
    background: ${theme.colors.primary.main};
    border-radius: 50%;

    ${theme.breakpoints.down("md")} {
      display: block;
    }
  `}
`;
