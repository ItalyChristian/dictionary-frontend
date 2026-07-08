"use client";

import { glass } from "@/styles/components/glass.css";
import clsx from "clsx";
import { header, text } from "@/components/Header/styles.css";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const WordPageHeader = () => {
  const router = useRouter();

  return (
    <header className={clsx(glass, header)}>
      <span
        className={text}
        aria-label="Back page"
        title="Back page"
        onClick={() => router.back()}
      >
        <CircleArrowLeft />
      </span>
    </header>
  );
};
