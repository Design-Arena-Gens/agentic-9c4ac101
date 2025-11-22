import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salut | Agentic Greeting",
  description: "A friendly welcome page created autonomously by Codex."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
