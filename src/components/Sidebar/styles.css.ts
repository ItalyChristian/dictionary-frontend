import { style } from "@vanilla-extract/css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";

export const sidebar = style({
  height: "fit-content",
  position: "sticky",

  padding: spacing.xl,
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: `${spacing.md} ${spacing.lg}`,
  borderRadius: radii.lg,
  color: "rgba(255, 255, 255, 0.6)",
  textDecoration: "none",
  transition: "all 0.25s ease",
  fontSize: 14,
  fontWeight: typography.fontWeight.medium,
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      background: "rgba(255, 255, 255, 0.08)",
      color: "#ffffff",
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
  color: "rgba(255, 255, 255, 0.4)",
  transition: "color 0.25s ease",
});

export const iconHover = style({
  selectors: {
    [`${navLink}:hover &`]: {
      color: colors.text.primary,
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
