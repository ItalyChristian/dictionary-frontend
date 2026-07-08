"use client";

import { useRef, useEffect } from "react";
import clsx from "clsx";
import * as styles from "./styles.css";
import { AlphabetNavProps } from "./types";

export function AlphabetNav({
  onLetterClick,
  activeLetter,
  className,
}: AlphabetNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeLetter && containerRef.current) {
      const activeButton = containerRef.current.querySelector(
        `[data-letter="${activeLetter}"]`,
      ) as HTMLButtonElement;

      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeLetter]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div ref={containerRef} className={clsx(styles.container, className)}>
      {alphabet.map((letter) => {
        const active = activeLetter === letter;

        return (
          <button
            key={letter}
            data-letter={letter}
            onClick={() => onLetterClick(letter)}
            className={clsx(styles.letterButton, {
              [styles.letterActive]: active,
            })}
            aria-label={`Filter words starting with ${letter}`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
