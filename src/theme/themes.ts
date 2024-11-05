import { Theme } from "./theme.types";
import { lightColors } from "./colors/lightColors";
import { darkColors } from "./colors/darkColors";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";

const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography,
  radii,
  shadows,
};

const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography,
  radii,
  shadows,
};

export { lightTheme, darkTheme };
