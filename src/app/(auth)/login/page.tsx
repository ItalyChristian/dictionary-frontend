import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LoginForm } from "./LoginForm";
import * as styles from "./styles.css";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (token) {
    redirect("/");
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>

      <LoginForm />
    </div>
  );
}
