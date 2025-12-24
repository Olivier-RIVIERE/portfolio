import { Section } from "./Section"
import { Code } from "./Code"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

type StoryProps = {
  title?: string
  variant?: "short" | "long"
}

export const Story = ({
  title = "Pourquoi je fais ce métier",
  variant = "short",
}: StoryProps) => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">
        À propos
      </Badge>

      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        {title}
      </h2>

      <Card className="w-full p-4">
        {variant === "short" ? (
          <p className="text-primary leading-relaxed">
            Après plusieurs années dans des métiers de terrain, j’ai choisi de me reconvertir dans le développement web
            pour construire des solutions <Code>claires</Code> et <Code>utiles</Code>.
            Aujourd’hui, j’accompagne des artisans et indépendants avec des sites vitrines simples, rapides et rassurants.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-primary leading-relaxed">
              Je viens d’un parcours très “terrain” : rigueur, sens du service, et habitudes de travail structurées.
              À un moment, j’ai eu envie de créer plutôt que d’exécuter, et j’ai choisi le développement web.
            </p>

            <p className="text-primary leading-relaxed">
              Ce qui me plaît : transformer un besoin concret en un site lisible, rapide, et agréable à utiliser.
              J’aime quand c’est <Code>simple</Code>, quand c’est <Code>propre</Code>, et quand le client comprend ce qu’il achète.
            </p>

            <p className="text-primary leading-relaxed">
              Aujourd’hui, je propose des packs de sites vitrines transparents, sans surprise, avec un accompagnement clair
              du début à la mise en ligne.
            </p>
          </div>
        )}
      </Card>
    </Section>
  )
}
