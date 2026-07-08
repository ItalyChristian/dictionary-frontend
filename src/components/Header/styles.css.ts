import { style } from "@vanilla-extract/css";
import { spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";
import { flexCenter } from "@/styles/components/gridSystem.css";

export const wrapper = style({
  width: "calc(80vw - 1rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.xl,

  "@media": {
    "(max-width: 1024px)": {
      width: "calc(100vw - 3rem)",
    },
  },
});

export const title = style({
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.status.purple,
});

export const header = style({
  width: "calc(80vw - 1rem)",
  display: "flex",
  alignItems: "center",

  padding: spacing.sm,

  "@media": {
    "(max-width: 1024px)": {
      width: "calc(100vw - 3rem)",
    },
  },
});

export const text = style([
  flexCenter,
  {
    gap: "0.5rem",
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.status.purple,
    cursor: "pointer",
  },
]);
