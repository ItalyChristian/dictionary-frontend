import MainLayout from "@/templates/MainLayout";
import { Header } from "@/components/Header";
import { accent } from "./page.css";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      Exemplo usando <span className={accent}>primary[600]</span>
    </MainLayout>
  );
}
