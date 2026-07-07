import { style, keyframes } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { spacing } from "@/styles/tokens/spacing.css";

const pulse = keyframes({
  "0%, 100%": { opacity: 0.6 },
  "50%": { opacity: 0.3 },
});

export const container = style({
  position: "relative",
  minHeight: "100vh",
  width: "100%",

  overflow: "hidden",
});

export const content = style({
  position: "relative",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: spacing["2xl"],

  paddingBottom: "40vh",
});

export const title = style({
  fontSize: "1.5rem",
  color: colors.text.primary,
  textAlign: "center",
  maxWidth: "600px",
  margin: 0,
  lineHeight: 1.4,

  textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  animation: `${pulse} 1.5s ease-in-out infinite`,
});

export const imageWrapper = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  zIndex: 1,
  pointerEvents: "none",
});

export const loadingImage = style({
  width: "auto",
  height: "auto",
  maxHeight: "70vh",
  objectFit: "contain",
  display: "block",
});
