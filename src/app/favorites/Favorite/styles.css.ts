import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${spacing.lg} ${spacing["2xl"]}`,
  borderBottom: `1px solid ${colors.border.purple}`,
  transition: "background-color 0.2s ease",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: colors.background.glassHover,
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
  flex: 1,
});

export const word = style({
  color: colors.text.primary,
  fontSize: typography.fontSize.xl,
  fontWeight: typography.fontWeight.semibold,
  margin: 0,
});

export const date = style({
  color: colors.text.secondary,
  fontSize: typography.fontSize.base,
});

export const removeButton = style({
  width: "2.5rem",
  height: "2.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.sm,

  color: colors.status.error,
  fontSize: typography.fontSize["3xl"],
  background: "none",
  border: "none",
  borderRadius: radii.sm,
  cursor: "pointer",
  transition: "all 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: colors.status.error + "20",
      transform: "scale(1.1)",
    },
    "&::active": {
      transform: "scale(0.9)",
    },
  },
});
