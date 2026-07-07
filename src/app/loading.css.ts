import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { spacing, radii } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const loadingWrapper = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],
  padding: spacing["2xl"],
  animation: "fadeIn 0.3s ease",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: spacing.lg,
    },
  },
});

export const headerSkeleton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.lg,
  background: colors.background.glass,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  borderRadius: radii["2xl"],
  border: `1px solid ${colors.border.light}`,
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
});

export const headerRight = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
});

export const skeletonAvatar = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: radii.full,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite",
});

export const skeletonTitle = style({
  height: "1.25rem",
  width: "10rem",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite",
  marginBottom: spacing.xs,
});

export const skeletonSubtitle = style({
  height: "0.75rem",
  width: "7rem",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite 0.1s",
});

export const skeletonIcon = style({
  width: "2rem",
  height: "2rem",
  borderRadius: radii.lg,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite 0.15s",
});

export const skeletonButton = style({
  height: "2.5rem",
  width: "8rem",
  borderRadius: radii.lg,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite 0.2s",
});

export const skeletonButtonSmall = style({
  height: "2rem",
  width: "6rem",
  borderRadius: radii.md,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite 0.3s",
});

export const skeletonButtonIcon = style({
  width: "2rem",
  height: "2rem",
  borderRadius: radii.lg,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite 0.4s",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],
});

export const skeletonStatIcon = style({
  width: "2rem",
  height: "2rem",
  borderRadius: radii.lg,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite",
});

export const cardsGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: spacing["2xl"],

  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const cardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.lg,
});

export const cardTitleSkeleton = style({
  fontSize: typography.fontSize.xl,
  fontWeight: typography.fontWeight.semibold,
});

export const skeletonText = style({
  height: "1.5rem",
  width: "12rem",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite",
});

export const listContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
});

export const listItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.md,
  background: "rgba(255, 255, 255, 0.03)",
  borderRadius: radii.lg,
  border: `1px solid rgba(255, 255, 255, 0.04)`,
});

export const listItemLeft = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
});

export const listItemRight = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
});

export const skeletonListItemIcon = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: radii.lg,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite",
});

export const skeletonListItemTitle = style({
  height: "1rem",
  width: "8rem",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite 0.1s",
  marginBottom: spacing.xxs,
});

export const skeletonListItemSubtitle = style({
  height: "0.75rem",
  width: "6rem",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite 0.2s",
});

export const skeletonListItemAction = style({
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: radii.sm,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite 0.3s",
});

export const skeletonBadge = style({
  height: "1.5rem",
  width: "4rem",
  borderRadius: radii.full,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite 0.2s",
});

export const activityItem = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
  padding: spacing.sm,
  borderRadius: radii.lg,
  background: "rgba(255, 255, 255, 0.03)",
});

export const skeletonActivityIcon = style({
  width: "2rem",
  height: "2rem",
  borderRadius: radii.full,
  background: "rgba(255, 255, 255, 0.06)",
  animation: "pulse 1.5s ease-in-out infinite",
});

export const activityContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: spacing.xxs,
});

export const skeletonActivityText = style({
  height: "0.875rem",
  width: "70%",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite 0.1s",
});

export const skeletonActivityTime = style({
  height: "0.625rem",
  width: "30%",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: radii.sm,
  animation: "pulse 1.5s ease-in-out infinite 0.2s",
});
