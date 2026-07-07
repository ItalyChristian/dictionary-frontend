import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LoginForm } from "./LoginForm";
import * as styles from "./styles.css";
import { glassCard } from "@/styles/components/glass.css";
import { flexColumnCenter } from "@/styles/components/gridSystem.css";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (token) {
    redirect("/");
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${glassCard} ${styles.content}`}>
        <div className={flexColumnCenter}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p>Log in to your account</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
