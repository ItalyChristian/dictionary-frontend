"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@radix-ui/themes";

import { glass } from "@/styles/components/glass.css";
import { Form } from "@/components/Form";
import { input } from "@/components/Form/styles.css";
import { loginAction } from "@/api/auth/auth";
import * as styles from "./styles.css";
import { EyeClosedIcon, EyeDashedIcon } from "lucide-react";

const initialState = {
  error: "",
  success: false,
  redirectTo: "",
};

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
    <div className={`${glass} ${styles.wrapper}`}>
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
            disabled={isPending}
            required
          >
            <TextField.Slot
              className={styles.passwordIcon}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <EyeClosedIcon height="16" width="16" />
              ) : (
                <EyeDashedIcon height="16" width="16" />
              )}
            </TextField.Slot>
          </TextField.Root>
        </Form.FieldGroup>

        {state?.error && <Form.CardError message={state.error} />}

        <button type="submit" disabled={isPending}>
          {isPending ? "Redirecting..." : "Login"}
        </button>

        <div className={styles.footerLinks}>
          <a href="#" className={styles.link}>
            Forgot your password?
          </a>
        </div>
      </Form.Form>
    </div>
  );
}
