import { ExternalLink, Eye, Heart } from "lucide-react";
import { footer, stats, stat, source, sourceLink } from "./styles.css";
import { FooterProps } from "./types";

export const WordDetailsFooter = ({ favorites, views }: FooterProps) => {
  return (
    <div className={footer}>
      <div className={stats}>
        <span className={stat}>
          <Heart /> {favorites} favorites
        </span>
        <span className={stat}>
          <Eye /> {views} views
        </span>
      </div>

      <div className={source}>
        <span>Data provided by </span>
        <a
          href="https://dictionaryapi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={sourceLink}
        >
          DictionaryAPI.dev
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
