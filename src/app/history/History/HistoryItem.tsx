import clsx from "clsx";
import * as styles from "./styles.css";
import { formatDate } from "@/utils/formatDate";
import { HistoryItemProps } from "./types";
import { useRouter } from "next/navigation";

export function HistoryItem({ history }: HistoryItemProps) {
  const router = useRouter();

  const formattedDate = formatDate(history.added);

  const handleWordClick = (word: string) => {
    router.push(`/word/${encodeURIComponent(history.word)}`);
  };

  return (
    <div
      className={clsx(styles.item)}
      onClick={() => handleWordClick(history.word)}
    >
      <div className={styles.content}>
        <p className={styles.word}>{history.word}</p>
        <span className={styles.date}>Added: {formattedDate}</span>
      </div>
    </div>
  );
}
