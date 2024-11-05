import { Spacing } from "./theme.types";

const baseSpacing = 0.125;

export const spacing: Spacing = {
  xxs: `${baseSpacing}rem`,          // 0.125rem (2px)
  xs: `${baseSpacing * 2}rem`,       // 0.25rem (4px)
  sm: `${baseSpacing * 4}rem`,       // 0.5rem (8px)
  md: `${baseSpacing * 8}rem`,       // 1rem (16px)
  lg: `${baseSpacing * 12}rem`,      // 1.5rem (24px)
  xl: `${baseSpacing * 16}rem`,      // 2rem (32px)
  xxl: `${baseSpacing * 20}rem`,     // 2.5rem (40px)
  xxxl: `${baseSpacing * 24}rem`,    // 3rem (48px)
};
