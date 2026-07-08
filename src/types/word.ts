export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface WordStats {
  favorites: number;
  views: number;
}

export interface WordDetails {
  word: string;
  meanings: Meaning[];
  phonetics: Phonetic[];
  origin?: string;
  stats: WordStats;
}

export interface WordResponse {
  word: string;
  details: WordDetails;
  isFavorite: boolean;
  fromCache: boolean;
}
