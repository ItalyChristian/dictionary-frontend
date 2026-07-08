"use client";

import { useFavoriteStatus } from "@/hooks/favorites/useFavoriteStatus";
import { useEffect } from "react";
import clsx from "clsx";
import * as styles from "./styles.css";
import { glassCard } from "@/styles/components/glass.css";
import { WordDetailsProps } from "./types";
import { Heart, Volume2 } from "lucide-react";
import { WordDetailsFooter } from "./Footer";

export function WordDetails({
  wordData,
  onFavoriteToggle,
  className,
}: WordDetailsProps) {
  const { word, details } = wordData;

  const {
    isFavorite,
    isLoading: isToggling,
    toggleFavorite,
  } = useFavoriteStatus(word, wordData.isFavorite);

  useEffect(() => {
    onFavoriteToggle?.(isFavorite);
  }, [isFavorite, onFavoriteToggle]);

  const handleFavoriteToggle = async () => {
    try {
      await toggleFavorite();
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const playAudio = (audioUrl?: string) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(console.error);
    }
  };

  return (
    <div className={clsx(glassCard, styles.container, className)}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.word}>{word}</h1>
          {details.phonetics.length > 0 && (
            <div className={styles.phonetics}>
              {details.phonetics.map((phonetic, index) => (
                <span key={index} className={styles.phonetic}>
                  {phonetic.text}
                  {phonetic.audio && (
                    <button
                      onClick={() => playAudio(phonetic.audio)}
                      className={styles.audioButton}
                      aria-label="Play pronouncing"
                    >
                      <Volume2 size={16} />
                    </button>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <button
            onClick={handleFavoriteToggle}
            disabled={isToggling}
            className={clsx(styles.favoriteButton, {
              [styles.favoriteActive]: isFavorite,
            })}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? (
              <Heart size={24} fill="#EF4444" stroke="#EF4444" />
            ) : (
              <Heart size={24} />
            )}
          </button>
        </div>
      </div>

      {details.origin && (
        <div className={styles.origin}>
          <h3 className={styles.sectionTitle}>Origin</h3>
          <p className={styles.originText}>{details.origin}</p>
        </div>
      )}

      <div className={styles.meanings}>
        {details.meanings.map((meaning, index) => (
          <div key={index} className={styles.meaning}>
            <h3 className={styles.partOfSpeech}>{meaning.partOfSpeech}</h3>

            <ol className={styles.definitionsList}>
              {meaning.definitions.map((def, defIndex) => (
                <li key={defIndex} className={styles.definitionItem}>
                  <p className={styles.definition}>{def.definition}</p>

                  {def.example && (
                    <blockquote className={styles.example}>
                      "{def.example}"
                    </blockquote>
                  )}

                  {def.synonyms.length > 0 && (
                    <div className={styles.synonyms}>
                      <span className={styles.tagLabel}>Synonyms:</span>
                      {def.synonyms.map((synonym, synIndex) => (
                        <span key={synIndex} className={styles.tag}>
                          {synonym}
                        </span>
                      ))}
                    </div>
                  )}

                  {def.antonyms.length > 0 && (
                    <div className={styles.antonyms}>
                      <span className={styles.tagLabel}>Antonyms:</span>
                      {def.antonyms.map((antonym, antIndex) => (
                        <span key={antIndex} className={styles.tag}>
                          {antonym}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <WordDetailsFooter
        favorites={details.stats.favorites}
        views={details.stats.views}
      />
    </div>
  );
}
