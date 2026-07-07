import { flexColumnCenter } from "@/styles/components/gridSystem.css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { style, keyframes } from "@vanilla-extract/css";

export const header = style({
  width: "calc(80vw - 1rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${spacing["2xl"]} ${spacing["4xl"]}`,
  borderRadius: radii.lg,
});

export const title = style({
  color: colors.text.primary,
  fontSize: typography.fontSize["5xl"],
  fontWeight: typography.fontWeight.bold,
  margin: 0,
});

export const section = style({
  minHeight: "calc(80vh - 1rem)",
  padding: spacing["2xl"],
});

export const sectionLoading = style([
  flexColumnCenter,
  {
    minHeight: "calc(80vh - 1.5rem)",
    gap: "2rem",
    padding: spacing["2xl"],
  },
]);

export const error = style({
  height: "200px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: colors.status.error,
  fontSize: typography.fontSize.xl,
});

export const loading = style({
  color: colors.text.secondary,
  fontSize: typography.fontSize.xl,
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  width: "60px",
  height: "60px",
  border: `4px solid ${colors.background.glass}`,
  borderTop: `4px solid ${colors.status.purple}`,
  borderRadius: "50%",
  animation: `${spin} 0.8s ease-in-out infinite`,
});
