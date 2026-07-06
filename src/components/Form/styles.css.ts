import { globalStyle, style } from "@vanilla-extract/css";
import { colors } from "@/styles/tokens/colors.css";
import { spacing, radii } from "@/styles/tokens/spacing.css";

export const input = style({
  border: "1px solid rgba(167,139,250,0.2)",
  borderRadius: radii.lg,
  padding: spacing.lg,
});

export const inputError = style({
  borderColor: colors.status.error,
  selectors: {
    "&:focus": {
      borderColor: colors.status.error,
    },
  },
});

globalStyle(`${input} input`, {
  color: colors.text.primary,
});

globalStyle(`${input} input::placeholder`, {
  color: colors.text.primary,
  opacity: 0.7,
});

globalStyle(`${input} input:-webkit-autofill`, {
  WebkitTextFillColor: colors.text.primary,
});
