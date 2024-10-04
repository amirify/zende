import type { Preview } from "@storybook/react";
import { Global, css, ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const lightTheme = {
    colors: {
        primary: '#ff0000',
        background: '#ffffff',
    },
};

const darkTheme = {
    colors: {
        primary: '#000000',
        background: '#333333',
    },
};


/* TODO: replace with your own global styles, or remove */
const GlobalStyles = () => (
    <Global
        styles={css`
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

    decorators: [withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles,
    })]
};

export default preview;
