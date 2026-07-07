import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { typography } from "@/styles/tokens/typography.css";
import { flexColumnCenter } from "@/styles/components/gridSystem.css";
import { radii, spacing } from "@/styles/tokens/spacing.css";

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

export const footerLinks = style([flexColumnCenter, { marginTop: spacing.lg }]);

export const link = style({
  color: "rgba(255, 255, 255, 0.4)",
  fontSize: typography.fontSize.sm,
  textDecoration: "none",
  transition: "color 0.3s ease",
});

export const button = style({
  width: "100%",
  padding: spacing.md,

  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.semibold,
  letterSpacing: typography.letterSpacing.widest,
  color: colors.text.inverse,

  background: "linear-gradient(135deg, #6200F2 0%, #8a4dff 50%, #6BFF69 100%)",
  backgroundSize: "200% 200%",
  boxShadow: "0 6px 20px rgba(98, 0, 242, 0.35)",
  border: "none",
  borderRadius: radii.sm,

  cursor: "pointer",
  transition: " all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

  position: "relative",
  overflow: "hidden",

  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background:
        "linear-gradient(135deg, #6BFF69 0%, #8a4dff 50%, #6200F2 100%)",
      backgroundSize: "200% 200%",
      opacity: 0,
      transition: "opacity 0.5s ease",
    },
    "&:hover": {
      transform: "translateY(-2px) scale(1.01)",
      boxShadow:
        "0 10px 30px rgba(98, 0, 242, 0.4), 0 0 40px rgba(107, 255, 105, 0.1)",
      backgroundPosition: "100% 100%",
    },
  },
});
