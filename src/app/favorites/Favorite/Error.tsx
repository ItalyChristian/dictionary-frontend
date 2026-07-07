import clsx from "clsx";
import { flexColumn } from "@/styles/components/gridSystem.css";
import MainLayout from "@/templates/MainLayout";
import { glass, glassCard } from "@/styles/components/glass.css";
import * as styles from "../styles.css";
import { ErrorProps } from "./types";

export const ErrorFavoritesPage = ({ error }: ErrorProps) => {
  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <header className={clsx(glass, styles.header)}>
          <h1 className={styles.title}>Favorites</h1>
        </header>

        <section className={clsx(glassCard, styles.section)}>
          <div className={styles.error}>Error: {error}</div>
        </section>
      </div>
    </MainLayout>
  );
};
