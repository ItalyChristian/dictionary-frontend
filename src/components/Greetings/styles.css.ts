import { colors } from "@/styles/tokens/colors.css";
import { spacing } from "@/styles/tokens/spacing.css";
import { style } from "@vanilla-extract/css";

export const userName = style({
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: 500,
  color: colors.text.primary,
  padding: spacing.sm,
  marginBottom: spacing.md,
  borderBottom: `1px solid ${colors.border.medium}`,
  width: "100%",
});
