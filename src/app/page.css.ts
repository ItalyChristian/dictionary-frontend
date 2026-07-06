import { style } from "@vanilla-extract/css";
import { colors } from "./styles/tokens/colors.css";

export const accent = style({
  color: colors.primary[600],
  fontWeight: 600,
});
