import { style } from "@vanilla-extract/css";
import { typography } from "@/styles/tokens/typography.css";
import { flexColumnCenter } from "@/styles/components/gridSystem.css";
import { spacing } from "@/styles/tokens/spacing.css";
import { colors } from "@/styles/tokens/colors.css";

export const wrapper = style([
  flexColumnCenter,
  { width: "100%", minHeight: "100vh", gap: spacing.md },
]);

export const title = style({
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.status.purple,
});
