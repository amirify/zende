import { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { mergeDeep } from "../../utils/themeUtils";
import { lightTheme, darkTheme } from "../../theme/themes";
import { Theme } from "../../theme/theme.types";

interface StyleProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  customTheme?: Theme;
  mode?: "light" | "dark";
}

export const StyleProvider: React.FC<StyleProviderProps> = ({
  children,
  defaultTheme,
  customTheme = {},
  mode = "light", // Default to light theme
}) => {
  // Set the theme based on mode
  const theme = defaultTheme || (mode === "dark" ? darkTheme : lightTheme);

  // Merge with custom theme if provided
  const finalTheme = mergeDeep(theme, customTheme);

  return (
    <EmotionThemeProvider theme={finalTheme}>{children}</EmotionThemeProvider>
  );
};
