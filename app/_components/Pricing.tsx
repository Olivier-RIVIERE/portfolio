import { Section } from "./Section"
import { Code } from "./Code"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"


export const Pricing = () => {
  return (
    <Section className="flex flex-col items-start gap-4" id="tarifs">
      <Badge variant={"outline"} className="text-muted-foreground">
        Tarifs
      </Badge>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          Packs clairs
        </h2>

        <p className="text-primary">
          Des packs simples, un périmètre précis, et un site pensé pour inspirer confiance.
          <Code> Aucun coût caché</Code> : tout est expliqué avant le démarrage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Card className="p-5 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-primary">
              Site Vitrine Essentiel
            </h3>
            <p className="text-lg font-semibold text-primary">1 090€ TTC</p>
          </div>

          <p className="text-primary">
            Idéal pour une présence en ligne professionnelle, rapide et efficace.
          </p>

          <ul className="text-primary flex flex-col gap-1">
            <li>• 3 à 5 pages (Accueil, Services, Réalisations, À propos, Contact).</li>
            <li>• Design soigné + version mobile.</li>
            <li>• Formulaire de contact (messages reçus par email).</li>
            <li>• SEO de base (structure, balises essentielles, performance).</li>
            <li>• Mise en ligne et configuration.</li>
          </ul>

          <a
            href="mailto:olivier.riviere.dev@gmail.com?subject=Demande%20devis%20-%20Pack%20Essentiel&body=Bonjour,%0A%0AJe%20souhaite%20un%20devis%20pour%20le%20Pack%20Essentiel.%0AActivit%C3%A9%20:%20%0AVille%20:%20%0ANombre%20de%20pages%20:%20%0AD%C3%A9lai%20:%20%0A%0AMerci"
            className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
          >
            Choisir Essentiel
          </a>
        </Card>

        <Card className="p-5 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-primary">
              Site Vitrine Avancé
            </h3>
            <p className="text-lg font-semibold text-primary">1 890€ TTC</p>
          </div>

          <p className="text-primary">
            Idéal si vous souhaitez gérer du contenu et ajouter des fonctionnalités plus poussées.
          </p>

          <ul className="text-primary flex flex-col gap-1">
            <li>• Tout le Pack Essentiel.</li>
            <li>• Base de données + espace d’administration.</li>
            <li>• Contenus modifiables (ex : réalisations / actualités).</li>
          </ul>

          <a
            href="mailto:olivier.riviere.dev@gmail.com?subject=Demande%20devis%20-%20Pack%20Avanc%C3%A9&body=Bonjour,%0A%0AJe%20souhaite%20un%20devis%20pour%20le%20Pack%20Avanc%C3%A9.%0AActivit%C3%A9%20:%20%0AVille%20:%20%0ANombre%20de%20pages%20:%20%0AD%C3%A9lai%20:%20%0A%0AMerci"
            className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
          >
            Choisir Avancé
          </a>
        </Card>
      </div>

      <Card className="w-full p-5 flex flex-col gap-3">
        <p className="text-primary">
          <Code>Page supplémentaire</Code> : +170€ TTC / page.
        </p>

        <p className="text-primary">
          <Code>Frais techniques</Code> (hébergement + nom de domaine) : facturés au réel, sans marge, avec facture.
        </p>

        <p className="text-primary">
          <Code>Paiement</Code> : 50% au lancement · 50% à la livraison / mise en ligne.
        </p>

        <p className="text-primary">
          <Code>Après livraison</Code> : 3 mois de suivi inclus, puis maintenance optionnelle 69€ TTC / mois.
        </p>

        <Link
          href="/creation-site-internet-etapes"
          className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
        >
          Comment ça se passe ? (Les étapes de A à Z)
        </Link>

        <a
          href="mailto:olivier.riviere.dev@gmail.com?subject=Demande%20devis%20site%20vitrine&body=Bonjour,%0A%0AJe%20souhaite%20un%20devis%20pour%20un%20site%20vitrine.%0AActivit%C3%A9%20:%20%0AVille%20:%20%0APack%20vis%C3%A9%20(Essentiel/Avanc%C3%A9)%20:%20%0ANombre%20de%20pages%20:%20%0AD%C3%A9lai%20:%20%0A%0AMerci"
          className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
        >
          Demander un devis
        </a>
      </Card>
    </Section>
  )
}
