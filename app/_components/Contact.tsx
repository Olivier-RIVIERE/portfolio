import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard"

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">Contactez moi</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Je serai heureux de travailler avec vous !
      </h2>
      <div className="flex max-md:flex-col items-start gap-4 w-full">
        <ContactCard className="flex-1" url="mailto:olivier97425@live.fr" image="https://avatars.githubusercontent.com/u/164056469?v=4" mediumImage="https://cdn.svgporn.com/logos/google-gmail.svg" name="olivier.riviere.dev@gmail.com" description="Vous pouvez m'envoyer un mail" />
        <ContactCard className="flex-1" url="https://github.com/Olivier-RIVIERE" image="https://avatars.githubusercontent.com/u/164056469?v=4" mediumImage="https://cdn.svgporn.com/logos/github-icon.svg" name="Olivier Riviere" description="https://github.com/Olivier-RIVIERE" />
        <ContactCard className="flex-1" url="https://www.linkedin.com/in/olivierriviere/" image="https://avatars.githubusercontent.com/u/164056469?v=4" mediumImage="https://cdn.svgporn.com/logos/linkedin-icon.svg" name="Olivier Riviere" description="https://www.linkedin.com/in/olivierriviere/" />
      </div>
    </Section >
  )
}