import clsx from "clsx";
import * as styles from "./styles.css";
import { glass } from "@/styles/components/glass.css";

export const Header = () => {
  return (
    <header className={clsx(glass, styles.wrapper)}>
      <h1 className={styles.title}>Dictionary</h1>
    </header>
  );
};
