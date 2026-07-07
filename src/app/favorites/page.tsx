"use client";

import { useState } from "react";
import clsx from "clsx";
import * as styles from "./styles.css";
import MainLayout from "@/templates/MainLayout";
import { glass, glassCard } from "@/styles/components/glass.css";
import { flexColumn } from "@/styles/components/gridSystem.css";
import { useFavorites } from "@/hooks/favorites/useFavorites";
import { Pagination } from "@/components/Pagination";
import { Favorite } from "./Favorite";

export default function Favorites() {
  const pageTitle = "Favorites";

  const [page, setPage] = useState(1);
  const {
    favorites,
    isLoading,
    error,
    totalDocs,
    totalPages,
    currentPage,
    hasNext,
    hasPrev,
    removeFavorite,
    goToPage,
    nextPage,
    prevPage,
  } = useFavorites(page, 5);

  if (isLoading) {
    return (
      <Favorite.Loading title={pageTitle} message="Loading favorites..." />
    );
  }

  if (error) {
    return <Favorite.Error title={pageTitle} error={error} />;
  }

  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <header className={clsx(glass, styles.header)}>
          <h1 className={styles.title}>{pageTitle}</h1>
          <span className={styles.count}>{totalDocs} words</span>
        </header>

        <section className={clsx(glassCard, styles.section)}>
          {favorites.length === 0 ? (
            <div className={styles.empty}>
              <p>No favorites yet</p>
              <p className={styles.emptySub}>
                Start adding words to your favorites!
              </p>
            </div>
          ) : (
            <>
              <div className={styles.list}>
                {favorites.map((favorite) => (
                  <Favorite.Item
                    key={favorite.word}
                    favorite={favorite}
                    onRemove={removeFavorite}
                  />
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
                itemsPerPage={5}
                className={styles.pagination}
              />
            </>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
