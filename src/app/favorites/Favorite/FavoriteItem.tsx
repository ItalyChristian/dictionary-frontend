import clsx from "clsx";
import * as styles from "./styles.css";
import { FavoriteItemProps } from "./types";
import { X } from "lucide-react";

export function FavoriteItem({
  favorite,
  onRemove,
  className,
}: FavoriteItemProps) {
  const formattedDate = new Date(favorite.added).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={clsx(styles.item, className)}>
      <div className={styles.content}>
        <h3 className={styles.word}>{favorite.word}</h3>
        <span className={styles.date}>Added: {formattedDate}</span>
      </div>

      <button
        onClick={() => onRemove(favorite.word)}
        className={styles.removeButton}
        aria-label={`Remove ${favorite.word} from favorites`}
      >
        <X />
      </button>
    </div>
  );
}
