import { style, keyframes } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { spacing } from "@/styles/tokens/spacing.css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const pulse = keyframes({
  "0%, 100%": { opacity: 0.6 },
  "50%": { opacity: 0.3 },
});

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100%",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing.lg,
  padding: spacing["3xl"],
});

export const spinner = style({
  width: "60px",
  height: "60px",
  border: `4px solid ${colors.background.glass}`,
  borderTop: `4px solid ${colors.status.purple}`,
  borderRadius: "50%",
  animation: `${spin} 0.8s ease-in-out infinite`,
});

export const message = style({
  color: colors.text.secondary,
  fontSize: "1.125rem",
  animation: `${pulse} 1.5s ease-in-out infinite`,
});
