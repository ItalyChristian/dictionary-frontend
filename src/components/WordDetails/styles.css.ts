import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";
import { typography } from "@/styles/tokens/typography.css";

export const container = style({
  width: "calc(80vw - 1rem)",
  padding: spacing["3xl"],
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],

  margin: "0 auto",

  "@media": {
    "(max-width: 1024px)": {
      width: "calc(100vw - 3rem)",
    },
  },
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingBottom: spacing.lg,
  borderBottom: `1px solid ${colors.border.medium}`,
});

export const word = style({
  fontSize: typography.fontSize["5xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
  margin: 0,
  lineHeight: 1.2,
});

export const phonetics = style({
  display: "flex",
  gap: spacing.md,
  marginTop: spacing.xs,
  flexWrap: "wrap",
});

export const phonetic = style({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.xs,
  fontSize: typography.fontSize.lg,
  color: colors.text.secondary,
  fontFamily: "monospace",
});

export const audioButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  color: colors.status.purple,
  cursor: "pointer",
  padding: spacing.xs,
  borderRadius: "50%",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "rgba(167, 139, 250, 0.1)",
    transform: "scale(1.1)",
  },
});

export const actions = style({
  display: "flex",
  gap: spacing.sm,
});

export const favoriteButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  color: colors.text.muted,
  cursor: "pointer",
  padding: spacing.sm,
  borderRadius: "50%",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    transform: "scale(1.1)",
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const favoriteActive = style({
  color: "#EF4444",
});

export const origin = style({
  padding: spacing.lg,
  backgroundColor: colors.background.glassHover,
  borderRadius: radii.md,
  border: `1px solid ${colors.border.medium}`,
});

export const originText = style({
  margin: 0,
  color: colors.text.secondary,
  lineHeight: 1.6,
});

export const meanings = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],
});

export const meaning = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
});

export const partOfSpeech = style({
  fontSize: typography.fontSize["2xl"],
  fontWeight: typography.fontWeight.semibold,
  color: colors.status.purple,
  margin: 0,
  textTransform: "capitalize",
});

export const definitionsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
});

export const definitionItem = style({
  padding: spacing.md,
  borderRadius: radii.md,
  backgroundColor: colors.background.glass,
  border: `1px solid ${colors.border.medium}`,
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: colors.background.glassHover,
  },
});

export const definition = style({
  margin: 0,
  fontSize: typography.fontSize.base,
  color: colors.text.primary,
  lineHeight: 1.6,
});

export const example = style({
  margin: `${spacing.xs} 0 0 ${spacing.lg}`,
  padding: `${spacing.xs} ${spacing.md}`,
  borderLeft: `3px solid ${colors.status.purple}`,
  color: colors.text.secondary,
  fontStyle: "italic",
  fontSize: typography.fontSize.sm,
  lineHeight: 1.6,
});

export const sectionTitle = style({
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.semibold,
  color: colors.text.primary,
  margin: `0 0 ${spacing.xs} 0`,
});

export const synonyms = style({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing.xs,
  marginTop: spacing.xs,
  alignItems: "center",
});

export const antonyms = style({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing.xs,
  marginTop: spacing.xs,
  alignItems: "center",
});

export const tagLabel = style({
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
  color: colors.text.muted,
  marginRight: spacing.xs,
});

export const tag = style({
  display: "inline-block",
  padding: `${spacing.xs} ${spacing.md}`,
  backgroundColor: colors.background.glassHover,
  borderRadius: radii.full,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  border: `1px solid ${colors.border.medium}`,
});

export const footer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: spacing.lg,
  borderTop: `1px solid ${colors.border.medium}`,
  flexWrap: "wrap",
  gap: spacing.md,
});

export const stats = style({
  display: "flex",
  gap: spacing.lg,
});

export const stat = style({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.xs,
  fontSize: typography.fontSize.sm,
  color: colors.text.muted,
});

export const source = style({
  fontSize: typography.fontSize.sm,
  color: colors.text.muted,
  display: "flex",
  alignItems: "center",
  gap: spacing.xs,
});

export const sourceLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.xs,
  color: colors.status.purple,
  textDecoration: "none",
  transition: "color 0.2s ease",

  ":hover": {
    color: colors.text.primary,
    textDecoration: "underline",
  },
});
