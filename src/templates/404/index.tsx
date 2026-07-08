import Link from "next/link";
import * as styles from "./styles.css";

export const NotFoundComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="notFoundTitle"
          >
            <title id="notFoundTitle">404 - Page Not Found Illustration</title>

            <rect width="400" height="300" rx="12" fill="#F3F4F6" />
            <text
              x="200"
              y="120"
              textAnchor="middle"
              fontSize="72"
              fontWeight="bold"
              fill="#6366F1"
            >
              404
            </text>
            <text
              x="200"
              y="180"
              textAnchor="middle"
              fontSize="20"
              fill="#6B7280"
            >
              Page Not Found
            </text>
            <circle cx="120" cy="220" r="20" fill="#E5E7EB" />
            <circle cx="280" cy="220" r="20" fill="#E5E7EB" />
            <path
              d="M160 250 Q200 280 240 250"
              stroke="#9CA3AF"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            Oops! We couldn't find the page you're looking for.
          </p>

          <div className={styles.suggestions}>
            <h2 className={styles.suggestionsTitle}>Here's what you can do:</h2>
            <ul className={styles.suggestionsList}>
              <li>
                <Link href="/login" className={styles.link}>
                  🏠 Go back to the homepage
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/login" className={styles.primaryButton}>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
