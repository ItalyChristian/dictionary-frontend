import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  width: "calc(80vw - 1rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${spacing["2xl"]} ${spacing["4xl"]}`,
  borderRadius: radii.lg,

  "@media": {
    "(max-width: 1024px)": {
      width: "calc(100vw - 3rem)",
    },
  },
});

export const title = style({
  color: colors.text.primary,
  fontSize: typography.fontSize["5xl"],
  fontWeight: typography.fontWeight.bold,
  margin: 0,
});

export const count = style({
  color: colors.text.secondary,
  fontSize: typography.fontSize.base,

  padding: spacing.sm,
  borderRadius: radii.sm,
  backgroundColor: colors.background.glassActive,
});

export const section = style({
  minHeight: "calc(80vh - 2rem)",
  padding: spacing["2xl"],
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
});

export const pagination = style({
  marginTop: spacing["2xl"],
  paddingTop: spacing["2xl"],
  borderTop: `1px solid ${colors.border.medium}`,
});

export const empty = style({
  height: "200px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.sm,

  color: colors.text.muted,
  fontSize: typography.fontSize.xl,
});

export const emptySub = style({
  fontSize: typography.fontSize.base,
  opacity: 0.7,
});
