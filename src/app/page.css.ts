import { style } from '@vanilla-extract/css';
import { colors } from './styles/tokens/colors.css';

export const page = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  background: colors.gradient.primary,
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '36rem',
  padding: '2rem',
  borderRadius: '1.5rem',
  background: colors.background.glass,
  border: `1px solid ${colors.border.light}`,
  boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.24)',
});

export const eyebrow = style({
  fontSize: '0.875rem',
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: colors.status.success,
});

export const accent = style({
  color: colors.primary[600],
  fontWeight: 600,
});
