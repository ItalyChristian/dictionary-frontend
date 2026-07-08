import { globalStyle, keyframes } from "@vanilla-extract/css";
import { colors } from "./tokens/colors.css";
import { typography } from "./tokens/typography.css";

export const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(0.75rem)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  minHeight: "100vh",
  color: colors.text.primary,
  fontFamily: typography.fontFamily.body,
  background: "radial-gradient(circle at 10% 30%, #d9c4ff, #9f7aea)",
});

globalStyle("::selection", {
  background: colors.primary[400],
  color: colors.text.inverse,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("input, select, textarea", {
  fontFamily: "inherit",
});

globalStyle("*:focus-visible", {
  outline: `0.125rem solid ${colors.primary[400]}`,
  outlineOffset: "0.125rem",
});
