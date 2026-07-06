import { createGlobalTheme } from '@vanilla-extract/css';

export const typography = createGlobalTheme(':root', {
  fontFamily: {
    body: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
    display: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
  },

  fontSize: {
    xs: '0.6875rem',   // 11px
    sm: '0.75rem',     // 12px
    md: '0.8125rem',   // 13px
    base: '0.875rem',  // 14px
    lg: '1rem',        // 16px
    xl: '1.125rem',    // 18px
    '2xl': '1.25rem',  // 20px
    '3xl': '1.5rem',   // 24px
    '4xl': '1.75rem',  // 28px
    '5xl': '2rem',     // 32px
    '6xl': '2.25rem',  // 36px
    '7xl': '2.5rem',   // 40px
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em',
  },
});

export type Typography = typeof typography;