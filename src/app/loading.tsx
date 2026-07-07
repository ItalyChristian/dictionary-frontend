"use client";

import { glassCard } from "@/styles/components/glass.css";
import * as styles from "./loading.css";

function HeaderSkeleton() {
  return (
    <div className={styles.headerSkeleton}>
      <div className={styles.headerLeft}>
        <div className={styles.skeletonAvatar} />
        <div>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonSubtitle} />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.skeletonIcon} />
        <div className={styles.skeletonIcon} />
        <div className={styles.skeletonButton} />
      </div>
    </div>
  );
}

function ListItemSkeleton() {
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemLeft}>
        <div className={styles.skeletonListItemIcon} />
        <div>
          <div className={styles.skeletonListItemTitle} />
          <div className={styles.skeletonListItemSubtitle} />
        </div>
      </div>
      <div className={styles.listItemRight}>
        <div className={styles.skeletonBadge} />
        <div className={styles.skeletonListItemAction} />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <HeaderSkeleton />

      <div className={styles.contentWrapper}>
        <div className={styles.cardsGrid}>
          <div className={glassCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitleSkeleton}>
                <div className={styles.skeletonText} />
              </h2>
              <div className={styles.skeletonButtonSmall} />
            </div>
            <div className={styles.listContainer}>
              {Array.from({ length: 5 }).map((_, index) => (
                <ListItemSkeleton key={`item-${index}`} />
              ))}
            </div>
          </div>

          <div className={glassCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitleSkeleton}>
                <div className={styles.skeletonText} />
              </h2>
              <div className={styles.skeletonButtonSmall} />
            </div>
            <div className={styles.listContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={`activity-${index}`} className={styles.activityItem}>
                  <div className={styles.skeletonActivityIcon} />
                  <div className={styles.activityContent}>
                    <div className={styles.skeletonActivityText} />
                    <div className={styles.skeletonActivityTime} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}
