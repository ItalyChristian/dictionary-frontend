import { style } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";
import { radii, spacing } from "../tokens/spacing.css";

export const glass = style({
  background: colors.background.glass,
  backdropFilter: "blur(1.25rem)",
  WebkitBackdropFilter: "blur(1.25rem)",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  borderRadius: radii.sm,
  border: `1px solid ${colors.border.light}`,
  boxShadow: "0 0.5rem 2rem rgba(0, 0, 0, 0.3)",
});

export const glassCard = style({
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  borderRadius: radii.sm,
  // padding: `${spacing["5xl"]} ${spacing["4xl"]}`,
  border: `1px solid ${colors.border.medium}`,
  boxShadow:
    "0 25px 50px -8px rgba(98, 0, 242, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
  transition: "all 0.3s ease",
});
