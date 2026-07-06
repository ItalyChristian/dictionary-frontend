import { style } from "@vanilla-extract/css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  padding: spacing.xl,
});
