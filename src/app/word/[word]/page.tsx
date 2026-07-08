import { Metadata } from "next";
import MainLayout from "@/templates/MainLayout";
import { WordDetails } from "@/components/WordDetails";
import { WordError } from "../WordError/index";
import { getWord } from "@/actions/entries/word";
import { PageLoading } from "@/templates/Loading";
import { WordPageProps } from "./types";

export async function generateMetadata({
  params,
}: WordPageProps): Promise<Metadata> {
  const { word } = await params;

  return {
    title: `${word} - Dictionary`,
    description: `Definition, pronunciation, and examples for the word "${word}"`,
    openGraph: {
      title: `${word} - Dictionary`,
      description: `Learn the meaning and usage of "${word}"`,
    },
  };
}

export default async function WordPage({ params }: WordPageProps) {
  const { word } = await params;

  try {
    const wordData = await getWord(word);

    if (
      !wordData ||
      !wordData.details ||
      wordData.details.meanings.length === 0
    ) {
      return (
        <WordError word={word} error={`No definitions found for "${word}"`} />
      );
    }

    return (
      <MainLayout>
        <WordDetails wordData={wordData} />
      </MainLayout>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Word not found";

    if (errorMessage.includes("No definitions")) {
      return <WordError word={word} error={errorMessage} />;
    }

    return (
      <WordError
        word={word}
        error="This word doesn't exist in our dictionary"
      />
    );
  }
}

export function WordPageLoading() {
  return (
    <MainLayout>
      <PageLoading />
    </MainLayout>
  );
}
