import { style } from "@vanilla-extract/css";
import { spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";

export const wrapper = style({
  width: "calc(80vw - 1rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.xl,
});

export const title = style({
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.status.purple,
});
