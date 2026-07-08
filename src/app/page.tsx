"use client";

import { useEffect, useState } from "react";
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
  const [activeLetter, setActiveLetter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

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
  } = useEntries(50);

  useEffect(() => {
    if (activeLetter) {
      setSearchTerm(activeLetter);
    } else if (searchQuery) {
      setSearchTerm(searchQuery);
    } else {
      setSearchTerm("");
    }
  }, [activeLetter, setSearchTerm, searchQuery]);

  const filteredEntries = activeLetter
    ? entries.filter((word) => word.charAt(0).toUpperCase() === activeLetter)
    : entries;

  const handleLetterSelect = (letter: string) => {
    if (activeLetter === letter) {
      setActiveLetter("");
    } else {
      setActiveLetter(letter);
      setSearchQuery("");
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setActiveLetter("");
    setSearchTerm(value);
  };

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
            onChange={handleSearchChange}
            placeholder="Search for a word..."
            totalResults={totalDocs}
            isLoading={isLoading}
          />

          {totalDocs > 0 && (
            <span className={styles.resultsCount}>
              {filteredEntries.length.toLocaleString()} words found
              {activeLetter && ` (filtered by letter ${activeLetter})`}
              {searchQuery && ` for "${searchQuery}"`}
            </span>
          )}

          <WordList
            words={filteredEntries}
            onWordSelect={setSelectedWord}
            selectedWord={selectedWord}
            onLetterSelect={handleLetterSelect}
            activeLetter={activeLetter}
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
        </section>
      </div>
    </MainLayout>
  );
}
