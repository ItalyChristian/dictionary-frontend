"use client";

import { useState } from "react";
import clsx from "clsx";
import MainLayout from "@/templates/MainLayout";
import { Header } from "@/components/Header";
import { glassCard } from "@/styles/components/glass.css";
import { flexColumn } from "@/styles/components/gridSystem.css";
import { useEntries } from "@/hooks/entries/useEntries";
import { SearchBar } from "@/components/SearchBar";
import { WordList } from "@/components/WordsLists";
import { Pagination } from "@/components/Pagination";
import { PageLoading } from "@/templates/Loading";
import * as styles from "./page.css";
import { PageError } from "@/templates/Error";

export default function Home() {
  const [selectedWord, setSelectedWord] = useState<string | undefined>();

  const {
    entries,
    isLoading,
    error,
    totalDocs,
    hasNext,
    hasPrev,
    searchTerm,
    setSearchTerm,
    loadNext,
    loadPrevious,
    refetch,
  } = useEntries(20);

  if (isLoading && entries.length === 0) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} refetch={refetch} />;
  }

  return (
    <MainLayout>
      <div className={clsx(flexColumn)} style={{ gap: "1rem" }}>
        <Header />

        <section className={clsx(glassCard, styles.section)}>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search for a word..."
            totalResults={totalDocs}
            isLoading={isLoading}
          />

          {entries.length > 0 ? (
            <>
              <WordList
                words={entries}
                onWordSelect={setSelectedWord}
                selectedWord={selectedWord}
              />

              <Pagination
                hasNext={hasNext}
                hasPrev={hasPrev}
                onNext={loadNext}
                onPrev={loadPrevious}
                isLoading={isLoading}
                totalItems={totalDocs}
                className={styles.pagination}
                mode="cursor"
              />
            </>
          ) : (
            <div className={styles.empty}>
              <p>No words found</p>
              <p className={styles.emptySub}>
                {searchTerm
                  ? `No results for "${searchTerm}"`
                  : "Try adjusting your search"}
              </p>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
