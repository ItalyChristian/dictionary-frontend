import { style } from "@vanilla-extract/css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";
import { flexCenter } from "@/styles/components/gridSystem.css";

export const sidebar = style({
  width: "15vw",
  minWidth: "15vw",
  minHeight: "calc(100vh - 3rem)",
  position: "sticky",
  top: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  padding: spacing.xl,

  "@media": {
    "screen and (max-width: 1024px)": {
      position: "fixed",
      top: 0,
      right: 0,
      width: "280px",
      minWidth: "280px",
      minHeight: "100vh",
      height: "100vh",
      borderRadius: 0,
      transform: "translateX(100%)",
      transition: "transform 0.3s ease-in-out",
      zIndex: 20,
      padding: spacing["2xl"],
    },
  },
});

export const showMobileMenu = style({
  "@media": {
    "screen and (max-width: 1024px)": {
      transform: "translateX(0)",
    },
  },
});

export const nav = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      marginTop: "3rem",
    },
  },
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: `${spacing.md} ${spacing.lg}`,

  borderRadius: radii.lg,
  color: colors.text.secondary,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: typography.fontWeight.medium,

  transition: "all 0.25s ease",
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
  {
    gap: spacing.sm,
    fontSize: typography.fontSize.md,
    cursor: "pointer",
    color: colors.text.primary,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: radii.lg,
    transition: "all 0.25s ease",
    width: "100%",

    selectors: {
      "&:hover": {
        background: "rgba(239, 68, 68, 0.1)",
        color: colors.status.error,
      },
    },
  },
]);

export const menuMobileIcon = style({
  position: "fixed",
  top: "1.5rem",
  right: "1.5rem",
  zIndex: 30,

  border: "none",
  color: colors.text.primary,
  cursor: "pointer",
  padding: spacing.sm,
  borderRadius: radii.md,
  transition: "all 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },

  "@media": {
    "screen and (min-width: 1025px)": {
      display: "none",
    },
  },
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  // backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 10,
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.3s ease-in-out",

  selectors: {
    [`${showMobileMenu} &`]: {
      opacity: 1,
      pointerEvents: "auto",
    },
  },
});
