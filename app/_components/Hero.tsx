import { Section } from './Section'
import { Code } from './Code'
import AnimatedTextWord from './AnimatedText'
import AnimatedTextCharacter from './AnimatedTextCharacter'
import Image from 'next/image'

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full min-w-0 flex flex-col gap-3">
        <AnimatedTextWord text="Olivier RIVIERE" />
        <AnimatedTextCharacter text="Création de sites vitrines pour Indépendants" />

        <p className="text-primary">
          Je crée pour vous des sites vitrines <Code>clairs</Code>, <Code>rapides</Code>, conçus pour inspirer confiance et faciliter la prise de contact.
          Packs transparents, prix affichés, <Code>aucun coût caché</Code>.
          Basé à Rouen (Normandie), disponible partout en France.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="mailto:olivier.riviere.dev@gmail.com?subject=Demande%20devis%20site%20vitrine&body=Bonjour%20Olivier,%0A%0AJe%20souhaite%20un%20devis%20pour%20un%20site%20vitrine.%0AActivit%C3%A9%20:%20%0AVille%20:%20%0ABesoins%20:%20%0AD%C3%A9lai%20:%20%0A%0AMerci"
            className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
          >
            Demander un devis
          </a>

          <a
            href="/#tarifs"
            className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium border border-white/15 hover:bg-white/5 transition"
          >
            Voir les tarifs
          </a>
        </div>

        <p className="text-xs text-primary/80 pt-1">
          Essentiel : 1 090€ TTC · Avancé : 1 890€ TTC · Page supplémentaire : +170€ TTC
        </p>
      </div>

      <div className="flex-[2] max-md:m-auto ml-auto shrink-0">
        <Image
          src="/img/img-olivier2.jpg"
          width={300}
          height={300}
          className="w-[300px] h-[300px] rounded-full object-cover m-auto shadow-xl
  transition-all duration-500
  grayscale-[35%] hover:grayscale-0
  ring-1 ring-white/5 hover:ring-white/20
  motion-safe:hover:scale-110 motion-safe:hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]
  motion-reduce:hover:scale-100 motion-reduce:hover:shadow-xl"
          alt="Olivier RIVIERE"
        />
      </div>
    </Section>
  )
}
