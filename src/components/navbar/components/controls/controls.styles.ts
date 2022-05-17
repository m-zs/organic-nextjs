import styled from "styled-components";

export const Controls = styled("div")`
  display: flex;
  position: relative;
  z-index: 99;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: auto;
  }
`;

export const ControlButton = styled("button")<{ active: boolean }>`
  ${({ theme, active }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 30px;
    height: 30px;

    svg {
      pointer-events: none;
    }

    svg * {
      transition-duration: ${theme.timings.regular};
      ${active && `fill: ${theme.colors.primary.main}`};
      pointer-events: none;
    }

    &:hover {
      svg * {
        fill: ${theme.colors.primary.main};
      }
    }
  `}
`;

export const PopperContent = styled("div")`
  ${({ theme }) => `
    border-radius: 4px;
    background: ${theme.colors.primary.main};
    color: ${theme.colors.common.white};
    overflow: hidden;

    ${theme.breakpoints.down("md")} {
      margin-top: 10px;
    }
  `}
`;

export const LocaleButton = styled("div")`
  ${({ theme }) => `
    padding: 12px 30px;

    &:hover, &:focus-visible {
      background: ${theme.colors.primary.light};
      outline: none;
      text-decoration: underline;
    }
  `}
`;
