import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";
import {
  flexColumn,
  flexColumnCenter,
} from "@/styles/components/gridSystem.css";

export const label = style({
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.medium,
  color: colors.text.primary,
  opacity: 0.7,
});

export const requiredLabel = style({
  color: colors.status.error,
});

export const form = style([flexColumnCenter, { gap: spacing.lg }]);

export const helperText = style({
  fontSize: typography.fontSize.xs,
  color: "rgba(255, 255, 255, 0.3)",
  marginTop: spacing.xs,
});

export const fieldGroup = style([
  flexColumn,
  { width: "100%", gap: spacing.xs },
]);

export const fieldError = style({
  fontSize: typography.fontSize.xs,
  color: colors.status.error,
  marginTop: spacing.xs,
});

export const errorMessage = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: spacing.md,
  background: "rgba(248, 113, 113, 0.1)",
  border: `1px solid ${colors.status.error}`,
  borderRadius: radii.lg,
  color: colors.status.error,
  fontSize: typography.fontSize.sm,
});

export const input = style({
  borderRadius: radii.md,
  padding: spacing.lg,
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  transition: "all 0.25s ease",
  boxShadow: "0 2px 8px rgba(98, 0, 242, 0.04)",

  selectors: {
    "&:focus-within": {
      borderColor: colors.status.purple,
      boxShadow:
        "0 0 0 3px rgba(98, 0, 242, 0.12), 0 4px 16px rgba(98, 0, 242, 0.08)",
      background: "rgba(255, 255, 255, 0.35)",
    },
  },
});

export const inputError = style({
  borderColor: colors.status.error,
  selectors: {
    "&:focus": {
      borderColor: colors.status.error,
    },
  },
});

globalStyle(`${input} input`, {
  color: colors.text.primary,
  fontWeight: 500,
  outline: "none",
});

globalStyle(`${input} input::placeholder`, {
  color: "rgba(31, 10, 59, 0.35)",
  fontWeight: typography.fontWeight.medium,
});

globalStyle(`${input} input:-webkit-autofill`, {
  WebkitTextFillColor: colors.text.primary,
});
