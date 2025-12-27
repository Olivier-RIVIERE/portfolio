import { Header } from "../_components/Header"
import { Footer } from "../_components/Footer"
import { Spacing } from "../_components/Spacing"
import { Section } from "../_components/Section"
import { Code } from "../_components/Code"
import type { Metadata } from "next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | Création de site vitrine | Olivier Rivière",
  description:
    "Réponses aux questions fréquentes : packs, tarifs, frais techniques, propriété du site, paiement, suivi et maintenance.",
}

export default function FaqPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Header variant="client" />
      <Spacing size="md" />

      <Section className="flex flex-col gap-4 flex-1">
        <h1 className="text-3xl font-semibold tracking-tight text-primary">
          FAQ
        </h1>

        <p className="text-primary">
          Les réponses aux questions les plus fréquentes sur mes packs, le fonctionnement, et ce qui est inclus.
          Si un point n’est pas clair, vous pouvez me contacter par email.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Pourquoi les frais techniques ne sont-ils pas inclus dans le pack ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Les tarifs d’hébergement et de nom de domaine varient (promotions, renouvellements).
              Pour rester <Code>100% transparent</Code>, ces frais sont <Code>facturés au réel</Code>, <Code>sans marge</Code>, avec facture.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Suis-je propriétaire du site ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Oui. Le site est livré et les accès (nom de domaine / hébergement) sont mis à <Code>votre nom</Code>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Que comprend le Pack Essentiel ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Un site vitrine de 3 à 5 pages, un design soigné (mobile inclus), un formulaire de contact par email,
              un <Code>SEO de base</Code>, et la mise en ligne.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Quelle est la différence entre Essentiel et Avancé ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              L’Avancé reprend tout l’Essentiel et ajoute une <Code>base de données</Code> + un <Code>espace d’administration</Code>
              pour gérer du contenu (ex : réalisations / actualités).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Combien coûte une page supplémentaire ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Une page supplémentaire est facturée <Code>+170€ TTC</Code> (même niveau de qualité et d’optimisation).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q6" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Comment se passe le paiement ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              50% d’acompte au lancement du projet, puis 50% à la livraison / mise en ligne.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q7" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Que se passe-t-il après la mise en ligne ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              <Code>3 mois de suivi</Code> sont inclus (petites corrections / ajustements légers).
              Ensuite, une maintenance optionnelle peut être mise en place.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q8" className="border-white/10">
            <AccordionTrigger className="text-primary">
              La maintenance est-elle obligatoire ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Non. Elle est optionnelle (69€ TTC / mois) et peut être activée uniquement si vous en avez besoin.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <a
          href="mailto:olivier.riviere.dev@gmail.com?subject=Question%20FAQ%20-%20Site%20vitrine&body=Bonjour,%0A%0AJ’ai%20une%20question%20:%20%0A%0AMerci"
          className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
        >
          Poser une question par email
        </a>
      </Section>

      <Spacing size="md" />
      <Footer />
    </main>
  )
}
