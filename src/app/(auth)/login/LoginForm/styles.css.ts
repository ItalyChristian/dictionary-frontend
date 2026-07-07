import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { typography } from "@/styles/tokens/typography.css";
import { flexColumnCenter } from "@/styles/components/gridSystem.css";
import { spacing } from "@/styles/tokens/spacing.css";

export const wrapper = style([flexColumnCenter, { padding: "3rem" }]);

export const passwordWrapper = style({
  width: "100%",
  position: "relative",
});

export const passwordToggle = style({
  position: "absolute",
  right: spacing.md,
  top: "50%",
  transform: "translateY(-50%)",
  background: "transparent",
  border: "none",
  color: "rgba(255, 255, 255, 0.4)",
  cursor: "pointer",
  fontSize: 18,
  padding: spacing.xs,
  transition: "color 0.3s ease",
});

export const passwordIcon = style({
  color: colors.text.inverse,
  cursor: "pointer",
  paddingRight: "0.5rem",

  ":hover": {
    color: colors.text.inverse,
  },
});

export const footerLinks = style({
  display: "flex",
  justifyContent: "center",
  marginTop: spacing.lg,
});

export const link = style({
  color: "rgba(255, 255, 255, 0.4)",
  fontSize: typography.fontSize.sm,
  textDecoration: "none",
  transition: "color 0.3s ease",
});
