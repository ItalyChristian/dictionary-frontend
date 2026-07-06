import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";

export const wrapper = style({
  minHeight: "100vh",
  background: colors.gradient.primary,
});
