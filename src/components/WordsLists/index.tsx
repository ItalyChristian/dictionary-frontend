"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import clsx from "clsx";
import { AlphabetNav } from "@/components/AlphabetNav";
import * as styles from "./styles.css";
import { WordListProps } from "./types";

export function WordList({
  words,
  onWordSelect,
  selectedWord,
  className,
  onLetterSelect,
  activeLetter: externalActiveLetter,
}: WordListProps) {
  const router = useRouter();
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const groupedWords = useMemo(() => {
    const groups: Record<string, string[]> = {};

    words.forEach((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(word);
    });

    const sortedKeys = Object.keys(groups).sort();
    const sortedGroups: Record<string, string[]> = {};
    sortedKeys.forEach((letter) => {
      sortedGroups[letter] = groups[letter].sort();
    });

    return sortedGroups;
  }, [words]);

  const handleLetterClick = (letter: string) => {
    onLetterSelect?.(letter);
  };

  const handleWordClick = (word: string) => {
    onWordSelect?.(word);
    router.push(`/word/${encodeURIComponent(word)}`);
  };

  if (words.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No words found</p>
      </div>
    );
  }

  return (
    <div className={clsx(styles.container, className)}>
      <AlphabetNav
        onLetterClick={handleLetterClick}
        activeLetter={externalActiveLetter}
        className={styles.alphabetNav}
      />

      {Object.entries(groupedWords).map(([letter, wordsList]) => (
        <div key={letter} id={`letter-${letter}`} className={styles.group}>
          <h3 className={styles.letterHeader}>{letter}</h3>
          <div className={styles.wordsGrid}>
            {wordsList.map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                onMouseEnter={() => setHoveredWord(word)}
                onMouseLeave={() => setHoveredWord(null)}
                className={clsx(styles.wordButton, {
                  [styles.wordButtonActive]: selectedWord === word,
                  [styles.wordButtonHover]: hoveredWord === word,
                })}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
