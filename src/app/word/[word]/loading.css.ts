import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";

const shimmer = {
  background: `linear-gradient(90deg, ${colors.background.glass} 25%, ${colors.background.glassHover} 50%, ${colors.background.glass} 75%)`,
  backgroundSize: "200% 100%",
  animation: "shimmer 2s ease-in-out infinite",
};

export const container = style({
  padding: spacing["3xl"],
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
  minHeight: "600px",
});

export const headerSkeleton = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingBottom: spacing.lg,
  borderBottom: `1px solid ${colors.border.medium}`,
});

export const wordSkeleton = style({
  width: "180px",
  height: "48px",
  borderRadius: radii.md,
  ...shimmer,
});

export const phoneticSkeleton = style({
  width: "120px",
  height: "24px",
  borderRadius: radii.sm,
  marginTop: spacing.xs,
  ...shimmer,
});

export const favoriteSkeleton = style({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  ...shimmer,
});

export const meaningsSkeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],
});

export const meaningSkeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
});

export const partOfSpeechSkeleton = style({
  width: "120px",
  height: "32px",
  borderRadius: radii.md,
  ...shimmer,
});

export const definitionSkeleton = style({
  padding: spacing.md,
  borderRadius: radii.md,
  border: `1px solid ${colors.border.medium}`,
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
});

export const definitionTextSkeleton = style({
  width: "80%",
  height: "20px",
  borderRadius: radii.sm,
  ...shimmer,
});

export const exampleSkeleton = style({
  width: "60%",
  height: "16px",
  borderRadius: radii.sm,
  marginLeft: spacing.lg,
  ...shimmer,
});

export const footerSkeleton = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: spacing.lg,
  borderTop: `1px solid ${colors.border.medium}`,
});

export const statsSkeleton = style({
  display: "flex",
  gap: spacing.lg,
  width: "150px",
  height: "20px",
  borderRadius: radii.sm,
  ...shimmer,
});

export const sourceSkeleton = style({
  width: "180px",
  height: "20px",
  borderRadius: radii.sm,
  ...shimmer,
});
