import { page, card, eyebrow, accent } from './page.css';

export default function Home() {
  return (
    <main className={page}>
      <section className={card}>
        <p className={eyebrow}>Vanilla Extract</p>
        <h1>Teste cores</h1>
        <p>
          Exemplo usando <span className={accent}>primary[600]</span> 
        </p>
      </section>
    </main>
  );
}
