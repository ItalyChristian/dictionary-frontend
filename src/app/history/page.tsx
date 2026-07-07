import clsx from "clsx";
import { glass, glassCard } from "@/styles/components/glass.css";
import { flexColumn } from "@/styles/components/gridSystem.css";
import MainLayout from "@/templates/MainLayout";
import * as styles from "./styles.css";

export default function History() {
  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <header className={clsx(glass, styles.header)}>
          <h1 className={styles.title}>History</h1>
        </header>

        <section className={clsx(glassCard, styles.section)}></section>
      </div>
    </MainLayout>
  );
}
