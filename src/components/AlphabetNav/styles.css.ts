import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const container = style({
  display: "flex",
  gap: spacing.xs,
  padding: `${spacing.sm} 0`,
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "thin",
  WebkitOverflowScrolling: "touch",

  "::-webkit-scrollbar": {
    height: "4px",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    background: colors.border.medium,
    borderRadius: radii.full,
  },
});

export const letterButton = style({
  flexShrink: 0,
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "none",
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  color: colors.text.primary,
  backgroundColor: "transparent",

  ":hover": {
    backgroundColor: colors.background.glassHover,
    color: colors.status.purple,
    transform: "scale(1.1)",
  },
});

export const letterActive = style({
  backgroundColor: colors.status.purple,
  color: "white",
  transform: "scale(1.1)",

  ":hover": {
    backgroundColor: colors.status.error,
    transform: "scale(1.15)",
  },
});
