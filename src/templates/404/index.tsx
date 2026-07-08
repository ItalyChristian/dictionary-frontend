import Link from "next/link";
import * as styles from "./styles.css";
import { House, KeyRound } from "lucide-react";
import assistantVector from "@/assets/images/assistant-vector.png";
import Image from "next/image";

export const NotFoundComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={assistantVector}
            alt="Virtual assistant Helena waving"
            className={styles.loadingImage}
            priority
          />
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
                <Link href="/" className={styles.link}>
                  <House size={14} /> Go back to the homepage
                </Link>
              </li>

              <li>
                <Link href="/login" className={styles.link}>
                  <KeyRound size={14} /> Go back to the login page
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
