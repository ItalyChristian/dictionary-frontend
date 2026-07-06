import MainLayout from "@/templates/MainLayout";
import { accent } from "./page.css";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      Exemplo usando <span className={accent}>primary[600]</span>
    </MainLayout>
  );
}
