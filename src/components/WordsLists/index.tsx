"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import clsx from "clsx";
import * as styles from "./styles.css";
import { WordListProps } from "./types";

export function WordList({
  words,
  onWordSelect,
  selectedWord,
  className,
}: WordListProps) {
  const router = useRouter();

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

  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const handleWordClick = (word: string) => {
    onWordSelect?.(word);
    router.push(`/word/${encodeURIComponent(word)}`);
  };

  return (
    <div className={clsx(styles.container, className)}>
      {groupedWords.map(([letter, wordsList]) => (
        <div key={letter} className={styles.group}>
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
