import { style } from "@vanilla-extract/css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";
import { flexCenter } from "@/styles/components/gridSystem.css";

export const sidebar = style({
  minWidth: "15vw",
  minHeight: "calc(100vh - 3rem)",
  position: "sticky",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  padding: spacing.xl,
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: `${spacing.md} ${spacing.lg}`,
  borderRadius: radii.lg,
  color: colors.text.secondary,
  textDecoration: "none",
  transition: "all 0.25s ease",
  fontSize: 14,
  fontWeight: typography.fontWeight.medium,
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      background: "rgba(255, 255, 255, 0.08)",
      color: colors.status.purple,
    },
  },
});

export const navLinkActive = style({
  background: "rgba(167, 139, 250, 0.2)",
  color: colors.status.purple,
  boxShadow: `inset 3px 0 0 ${colors.status.purple}`,
  selectors: {
    "&:hover": {
      background: "rgba(167, 139, 250, 0.25)",
      color: colors.status.purple,
    },
  },
});

export const icon = style({
  width: 20,
  height: 20,
  flexShrink: 0,
  color: colors.text.secondary,
  transition: "color 0.25s ease",
});

export const iconHover = style({
  selectors: {
    [`${navLink}:hover &`]: {
      color: colors.status.purple,
    },
  },
});

export const iconActive = style({
  color: colors.status.purple,
  selectors: {
    [`${navLinkActive} &`]: {
      color: colors.status.purple,
    },
  },
});

export const logout = style([
  flexCenter,
  { gap: spacing.sm, fontSize: typography.fontSize.md, cursor: "pointer" },
]);
