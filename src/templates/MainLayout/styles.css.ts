import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  padding: "1.5rem",
  gap: "2rem",

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
    },
  },
});
