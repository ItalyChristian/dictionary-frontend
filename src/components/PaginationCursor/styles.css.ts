import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing.md,
  paddingTop: spacing["2xl"],
  flexWrap: "wrap",
});

export const button = style({
  padding: `${spacing.sm} ${spacing["2xl"]}`,
  borderRadius: radii.md,
  border: `1px solid ${colors.border.medium}`,
  backgroundColor: "transparent",
  color: colors.text.primary,
  cursor: "pointer",
  transition: "all 0.2s ease",
  fontSize: typography.fontSize.sm,
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.xs,

  // ":hover:not(:disabled)": {
  //   backgroundColor: colors.status.purple,
  //   color: "white",
  //   borderColor: colors.status.purple,
  //   transform: "translateY(-2px)",
  // },

  // ":disabled": {
  //   opacity: 0.4,
  //   cursor: "not-allowed",
  //   ":hover": {
  //     backgroundColor: "transparent",
  //     color: colors.text.primary,
  //     borderColor: colors.border.medium,
  //     transform: "none",
  //   },
  // },
});

export const info = style({
  fontSize: typography.fontSize.sm,
  color: colors.text.muted,
});
