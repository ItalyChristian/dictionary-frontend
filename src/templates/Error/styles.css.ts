import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const errorSection = style({
  padding: spacing["2xl"],
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const errorContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing.md,
  textAlign: "center",
});

export const retryButton = style({
  padding: `${spacing.sm} ${spacing["2xl"]}`,
  backgroundColor: colors.status.purple,
  color: "white",
  border: "none",
  borderRadius: radii.md,
  fontSize: typography.fontSize.base,
  cursor: "pointer",
  transition: "all 0.2s ease",

  // ":hover": {
  //   backgroundColor: colors.status.purpleDark,
  //   transform: "translateY(-2px)",
  // },
});
