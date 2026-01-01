import brandConfig from './brand.json';

export interface BrandColors {
  primary: {
    DEFAULT: string;
    dark: string;
    light: string;
  };
  accent: {
    DEFAULT: string;
    dark: string;
    light: string;
  };
  background: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  onPrimary: string;
  onAccent: string;
  footer: {
    accent: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    surface: string;
    border: string;
  };
}

export interface BrandTypography {
  heading: string;
  body: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  colors: BrandColors;
  typography: BrandTypography;
}

export const brand = brandConfig as BrandConfig;
