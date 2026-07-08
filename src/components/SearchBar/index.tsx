"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { glass } from "@/styles/components/glass.css";
import * as styles from "./styles.css";
import { SearchBarProps } from "./types";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search for a word...",
  totalResults,
  className,
  isLoading = false,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    onChange("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={clsx(styles.container, glass, className)}>
      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={clsx(styles.input, {
            [styles.inputFocused]: isFocused,
          })}
          disabled={isLoading}
        />

        {value && (
          <button onClick={handleClear} className={styles.clearButton}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {isLoading && (
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner} />
          </div>
        )}
      </div>

      {totalResults !== undefined && totalResults > 0 && (
        <div className={styles.resultsCount}>
          {totalResults.toLocaleString()} words found
        </div>
      )}
    </div>
  );
}
