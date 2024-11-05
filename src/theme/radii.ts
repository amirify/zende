import { Radii } from "./theme.types";

const baseRadius = 0.25; // Base radius in rem (4px)

export const radii: Radii = {
  sm: `${baseRadius}rem`, // 4px = 0.25rem
  md: `${baseRadius * 2}rem`, // 8px = 0.5rem
  lg: `${baseRadius * 3}rem`, // 12px = 0.75rem
  pill: `${baseRadius * 40}rem`, // Pill shape = 160px = 10rem
  circle: "50%", // Circle
};
