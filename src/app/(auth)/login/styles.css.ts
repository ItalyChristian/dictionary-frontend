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
  width: "100%",
  maxWidth: "56rem",
  minHeight: "auto",
  display: "flex",
  alignItems: "center",
  gap: "clamp(2rem, 4vw, 10rem)",

  overflow: "hidden",

  "@media": {
    "(max-width: 1024px)": {
      height: "100vh",
      justifyContent: "center",
      flexDirection: "column",
      gap: "2rem",
      padding: "2rem 1.5rem",
    },
  },
});

export const image = style({
  width: "100%",
  maxWidth: "28rem",
  height: "auto",
  aspectRatio: "4 / 5",
  objectFit: "cover",
  flexShrink: 0,

  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const loadingimage = style({
  width: "100%",
  maxWidth: "30rem",
  height: "auto",
  aspectRatio: "4 / 5",
  objectFit: "cover",
  flexShrink: 0,
  bottom: 0,

  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const content = style([
  flexColumnCenter,
  {
    gap: spacing.lg,
    paddingLeft: "3rem",
    "@media": {
      "(min-width: 1300px)": {
        paddingLeft: "2.1rem",
      },
    },
  },
]);

export const title = style({
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
});
