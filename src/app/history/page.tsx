"use client";

import { useState } from "react";
import clsx from "clsx";
import { glass, glassCard } from "@/styles/components/glass.css";
import { flexColumn } from "@/styles/components/gridSystem.css";
import MainLayout from "@/templates/MainLayout";
import * as styles from "./styles.css";
import { useHistory } from "@/hooks/history/useHistory";
import { History } from "./History";
import { Pagination } from "@/components/Pagination";

export default function HistoryPage() {
  const pageTitle = "History";

  const [page, setPage] = useState(1);
  const {
    history,
    isLoading,
    error,
    totalDocs,
    totalPages,
    currentPage,
    hasNext,
    hasPrev,
    goToPage,
    nextPage,
    prevPage,
  } = useHistory(page, 10);

  if (isLoading) {
    return <History.Loading title={pageTitle} message="Loading history..." />;
  }

  if (error) {
    return <History.Error title={pageTitle} error={error} />;
  }

  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <header className={clsx(glass, styles.header)}>
          <h1 className={styles.title}>History</h1>
        </header>

        <section className={clsx(glassCard, styles.section)}>
          {history.length === 0 ? (
            <div className={styles.empty}>
              <p>Nothing search yet</p>
              <p className={styles.emptySub}>Start searching words!</p>
            </div>
          ) : (
            <>
              <div className={styles.list}>
                {history.map((item) => (
                  <History.Item key={item.word} history={item} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                hasNext={hasNext}
                hasPrev={hasPrev}
                onPageChange={goToPage}
                onNext={nextPage}
                onPrev={prevPage}
                totalItems={totalDocs}
                itemsPerPage={10}
                className={styles.pagination}
              />
            </>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
