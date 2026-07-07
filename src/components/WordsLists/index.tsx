"use client";

import { useMemo } from "react";
import clsx from "clsx";
import * as styles from "./styles.css";
import { WordListProps } from "./types";

export function WordList({
  words,
  onWordSelect,
  selectedWord,
  className,
}: WordListProps) {
  const groupedWords = useMemo(() => {
    const groups: Record<string, string[]> = {};

    words.forEach((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(word);
    });

    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [words]);

  return (
    <div className={clsx(styles.container, className)}>
      {groupedWords.map(([letter, wordsList]) => (
        <div key={letter} className={styles.group}>
          <h3 className={styles.letterHeader}>{letter}</h3>
          <div className={styles.wordsGrid}>
            {wordsList.map((word) => (
              <button
                key={word}
                onClick={() => onWordSelect?.(word)}
                className={clsx(styles.wordButton, {
                  [styles.wordButtonActive]: selectedWord === word,
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
