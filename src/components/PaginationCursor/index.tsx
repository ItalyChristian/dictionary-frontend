"use client";

import clsx from "clsx";
import * as styles from "./styles.css";

interface PaginationCursorProps {
  hasNext: boolean;
  hasPrev: boolean;
  onNext: () => void;
  onPrev: () => void;
  isLoading?: boolean;
  totalItems?: number;
  className?: string;
}

export function PaginationCursor({
  hasNext,
  hasPrev,
  onNext,
  onPrev,
  isLoading = false,
  totalItems,
  className,
}: PaginationCursorProps) {
  if (!hasNext && !hasPrev) return null;

  return (
    <div className={clsx(styles.container, className)}>
      <button
        onClick={onPrev}
        disabled={!hasPrev || isLoading}
        className={styles.button}
        aria-label="Previous page"
      >
        <span>←</span> Previous
      </button>

      {totalItems !== undefined && (
        <span className={styles.info}>
          {totalItems.toLocaleString()} words total
        </span>
      )}

      <button
        onClick={onNext}
        disabled={!hasNext || isLoading}
        className={styles.button}
        aria-label="Next page"
      >
        Next <span>→</span>
      </button>
    </div>
  );
}
