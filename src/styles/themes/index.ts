// src/styles/themes/index.ts
import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeType = keyof typeof themes;
export type Theme = typeof lightTheme;

export { lightTheme, darkTheme };