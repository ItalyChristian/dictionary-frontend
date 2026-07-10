"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { TextField } from "@radix-ui/themes";
import { Eye, EyeClosed } from "lucide-react";
import * as styles from "./styles.css";
import { Form } from "@/components/Form";
import { input } from "@/components/Form/styles.css";
import { loginAction } from "@/actions/auth/auth";
import { initialState } from "./types";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  useEffect(() => {
    if (state?.success && state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <Form.Form action={formAction} noValidate>
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
          maxLength={100}
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
          placeholder="Insert your password"
          autoComplete="current-password"
          maxLength={100}
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
        {isPending ? "Redirecting..." : "LOGIN"}
      </button>

      <div className={styles.footerLinks}>
        <div className={styles.divider} />

        <a href="/register" className={styles.link}>
          Not registered yet?{" "}
          <span className={styles.linkHighlight}>Create an account</span>
        </a>
      </div>
    </Form.Form>
  );
}
