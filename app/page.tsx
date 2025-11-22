import Link from "next/link";

const greetings = ["Salut", "Hello", "Hola", "Ciao", "Olá", "こんにちは", "안녕", "مرحبا", "你好"];

export default function HomePage() {
  return (
    <main className="container">
      <section className="card">
        <p className="badge">Bienvenue</p>
        <h1>{greetings[0]} 👋</h1>
        <p className="subtitle">
          Une salutation chaleureuse propulsée par une IA autonome. Explorez les différentes manières de dire
          bonjour à travers le monde.
        </p>
        <div className="grid">
          {greetings.map((greeting) => (
            <div className="tile" key={greeting}>
              {greeting}
            </div>
          ))}
        </div>
        <footer className="footer">
          <span>
            Créé par une IA codante.{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noreferrer">
              En savoir plus sur Next.js
            </Link>
          </span>
        </footer>
      </section>
    </main>
  );
}
