import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const pagination = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing.lg,
  flexWrap: "wrap",
  padding: `${spacing.lg} 0`,
});

export const pageNumbers = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.xs,
});

export const button = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: spacing.sm,

  color: colors.text.primary,
  fontSize: "0.875rem",

  borderRadius: "0.375rem",
  border: "1px solid",
  borderColor: colors.border.purple,
  backgroundColor: "transparent",

  cursor: "pointer",
  transition: "all 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: colors.background.glassActive,
      borderColor: colors.border.focus,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      backgroundColor: "transparent",
      color: colors.text.muted,
    },
  },
});

export const pageButton = style({
  minWidth: "2rem",
  textAlign: "center",
  padding: "0.5rem 0.75rem",

  borderRadius: "0.375rem",
  border: "1px solid transparent",
  backgroundColor: "transparent",
  color: colors.text.primary,
  fontSize: "0.875rem",

  cursor: "pointer",
  transition: "all 0.2s ease",

  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      color: colors.text.muted,
    },
  },
});

export const active = style({
  backgroundColor: colors.status.success,
  border: `1px solid ${colors.border.purple}`,
  color: colors.text.primary,
  fontWeight: "bold",
});

export const dots = style({
  cursor: "default",
  ":hover": {
    backgroundColor: "transparent",
    color: colors.text.primary,
  },
});

export const info = style({
  color: colors.text.secondary,
  fontSize: typography.fontSize.base,

  padding: spacing.sm,
  borderRadius: radii.sm,
  backgroundColor: colors.background.glassActive,
});
