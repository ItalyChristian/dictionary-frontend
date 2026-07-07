import { useMemo } from "react";
import clsx from "clsx";
import * as styles from "./styles.css";
import { PaginationProps } from "./types";
import { MoveLeft, MoveRight } from "lucide-react";

export function Pagination({
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
  onPageChange,
  onNext,
  onPrev,
  totalItems,
  itemsPerPage = 10,
  className,
}: PaginationProps) {
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - halfVisible);
      let end = Math.min(totalPages, currentPage + halfVisible);

      if (currentPage - halfVisible <= 0) {
        end = Math.min(totalPages, maxVisible);
      }

      if (currentPage + halfVisible > totalPages) {
        start = Math.max(1, totalPages - maxVisible + 1);
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <div className={clsx(styles.pagination, className)}>
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={styles.button}
        aria-label="Previous page"
      >
        <MoveLeft /> Previous
      </button>

      <div className={styles.pageNumbers}>
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={clsx(styles.pageButton, {
              [styles.active]: page === currentPage,
              [styles.dots]: page === "...",
            })}
            disabled={page === "..."}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className={styles.button}
        aria-label="Next page"
      >
        Next <MoveRight />
      </button>

      {totalItems !== undefined && (
        <div className={styles.info}>
          {itemsPerPage > 0 && (
            <span>
              {(currentPage - 1) * itemsPerPage + 1} -{" "}
              {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
