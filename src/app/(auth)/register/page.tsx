import * as styles from "./styles.css";
import { glassCard } from "@/styles/components/glass.css";
import { RegisterForm } from "./RegisterForm";

export default async function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <div className={`${glassCard} ${styles.card}`}>
        <RegisterForm />
      </div>
    </div>
  );
}
