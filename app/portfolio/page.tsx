import type { Metadata } from "next";
import { Header } from '../_components/Header';
import { Spacing } from '../_components/Spacing';
import { Status } from '../_components/Status';
import { Skills } from '../_components/Skills';
import { Contact } from '../_components/Contact';
import { Footer } from '../_components/Footer';
import { PortfolioHero } from '../_components/PortfolioHero';
import { Story } from '../_components/Story';

export const metadata: Metadata = {
  title: "Portfolio | Olivier Rivière",
  description:
    "Portfolio et parcours : projets, compétences (React, Next.js, Tailwind, Node.js, Symfony) et expériences. Disponible pour missions freelance ou en équipe.",
}

export default function PortfolioPage() {
    return (
        <main className="relative">
            <Header variant="portfolio" />
            <Spacing size='md' />
            <PortfolioHero />
            <Spacing size="md" />
            <Story variant="long" title="Pourquoi je me suis reconverti dans le web" />
            <Spacing size="md" />
            <Status />
            <Spacing size='md' />
            <Skills />
            <Spacing size='md' />
            <Contact variant="portfolio" />
            <Spacing size='md' />
            <Footer />
        </main>
    );
}
