import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS } from "@/lib/projects"
import { Header } from "@/app/_components/Header"
import { Footer } from "@/app/_components/Footer"
import { Spacing } from "@/app/_components/Spacing"
import { Section } from "@/app/_components/Section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Olivier Rivière`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="relative">
      <Header />
      <Spacing size="md" />

      <Section className="flex flex-col gap-6">

        {/* Retour */}
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Retour au portfolio
        </Link>

        {/* Titre + badges techs */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <Badge key={tech} variant="outline" className="text-muted-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Image principale */}
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={`/img/${project.image}`}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Description longue */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-primary mb-3">Le projet</h2>
          <p className="text-primary leading-relaxed">{project.longDescription}</p>
        </Card>

        {/* Challenges + ce que j'ai appris */}
        <div className="grid md:grid-cols-2 gap-4">
          {project.challenges && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-primary mb-3">
                Défis techniques
              </h2>
              <p className="text-primary leading-relaxed">{project.challenges}</p>
            </Card>
          )}
          {project.whatILearned && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-primary mb-3">
                Ce que j&apos;ai appris
              </h2>
              <p className="text-primary leading-relaxed">{project.whatILearned}</p>
            </Card>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
          >
            Voir le projet en ligne →
          </a>
        </div>

      </Section>

      <Spacing size="md" />
      <Footer />
    </main>
  )
}