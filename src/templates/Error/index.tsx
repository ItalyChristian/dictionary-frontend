import clsx from "clsx";
import * as styles from "./styles.css";
import MainLayout from "../MainLayout";
import { Header } from "@/components/Header";
import { flexColumn } from "@/styles/components/gridSystem.css";
import { glassCard } from "@/styles/components/glass.css";
import { PageErrorProps } from "./types";

export const PageError = ({ error, refetch }: PageErrorProps) => {
  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <Header />

        <section className={clsx(glassCard, styles.errorSection)}>
          <div className={styles.errorContainer}>
            <h2>Something went wrong</h2>
            <p>{error}</p>
            <button onClick={refetch} className={styles.retryButton}>
              Try Again
            </button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
