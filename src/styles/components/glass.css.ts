import { style } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";
import { radii } from "../tokens/spacing.css";

export const glass = style({
  background: colors.background.glass,
  backdropFilter: "blur(1.25rem)",
  WebkitBackdropFilter: "blur(1.25rem)",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  borderRadius: radii["3xl"],
  border: `1px solid ${colors.border.light}`,
  boxShadow: "0 0.5rem 2rem rgba(0, 0, 0, 0.3)",
});
