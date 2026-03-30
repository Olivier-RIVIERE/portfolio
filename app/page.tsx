import type { Metadata } from "next";
import { Header } from './_components/Header';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';
import { Skills } from './_components/Skills';
import { Contact } from './_components/Contact';
import { Footer } from './_components/Footer';
import { PortfolioHero } from './_components/PortfolioHero';
import { Story } from './_components/Story';

export const metadata: Metadata = {
  title: "Olivier Rivière — Développeur Web | Next.js · TypeScript · React",
  description:
    "Portfolio de développeur web fullstack. Projets, compétences (Next.js, React, TypeScript, Tailwind, Node.js, Symfony) et parcours. Basé en Normandie, disponible en France.",
  openGraph: {
    title: "Olivier Rivière — Développeur Web",
    description: "Portfolio développeur web : projets, compétences, parcours.",
    url: "https://portfolio-olivier-riviere.vercel.app/",
    siteName: "Olivier Rivière",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Spacing size='md' />
      <PortfolioHero />
      <Spacing size="md" />
      <Story />
      <Spacing size="md" />
      <Status />
      <Spacing size='md' />
      <Skills />
      <Spacing size='md' />
      <Contact />
      <Spacing size='md' />
      <Footer />
    </main>
  );
}