"use client";

import Link from "next/link";
import * as styles from "./styles.css";
import {
  ArrowBigLeftDash,
  ArrowLeftToLine,
  CircleArrowLeft,
  House,
} from "lucide-react";
import assistantVector from "@/assets/images/assistant-vector.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NotFoundComponent = () => {
  const router = useRouter();

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
                  <House size={14} /> <p>Go back to the homepage</p>
                </Link>
              </li>

              <li onClick={() => router.back()} className={styles.link}>
                <CircleArrowLeft size={14} /> <p>Return to previous page</p>
              </li>
            </ul>
          </div>

          <button
            className={styles.primaryButton}
            onClick={() => router.back()}
          >
            Return to previous page
          </button>
        </div>
      </div>
    </div>
  );
};
