import { style } from "@vanilla-extract/css";
import { typography } from "@/styles/tokens/typography.css";
import {
  flexCenter,
  flexColumnCenter,
} from "@/styles/components/gridSystem.css";
import { spacing } from "@/styles/tokens/spacing.css";
import { colors } from "@/styles/tokens/colors.css";

export const wrapper = style([
  flexCenter,
  { width: "100%", minHeight: "100vh" },
]);

export const card = style({
  minWidth: "28rem",
  minHeight: "90vh",

  display: "flex",
  gap: "10rem",
  paddingRight: "10rem",
});

export const image = style({
  width: "28rem",
  height: "90vh",
  objectFit: "cover",
});

export const content = style([flexColumnCenter, { gap: spacing.lg }]);

export const title = style({
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
});

export const divider = style({
  width: "100%",
  height: "1px",
  backgroundColor: "#FFF",
});
