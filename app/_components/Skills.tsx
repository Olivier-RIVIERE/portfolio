import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { TailwindIcon } from "./icons/TailwindIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { NodeJSIcon } from "./icons/NodeJSIcon"
import { SymfonyIcon } from "./icons/SymfonyIcon"
import { Code } from "./Code"

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="text-muted-foreground">
        Skills
      </Badge>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          Mes compétences
        </h2>

        <p className="text-primary leading-relaxed">
          Voici les technologies que j’utilise et que je continue d’approfondir au fil des projets.
        </p>
      </div>

      <Card className="w-full p-4">
        <div className="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <div className="flex flex-col gap-2 flex-1">
              <ReactIcon
                size={24}
                className="animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">
              React
            </h3>
            <p className="text-sm text-muted-foreground">
              <Code>React</Code> est idéal pour créer des interfaces dynamiques et modulaires.
              J’utilise aussi <Code>Next.js</Code> pour structurer des sites rapides et bien organisés.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-2 flex-1">
              <TailwindIcon size={24} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">
              Tailwind
            </h3>
            <p className="text-sm text-muted-foreground">
              <Code>Tailwind CSS</Code> me permet de créer des interfaces propres et responsives,
              tout en gardant un code clair et maintenable.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-2 flex-1">
              <NodeJSIcon size={24} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">
              Node.js
            </h3>
            <p className="text-sm text-muted-foreground">
              <Code>Node.js</Code> sert à développer des API et relier front-end et back-end de façon efficace.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-2 flex-1">
              <SymfonyIcon size={24} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">
              Symfony
            </h3>
            <p className="text-sm text-muted-foreground">
              <Code>Symfony</Code> est un framework <Code>PHP</Code> robuste pour des applications structurées
              et des besoins plus “métier”.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
