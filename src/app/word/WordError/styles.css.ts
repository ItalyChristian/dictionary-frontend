import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const header = style({
  width: "calc(80vw - 1rem)",
  padding: `${spacing["2xl"]} ${spacing["4xl"]}`,
  borderRadius: radii.lg,
});

export const title = style({
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
  margin: 0,
});

export const section = style({
  width: "calc(80vw - 1rem)",
  minHeight: "calc(80vh - 1.5rem)",
  padding: spacing["3xl"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const errorContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: spacing.md,
  maxWidth: "500px",
});

export const errorIcon = style({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "rgba(239, 68, 68, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // svg: {
  //   width: "32px",
  //   height: "32px",
  //   color: colors.status.error,
  // },
});

export const errorTitle = style({
  fontSize: typography.fontSize["2xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
  margin: 0,
});

export const errorMessage = style({
  fontSize: typography.fontSize.base,
  color: colors.text.secondary,
  margin: 0,
});

export const errorActions = style({
  display: "flex",
  gap: spacing.md,
  marginTop: spacing.sm,
  flexWrap: "wrap",
  justifyContent: "center",
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

export const backButton = style({
  padding: `${spacing.sm} ${spacing["2xl"]}`,
  backgroundColor: "transparent",
  color: colors.text.primary,
  border: `1px solid ${colors.border.medium}`,
  borderRadius: radii.md,
  fontSize: typography.fontSize.base,
  textDecoration: "none",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: colors.background.glassHover,
    borderColor: colors.text.primary,
  },
});
