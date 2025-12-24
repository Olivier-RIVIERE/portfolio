import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard"
import { Code } from "./Code"

type ContactProps = {
  variant?: "client" | "portfolio"
}

export const Contact = ({ variant = "client" }: ContactProps) => {
  const isClient = variant === "client"

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">
        Contact
      </Badge>

      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        {isClient ? "Parlons de votre projet" : "Me contacter"}
      </h2>

      {isClient ? (
        <p className="text-primary">
          Envoyez-moi un email avec votre activité, votre ville et ce que vous attendez du site.
          Je vous réponds avec une proposition claire. <Code>Aucun coût caché</Code>.
        </p>
      ) : null}

      <div className="flex max-md:flex-col items-start gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="mailto:olivier.riviere.dev@gmail.com?subject=Demande%20devis%20site%20vitrine&body=Bonjour,%0A%0AActivit%C3%A9%20:%20%0AVille%20:%20%0APack%20vis%C3%A9%20(Essentiel/Avanc%C3%A9)%20:%20%0ANombre%20de%20pages%20:%20%0AD%C3%A9lai%20:%20%0A%0AMerci"
          image="/img/img-olivier2.jpg"
          mediumImage="https://cdn.svgporn.com/logos/google-gmail.svg"
          name="olivier.riviere.dev@gmail.com"
          description={isClient ? "Demande de devis par email" : "Email"}
        />

        {!isClient ? (
          <>
            <ContactCard
              className="flex-1"
              url="https://github.com/Olivier-RIVIERE"
              image="/img/img-olivier2.jpg"
              mediumImage="https://cdn.svgporn.com/logos/github-icon.svg"
              name="GitHub"
              description="Code & dépôts"
            />
            <ContactCard
              className="flex-1"
              url="https://www.linkedin.com/in/olivierriviere/"
              image="/img/img-olivier2.jpg"
              mediumImage="https://cdn.svgporn.com/logos/linkedin-icon.svg"
              name="LinkedIn"
              description="Profil professionnel"
            />
          </>
        ) : null}
      </div>
    </Section>
  )
}
