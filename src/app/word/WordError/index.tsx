"use client";

import clsx from "clsx";
import { glass, glassCard } from "@/styles/components/glass.css";
import { flexColumn } from "@/styles/components/gridSystem.css";
import MainLayout from "@/templates/MainLayout";
import * as styles from "./styles.css";

interface WordErrorProps {
  title?: string;
  error?: string | Error;
  word?: string;
  onRetry?: () => void;
}

export function WordError({
  title = "Word Not Found",
  error,
  word,
  onRetry,
}: WordErrorProps) {
  const errorMessage =
    error instanceof Error
      ? error.message
      : error || "This word doesn't exist in our dictionary";

  return (
    <MainLayout>
      <div
        className={clsx(flexColumn)}
        style={{
          gap: "1rem",
        }}
      >
        <header className={clsx(glass, styles.header)}>
          <h1 className={styles.title}>{title}</h1>
        </header>

        <section className={clsx(glassCard, styles.section)}>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            <h2 className={styles.errorTitle}>
              {word ? `"${word}" not found` : "Word not found"}
            </h2>

            <p className={styles.errorMessage}>{errorMessage}</p>

            <div className={styles.errorActions}>
              {onRetry && (
                <button onClick={onRetry} className={styles.retryButton}>
                  Try Again
                </button>
              )}
              <a href="/" className={styles.backButton}>
                ← Back to Dictionary
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
