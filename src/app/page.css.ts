import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const section = style({
  minHeight: "calc(80vh - 1rem)",
  padding: spacing["2xl"],
  display: "flex",
  flexDirection: "column",
  gap: spacing.xl,
});

export const pagination = style({
  marginTop: "auto",
  paddingTop: spacing["2xl"],
  borderTop: `1px solid ${colors.border.medium}`,
});

export const empty = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "300px",
  gap: spacing.sm,
  color: colors.text.muted,
  fontSize: typography.fontSize.xl,
});

export const emptySub = style({
  fontSize: typography.fontSize.base,
  opacity: 0.7,
});

export const errorSection = style({
  padding: spacing["2xl"],
  minHeight: "400px",
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
