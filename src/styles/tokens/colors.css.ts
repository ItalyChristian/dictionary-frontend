import { createGlobalTheme } from "@vanilla-extract/css";

export const colors = createGlobalTheme(":root", {
  primary: {
    50: "#f5f0ff",
    100: "#ede6ff",
    200: "#d9c9ff",
    300: "#c4a8ff",
    400: "#a87bff",
    500: "#8a4dff",
    600: "#6200F2", // Roxo principal
    700: "#4f00c7",
    800: "#3d009e",
    900: "#2a0074",
  },

  secondary: {
    50: "#f0fff0",
    100: "#d9ffd9",
    200: "#b3ffb3",
    300: "#8cff8c",
    400: "#6BFF69", // Verde principal
    500: "#4de64b",
    600: "#33cc31",
    700: "#1fb31d",
    800: "#10990e",
    900: "#067004",
  },

  // Cores de fundo
  background: {
    primary: "#0f0c29",
    secondary: "#302b63",
    tertiary: "#24243e",
    glass: "rgba(255, 255, 255, 0.08)",
    glassHover: "rgba(255, 255, 255, 0.14)",
    glassActive: "rgba(98, 0, 242, 0.12)",
    glassGreen: "rgba(107, 255, 105, 0.06)",
  },

  // Cores de texto
  text: {
    primary: "#1f0a3b",
    secondary: "rgba(31, 10, 59, 0.85)",
    tertiary: "rgba(31, 10, 59, 0.60)",
    muted: "rgba(31, 10, 59, 0.40)",
    inverse: "#ffffff",
    light: "rgba(255, 255, 255, 0.90)",
  },

  // Cores de borda
  border: {
    light: "rgba(255, 255, 255, 0.20)",
    medium: "rgba(255, 255, 255, 0.35)",
    strong: "rgba(255, 255, 255, 0.50)",
    focus: "rgba(98, 0, 242, 0.30)",
    purple: "rgba(98, 0, 242, 0.15)",
    green: "rgba(107, 255, 105, 0.30)",
  },

  // Gradientes
  gradient: {
    primary: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    accent: "linear-gradient(135deg, #6200F2, #6BFF69)",
    text: "linear-gradient(135deg, #6200F2, #6BFF69)",
    purpleGreen: "linear-gradient(135deg, #6200F2 0%, #6BFF69 80%)",
  },

  // Cores de status
  status: {
    success: "#6BFF69",
    successBg: "rgba(107, 255, 105, 0.12)",
    warning: "#fbbf24",
    warningBg: "rgba(251, 191, 36, 0.12)",
    error: "#f87171",
    errorSecondary: "#a71515",
    errorBg: "rgba(0, 0, 0, 0.12)",
    info: "#60a5fa",
    infoBg: "rgba(96, 165, 250, 0.12)",
    purple: "#6200F2",
    purpleBg: "rgba(98, 0, 242, 0.08)",
  },
});

export type Colors = typeof colors;
