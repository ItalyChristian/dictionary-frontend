import { globalStyle, keyframes } from "@vanilla-extract/css";
import { colors } from "./tokens/colors.css";
import { spacing, radii } from "./tokens/spacing.css";
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
  fontFamily: typography.fontFamily.body,
  minHeight: "100vh",
  background: "radial-gradient(circle at 10% 30%, #d9c4ff, #9f7aea)",
  color: colors.text.primary,
  // padding: spacing.xl,
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',

  // "@media": {
  //   "screen and (max-width: 43.75rem)": {
  //     padding: spacing.lg,
  //   },
  // },
});

globalStyle("::-webkit-scrollbar", {
  width: "0.375rem",
});

globalStyle("::-webkit-scrollbar-track", {
  background: colors.background.glass,
  borderRadius: radii.lg,
});

globalStyle("::-webkit-scrollbar-thumb", {
  background: "rgba(255, 255, 255, 0.15)",
  borderRadius: radii.lg,
});

globalStyle("::-webkit-scrollbar-thumb:hover", {
  background: "rgba(255, 255, 255, 0.25)",
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
