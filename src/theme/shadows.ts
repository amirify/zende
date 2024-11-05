import { Shadows } from "./theme.types";

const baseShadowOffset = 0.0625; // 1px = 0.0625rem (1px / 16px)

export const shadows: Shadows = {
  sm: `0rem ${baseShadowOffset * 1}rem ${baseShadowOffset * 2}rem rgba(0, 0, 0, 0.12)`,
  md: `0rem ${baseShadowOffset * 3}rem ${baseShadowOffset * 6}rem rgba(0, 0, 0, 0.16)`,
  lg: `0rem ${baseShadowOffset * 6}rem ${baseShadowOffset * 12}rem rgba(0, 0, 0, 0.15)`,
  xl: `0rem ${baseShadowOffset * 10}rem ${baseShadowOffset * 20}rem rgba(0, 0, 0, 0.2)`,
  xxl: `0rem ${baseShadowOffset * 12}rem ${baseShadowOffset * 24}rem rgba(0, 0, 0, 0.25)`,
};
