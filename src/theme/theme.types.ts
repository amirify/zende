export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  radii: Radii;
  shadows: Shadows;
}

export interface Colors {
  primary: string; // The main brand color used for primary actions or highlights
  primaryVariant: string; // A variant of the primary color, used for emphasis, hover states, or highlights
  onPrimary: string; // Text or icon color for components with a primary background
  secondary: string; // A companion to the primary color, used in gradients, color transitions, or to complement primary actions
  secondaryVariant: string; // A variant of the secondary color, applied for emphasis, hover states, or transitions alongside the secondary color
  onSecondary: string; // Text or icon color for components with a secondary background
  surface: string; // Background color for elevated surfaces or components (e.g., cards, modals)
  surfaceVariant: string; // A variant of the surface color for emphasis, hover states, or highlights
  onSurface: string; // Text or icon color for components with a surface background
  neutral: string; // Neutral color used for disabled states, borders, dividers, or less prominent UI elements
  onNeutral: string; // Text or icon color for components with a neutral background
  background: string; // The global background color of the application
  text: string; // The default color for main text content throughout the app
}

export interface Radii {
  sm: string;
  md: string;
  lg: string;
  pill: string;
  circle: string;
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Spacing {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

export interface Typography {
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  fontWeights: {
    light: number;
    normal: number;
    bold: number;
  };
  lineHeights: {
    normal: number;
    heading: number;
  };
  letterSpacing: {
    normal: string;
    wide: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
}
