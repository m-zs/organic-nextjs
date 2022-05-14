const breakpoints = { sm: "600px", md: "900px", lg: "1200px", xl: "1536px" };

export const theme = {
  fonts: {
    main: "Open Sans, sans-serif",
    highlight: "Montserrat, sans-serif",
  },
  colors: {
    primary: {
      light: "#A9F2BD",
      main: "#9DE6B1",
    },
    common: {
      white: "#FFF",
      darkGray: "#534A4A",
    },
  },
  timings: {
    regular: "0.3s",
  },
  containers: {
    big: "1200px",
  },
  breakpoints: {
    ...breakpoints,
    up: (breakpoint: keyof typeof breakpoints) =>
      `@media (min-width: ${breakpoint})`,
    down: (breakpoint: keyof typeof breakpoints) =>
      `@media (max-width: ${breakpoint})`,
  },
};
