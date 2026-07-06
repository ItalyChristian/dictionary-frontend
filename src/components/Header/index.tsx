import clsx from "clsx";
import * as styles from "./styles.css";
import { glass } from "@/styles/components/glass.css";
import { TextField } from "@radix-ui/themes";
import { input } from "../Form/styles.css";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className={clsx(glass, styles.wrapper)}>
      <h1 className={styles.title}>Dictionary</h1>

      <div>
        <TextField.Root
          id="search"
          className={input}
          type="text"
          size="2"
          placeholder="Search any word..."
          required
        >
          <TextField.Slot className={styles.inputIcon}>
            <Search height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </div>
    </header>
  );
};
