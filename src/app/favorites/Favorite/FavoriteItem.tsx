import clsx from "clsx";
import * as styles from "./styles.css";
import { FavoriteItemProps } from "./types";
import { X } from "lucide-react";
import { formatDate } from "@/utils/formatDate";

export function FavoriteItem({
  favorite,
  onRemove,
  className,
}: FavoriteItemProps) {
  const formattedDate = formatDate(favorite.added);

  return (
    <div className={clsx(styles.item, className)}>
      <div className={styles.content}>
        <p className={styles.word}>{favorite.word}</p>
        <span className={styles.date}>Added: {formattedDate}</span>
      </div>

      <button
        onClick={() => onRemove(favorite.word)}
        className={styles.removeButton}
        aria-label={`Remove ${favorite.word} from favorites`}
        title={`Remove ${favorite.word} from favorites`}
      >
        <X />
      </button>
    </div>
  );
}
