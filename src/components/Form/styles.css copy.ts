import { colors } from '@/styles/tokens/colors.css';
import { radii, spacing } from '@/styles/tokens/spacing.css';
import { typography } from '@/styles/tokens/typography.css';
import { globalStyle, style } from '@vanilla-extract/css';
import {
  flexColumn,
  flexColumnCenter,
} from '@/styles/components/gridSystem.css';

export const label = style({
  fontSize: typography.fontSize.sm,
  color: 'rgba(255, 255, 255, 0.6)',
  fontWeight: typography.fontWeight.medium,
});

export const requiredLabel = style({
  color: colors.status.error,
});

export const form = style([flexColumnCenter, { gap: spacing.lg }]);

export const helperText = style({
  fontSize: typography.fontSize.xs,
  color: 'rgba(255, 255, 255, 0.3)',
  marginTop: spacing.xs,
});

export const fieldGroup = style([
  flexColumn,
  { width: '100%', gap: spacing.xs },
]);

export const fieldError = style({
  fontSize: typography.fontSize.xs,
  color: colors.status.error,
  marginTop: spacing.xs,
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.sm,
  padding: spacing.md,
  background: 'rgba(248, 113, 113, 0.1)',
  border: `1px solid ${colors.status.error}`,
  borderRadius: radii.lg,
  color: colors.status.error,
  fontSize: typography.fontSize.sm,
});

export const input = style({
  border: '1px solid rgba(167,139,250,0.2)',
  borderRadius: radii.lg,
  padding: spacing.lg,
});

export const inputError = style({
  borderColor: colors.status.error,
  selectors: {
    '&:focus': {
      borderColor: colors.status.error,
    },
  },
});

globalStyle(`${input} input`, {
  color: colors.text.primary,
});

globalStyle(`${input} input::placeholder`, {
  color: colors.text.primary,
  opacity: 0.7,
});

globalStyle(`${input} input:-webkit-autofill`, {
  WebkitTextFillColor: colors.text.primary,
});
