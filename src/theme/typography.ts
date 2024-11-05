import { Typography } from "./theme.types";

export const typography: Typography = {
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  lineHeights: {
    normal: 1.571,
    heading: 1.2,
  },
  letterSpacing: {
    normal: "0em",
    wide: "0.02em",
  },
  fonts: {
    body: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
    heading: "'Poppins', sans-serif",
  },
};
