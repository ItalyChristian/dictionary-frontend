import clsx from "clsx";
import * as styles from "./styles.css";
import { formatDate } from "@/utils/formatDate";
import { HistoryItemProps } from "./types";

export function HistoryItem({ history }: HistoryItemProps) {
  const formattedDate = formatDate(history.added);

  return (
    <div className={clsx(styles.item)}>
      <div className={styles.content}>
        <p className={styles.word}>{history.word}</p>
        <span className={styles.date}>Added: {formattedDate}</span>
      </div>
    </div>
  );
}
