import { notFound } from "next/navigation";
import { Metadata } from "next";
import MainLayout from "@/templates/MainLayout";
import { Header } from "@/components/Header";
import { WordDetails } from "@/components/WordDetails";
import { getWord } from "@/actions/entries/word";
import { PageLoading } from "@/templates/Loading";
import { flexColumn } from "@/styles/components/gridSystem.css";
import clsx from "clsx";

interface WordPageProps {
  params: Promise<{ word: string }>;
}

export async function generateMetadata({
  params,
}: WordPageProps): Promise<Metadata> {
  const { word } = await params;

  return {
    title: `${word} - Dictionary`,
    description: `Definition, pronouncing, and examples for the word "${word}"`,
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

    return (
      <MainLayout>
        <div
          className={clsx(flexColumn)}
          style={{
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Header />
          <WordDetails wordData={wordData} />
        </div>
      </MainLayout>
    );
  } catch (error) {
    notFound();
  }
}

export function WordPageLoading() {
  return (
    <MainLayout>
      <PageLoading />
    </MainLayout>
  );
}
