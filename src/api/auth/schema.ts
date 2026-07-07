import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid e-mail format")
    .min(1, "E-mail is required")
    .max(255, "E-mail too long"),
  password: z
    .string(
      "Password must be at least 6 characters long including 1 letter and 1 number.",
    )
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password too long"),
});
