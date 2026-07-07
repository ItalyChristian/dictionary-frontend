import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import * as styles from "./styles.css";
import { glassCard } from "@/styles/components/glass.css";
import { RegisterForm } from "./RegisterForm";

export default async function RegisterPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (token) {
    redirect("/");
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${glassCard} ${styles.card}`}>
        <RegisterForm />
      </div>
    </div>
  );
}
