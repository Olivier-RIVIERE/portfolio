import type { Metadata } from "next";
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Spacing } from './_components/Spacing';
import { Contact } from './_components/Contact';
import { Footer } from './_components/Footer';
import { Story } from './_components/Story';
import { Pricing } from './_components/Pricing';
import { FaqMini } from "./_components/FaqMini";

export const metadata: Metadata = {
  title: "Création de site vitrine pour Indépendants & TPE | Olivier Rivière (Rouen)",
  description:
    "Développeur web freelance à Rouen : création de sites vitrines rapides, clairs et sans coût caché. Packs transparents, contact simple par email.",
  openGraph: {
    title: "Création de site vitrine pour Indépendants & TPE | Olivier Rivière (Rouen)",
    description:
      "Création de sites vitrines : packs transparents, prix affichés, aucun coût caché.",
    url: "https://olivier-riviere-web.vercel.app/",
    siteName: "Olivier Rivière",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function Home() {
  return (
    <main className="relative">
      <Header variant="client" />
      <Spacing size='md' />
      <Hero />
      <Spacing size='md' />
      <Story variant="short" title="Pourquoi je fais ce métier" />
      <Spacing size='md' />
      <Pricing />
      <Spacing size='md' />
      <FaqMini />
      <Spacing size='md' />
      <Contact variant="client" />
      <Spacing size='md' />
      <Footer />
    </main>
  );
}
