import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  width: "calc(80vw - 1rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${spacing["2xl"]} ${spacing["4xl"]}`,
  borderRadius: radii.lg,
});

export const title = style({
  color: colors.text.primary,
  fontSize: typography.fontSize["5xl"],
  fontWeight: typography.fontWeight.bold,
  margin: 0,
});

export const section = style({
  minHeight: "calc(80vh - 1rem)",
  padding: spacing["2xl"],
});
