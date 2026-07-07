import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xl,
  width: "100%",
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
});

export const letterHeader = style({
  fontSize: typography.fontSize["2xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.status.purple,
  margin: 0,
  paddingBottom: spacing.xs,
  borderBottom: `2px solid ${colors.border.purple}`,
});

export const wordsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: spacing.xs,
  padding: `${spacing.xs} 0`,
});

export const wordButton = style({
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: radii.md,
  border: "none",
  backgroundColor: "transparent",
  color: colors.text.primary,
  fontSize: typography.fontSize.sm,
  textAlign: "left",
  cursor: "pointer",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  ":hover": {
    backgroundColor: colors.background.glassHover,
    color: colors.status.purple,
    transform: "translateX(4px)",
  },
});

export const wordButtonActive = style({
  backgroundColor: "rgba(167, 139, 250, 0.15)",
  color: colors.status.purple,
  fontWeight: typography.fontWeight.medium,

  ":hover": {
    backgroundColor: "rgba(167, 139, 250, 0.25)",
  },
});
