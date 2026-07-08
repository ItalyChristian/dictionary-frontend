import MainLayout from "@/templates/MainLayout";
import { glassCard } from "@/styles/components/glass.css";
import { flexColumn } from "@/styles/components/gridSystem.css";
import clsx from "clsx";
import * as styles from "./loading.css";

export default function WordLoading() {
  return (
    <MainLayout>
      <div
        className={clsx(flexColumn)}
        style={{ gap: "1rem", alignItems: "center" }}
      >
        <div className={clsx(glassCard, styles.container)}>
          <div className={styles.headerSkeleton}>
            <div>
              <div className={styles.wordSkeleton} />
              <div className={styles.phoneticSkeleton} />
            </div>
            <div className={styles.favoriteSkeleton} />
          </div>

          <div className={styles.meaningsSkeleton}>
            {[1, 2].map((i) => (
              <div key={i} className={styles.meaningSkeleton}>
                <div className={styles.partOfSpeechSkeleton} />
                {[1, 2].map((j) => (
                  <div key={j} className={styles.definitionSkeleton}>
                    <div className={styles.definitionTextSkeleton} />
                    <div className={styles.exampleSkeleton} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.footerSkeleton}>
            <div className={styles.statsSkeleton} />
            <div className={styles.sourceSkeleton} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
