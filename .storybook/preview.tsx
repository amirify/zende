import React from "react";
import type { Preview } from "@storybook/react";
import { css, ThemeProvider, Global } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { lightTheme, darkTheme } from "../src/theme/themes";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
    `}
  />
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
  tags: ["autodocs"],
};

export default preview;
