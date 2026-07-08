import { style, keyframes } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  padding: `${spacing.md} ${spacing.lg}`,
  borderRadius: radii.lg,
  width: "100%",
});

export const searchWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  position: "relative",
});

export const searchIcon = style({
  width: "20px",
  height: "20px",
  color: colors.text.muted,
  flexShrink: 0,
});

export const input = style({
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  fontSize: typography.fontSize.lg,
  color: colors.text.primary,
  padding: `${spacing.xs} 0`,

  "::placeholder": {
    color: colors.text.muted,
  },
});

export const inputFocused = style({
  color: colors.text.primary,
});

export const clearButton = style({
  background: "none",
  border: "none",
  color: colors.text.muted,
  cursor: "pointer",
  padding: spacing.xs,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: colors.background.glassHover,
    color: colors.text.primary,
  },

  // svg: {
  //   width: "16px",
  //   height: "16px",
  // },
});

export const loadingSpinner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.xs,
});

export const spinner = style({
  width: "20px",
  height: "20px",
  border: `2px solid ${colors.border.medium}`,
  borderTop: `2px solid ${colors.status.purple}`,
  borderRadius: "50%",
  animation: `${spin} 0.8s ease-in-out infinite`,
});

export const resultsCount = style({
  fontSize: typography.fontSize.sm,
  color: colors.text.muted,
  paddingLeft: spacing.sm,
  paddingTop: spacing.xs,
});
