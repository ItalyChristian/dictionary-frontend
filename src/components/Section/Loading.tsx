import clsx from "clsx";
import { flexColumn } from "@/styles/components/gridSystem.css";
import { glass, glassCard } from "@/styles/components/glass.css";
import * as styles from "./styles.css";
import MainLayout from "@/templates/MainLayout";
import { LoadingProps } from "./types";

export const SectionLoading = ({ title, message }: LoadingProps) => {
  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <header className={clsx(glass, styles.header)}>
          <h1 className={styles.title}>{title}</h1>
        </header>

        <section className={clsx(glassCard, styles.sectionLoading)}>
          <div className={styles.spinner} />
          <div className={styles.loading}>{message}</div>
        </section>
      </div>
    </MainLayout>
  );
};
