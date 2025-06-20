import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { TailwindIcon } from "./icons/TailwindIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { NodeJSIcon } from "./icons/NodeJSIcon"
import { Code } from "./Code"
import { SymfonyIcon } from "./icons/SymfonyIcon"

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div className="max-w-screen-md mb-8 lg:mb-16">
        <Badge variant={"outline"} className="text-muted-foreground">Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          Mes compétences en évolution
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Voici les technologies que je développe en ce moment, dans une démarche d’apprentissage continu et d’amélioration de mes projets.
        </p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-2 md:gap-12 md:space-y-0">
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <ReactIcon size={24} className="animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">React</h3>
          <p className="text-sm text-muted-foreground"><Code>React</Code> est une bibliothèque idéale pour créer des interfaces dynamiques et modulaires. Je m&#39;intéresse aussi à <Code>Next.js</Code>, qui optimise les performances et facilite le développement, comme pour ce portfolio.</p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <TailwindIcon size={24} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">Tailwind</h3>
          <p className="text-sm text-muted-foreground"><Code>Tailwind CSS</Code> simplifie la stylisation avec ses classes utilitaires, rendant les designs élégants et responsives tout en gardant un code clair et maintenable.</p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <NodeJSIcon size={24} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">Node JS</h3>
          <p className="text-sm text-muted-foreground"><Code>Node.js</Code> est une plateforme back-end rapide et efficace, parfaite pour développer des API et intégrer facilement le front-end et le back-end grâce à <Code>JavaScript</Code>.</p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <SymfonyIcon size={24} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">Symfony</h3>
          <p className="text-sm text-muted-foreground"><Code>Symfony</Code> est un framework <Code>PHP</Code> idéal pour créer des applications web robustes et structurées. Sa popularité en entreprise en fait un excellent choix pour répondre aux besoins professionnels.</p>
        </div>
      </div>
    </Section >
  )
}
