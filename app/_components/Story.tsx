import { Section } from "./Section"
import { Code } from "./Code"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export const Story = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">
        Parcours
      </Badge>

      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Pourquoi je me suis reconverti dans le web
      </h2>

      <Card className="w-full p-4">
        <div className="flex flex-col gap-3">
          <p className="text-primary leading-relaxed">
            Mon parcours est atypique : gendarme adjoint, contrôleur et planificateur dans les transports,
            puis <Code>conducteur de train à la SNCF</Code>. Des métiers très différents, mais avec un fil commun —
            la rigueur, le sens des responsabilités et l'habitude de gérer des situations complexes.
          </p>

          <p className="text-primary leading-relaxed">
            En 2024, j'ai tout arrêté pour faire un pari sur moi-même : une formation intensive de 9 mois
            en développement web et web mobile. Obtention du <Code>titre professionnel bac+2</Code> en juin 2025.
            Pas une reconversion par défaut — un choix réfléchi vers quelque chose qui me passionne vraiment.
          </p>

          <p className="text-primary leading-relaxed">
            Ce que j'apporte : une vraie capacité d'<Code>adaptation</Code>, l'habitude de travailler en autonomie,
            et une approche pragmatique du code. J'aime que ce soit <Code>propre</Code>, lisible, et que ça serve vraiment à quelque chose.
          </p>
        </div>
      </Card>
    </Section>
  )
}