import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard"

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">
        Contact
      </Badge>

      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Me contacter
      </h2>

      <div className="flex max-md:flex-col items-start gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="mailto:olivier.riviere.dev@gmail.com"
          image="/img/img-olivier2.jpg"
          mediumImage="https://cdn.svgporn.com/logos/google-gmail.svg"
          name="olivier.riviere.dev@gmail.com"
          description="Email"
        />
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
      </div>
    </Section>
  )
}