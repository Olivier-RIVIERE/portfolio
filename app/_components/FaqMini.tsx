import { Section } from "./Section"
import Link from "next/link"
import { Code } from "./Code"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FaqMini = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">
        FAQ
      </Badge>

      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Questions fréquentes
      </h2>

      <Card className="w-full flex flex-col gap-2 p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Pourquoi les frais techniques ne sont-ils pas inclus ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Pour rester 100% transparent : l’hébergement et le nom de domaine varient selon les offres et renouvellements.
              Ils sont donc <Code>facturés au réel</Code>, <Code>sans marge</Code>, avec <Code>facture</Code>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Suis-je propriétaire du site ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Oui. Le site est livré, et les accès techniques (nom de domaine / hébergement) sont mis à <Code>votre nom</Code>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-primary">
              Que se passe-t-il après la mise en ligne ?
            </AccordionTrigger>
            <AccordionContent className="text-primary leading-relaxed">
              Vous avez <Code>3 mois de suivi inclus</Code> (petites corrections et ajustements).
              Ensuite, une maintenance mensuelle optionnelle peut être mise en place.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div>
          <Link
            href="/faq"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Voir toute la FAQ
          </Link>
        </div>
      </Card>
    </Section>
  )
}
