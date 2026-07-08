"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@radix-ui/themes";
import { Eye, EyeClosed } from "lucide-react";
import * as styles from "./styles.css";
import { Form } from "@/components/Form";
import { input } from "@/components/Form/styles.css";
import { registerAction } from "@/actions/auth/auth";
import { initialState } from "./types";

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(
    registerAction,
    initialState,
  );

  useEffect(() => {
    if (state?.success && state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <Form.Form action={formAction} style={{ width: "100%" }} noValidate>
      <Form.FieldGroup>
        <Form.Label htmlFor="name" text="Name" />
        <TextField.Root
          id="name"
          name="name"
          type="text"
          className={input}
          size="2"
          placeholder="Insert your name"
          disabled={isPending}
          required
        />
      </Form.FieldGroup>

      <Form.FieldGroup>
        <Form.Label htmlFor="email" text="E-mail" />
        <TextField.Root
          id="email"
          name="email"
          type="email"
          className={input}
          size="2"
          placeholder="Insert your e-mail"
          autoComplete="email"
          disabled={isPending}
          required
        />
      </Form.FieldGroup>

      <Form.FieldGroup>
        <Form.Label htmlFor="password" text="Senha" />

        <TextField.Root
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          className={input}
          size="2"
          placeholder="Create your password"
          autoComplete="current-password"
          disabled={isPending}
          required
        >
          <TextField.Slot
            className={styles.passwordIcon}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? (
              <EyeClosed height="16" width="16" />
            ) : (
              <Eye height="16" width="16" />
            )}
          </TextField.Slot>
        </TextField.Root>
      </Form.FieldGroup>

      {state?.error && <Form.CardError message={state.error} />}

      <button className={styles.button} type="submit" disabled={isPending}>
        {isPending ? "Redirecting..." : "Create account"}
      </button>

      <div className={styles.footerLinks}>
        <div className={styles.divider} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.3rem",
          }}
        >
          <p className={styles.text}>Already have an account?</p>
          <span onClick={() => router.back()} className={styles.link}>
            Return to Login page
          </span>
        </div>
      </div>
    </Form.Form>
  );
}
