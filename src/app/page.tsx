import MainLayout from "@/templates/MainLayout";
import { accent } from "./page.css";

export default function Home() {
  return (
    <MainLayout>
      Exemplo usando <span className={accent}>primary[600]</span>
    </MainLayout>
  );
}
