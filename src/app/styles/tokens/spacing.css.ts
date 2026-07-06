import { createGlobalTheme } from '@vanilla-extract/css';

export const spacing = createGlobalTheme(':root', {
  none: '0',
  xxs: '0.125rem',   // 2px
  xs: '0.25rem',      // 4px
  sm: '0.5rem',       // 8px
  md: '0.75rem',      // 12px
  lg: '1rem',         // 16px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.75rem',   // 28px
  '4xl': '2rem',      // 32px
  '5xl': '2.5rem',    // 40px
  '6xl': '3rem',      // 48px
  '7xl': '3.5rem',    // 56px
  '8xl': '4rem',      // 64px
  '9xl': '4.5rem',    // 72px
  '10xl': '5rem',     // 80px
});

export const radii = createGlobalTheme(':root', {
  none: '0',
  sm: '0.25rem',      // 4px
  md: '0.5rem',       // 8px
  lg: '0.75rem',      // 12px
  xl: '1rem',         // 16px
  '2xl': '1.25rem',   // 20px
  '3xl': '1.5rem',    // 24px
  '4xl': '2rem',      // 32px
  '5xl': '2.5rem',    // 40px
  full: '9999px',
});

export type Spacing = typeof spacing;
export type Radii = typeof radii;