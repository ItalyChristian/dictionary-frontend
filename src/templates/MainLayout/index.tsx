import { Sidebar } from "@/components/Sidebar";
import * as styles from "./styles.css";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
