import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { spacing } from "@/styles/tokens/spacing.css";

export const pagination = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing.lg,
  flexWrap: "wrap",
  padding: `${spacing.lg} 0`,
});

export const pageNumbers = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.xs,
});

export const button = style({
  padding: "0.5rem 1rem",

  color: colors.text.primary, //heme.colors.text
  fontSize: "0.875rem",

  borderRadius: "0.375rem",
  border: "1px solid",
  borderColor: colors.border.purple, //theme.colors.border
  backgroundColor: "transparent",

  cursor: "pointer",
  transition: "all 0.2s ease",

  // selectors: {
  //   "&:hover": {
  //     backgroundColor: theme.colors.primary,
  //     color: "white",
  //     borderColor: theme.colors.primary,
  //   },
  //   "&:disabled": {
  //     opacity: 0.5,
  //     cursor: "not-allowed",
  //     backgroundColor: "transparent",
  //     color: theme.colors.text,
  //     borderColor: theme.colors.border,
  //   },
  // },
});

export const pageButton = style({
  minWidth: "2rem",
  textAlign: "center",
  padding: "0.5rem 0.75rem",

  borderRadius: "0.375rem",
  border: "1px solid transparent",
  backgroundColor: "transparent",
  color: colors.text.primary,
  fontSize: "0.875rem",

  cursor: "pointer",
  transition: "all 0.2s ease",

  // ":hover": {
  //   backgroundColor: theme.colors.primary,
  //   color: "white",
  // },
  // ":disabled": {
  //   cursor: "not-allowed",
  //   ":hover": {
  //     backgroundColor: "transparent",
  //     color: theme.colors.text,
  //   },
  // },
});

export const active = style({
  backgroundColor: colors.status.success, //theme.colors.primary
  color: "white",
  fontWeight: "bold",
});

export const dots = style({
  cursor: "default",
  ":hover": {
    backgroundColor: "transparent",
    color: colors.text.primary,
  },
});

export const info = style({
  color: colors.status.info,
  fontSize: "0.875rem",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.375rem",
  backgroundColor: colors.background.secondary, //theme.colors.backgroundSecondary
});
