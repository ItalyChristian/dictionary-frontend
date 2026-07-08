import { colors } from "@/styles/tokens/colors.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: colors.background.glass,
});

export const content = style({
  maxWidth: "800px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3rem",
  alignItems: "center",
  backgroundColor: colors.background.glassActive,
  borderRadius: "1rem",
  padding: "3rem",
  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",

  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      padding: "2rem",
      gap: "2rem",
      textAlign: "center",
    },
  },
});

export const imageWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const loadingImage = style({
  width: "15rem",
  height: "auto",
  objectFit: "contain",
  display: "block",
});

export const image = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "0.5rem",
});

export const textContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: colors.text.primary,
  margin: 0,
  lineHeight: 1.2,
});

export const description = style({
  fontSize: "1.125rem",
  color: colors.text.secondary,
  lineHeight: 1.6,
  margin: 0,
});

export const suggestions = style({
  backgroundColor: colors.background.glass,
  borderRadius: "0.75rem",
  padding: "1.25rem",
  marginTop: "0.5rem",
});

export const suggestionsTitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: colors.text.primary,
  marginBottom: "0.75rem",
});

export const suggestionsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const link = style({
  color: colors.text.primary,
  textDecoration: "none",
  fontSize: "0.95rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.2s ease",

  cursor: "pointer",

  ":hover": {
    color: colors.text.light,
    transform: "translateX(4px)",
  },
});

export const primaryButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem 2rem",
  backgroundColor: colors.background.glassActive,
  color: "white",
  borderRadius: "0.5rem",
  textDecoration: "none",
  fontWeight: 600,
  transition: "all 0.2s ease",
  marginTop: "0.5rem",
  alignSelf: "flex-start",

  outline: "none",
  border: "none",
  cursor: "pointer",

  ":hover": {
    backgroundColor: colors.background.glassHover,
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  "@media": {
    "(max-width: 768px)": {
      alignSelf: "center",
    },
  },
});
