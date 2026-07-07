import { style } from "@vanilla-extract/css";
import { flexCenter } from "@/styles/components/gridSystem.css";

export const wrapper = style([
  flexCenter,
  { width: "100%", minHeight: "100vh" },
]);

export const card = style([
  flexCenter,
  {
    minWidth: "40vw",
    minHeight: "auto",
    padding: "2rem",

    "@media": {
      "(max-width: 1024px)": {
        width: "100vw",
        height: "100vh",
      },
    },
  },
]);
