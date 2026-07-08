"use client";

import * as styles from "./styles.css";
import { useGreeting } from "@/hooks/greeting/useGreeting";

export type GreetingProps = {
  name?: string;
};

export function Greeting({ name }: GreetingProps) {
  const greeting = useGreeting(name);

  return <span className={styles.userName}>{greeting}</span>;
}
