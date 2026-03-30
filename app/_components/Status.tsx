"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Section } from "./Section"
import { Work, WorkProps } from "./Work"
import { ContactCard } from "./ContactCard"
import { SideProject } from "./SideProject"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { PROJECTS } from "@/lib/projects"
import Link from "next/link"

export const Status = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextSlide = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length)
  }

  const prevSlide = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length
    )
  }

  return (
    <Section className="flex max-md:flex-col items-stretch gap-4">
      <div className="flex-[3] w-full flex flex-col">
        <Card className="flex flex-col p-4 flex-1">
          <p className="text-lg text-muted-foreground">Mes projets</p>

          {/* Carousel avec hauteur fixe */}
          <Carousel className="w-full">
            <CarouselContent className="w-full h-96 ms-0">
              <CarouselItem className="w-full">
                <SideProject
                  Image={PROJECTS[currentProjectIndex].image}
                  title={PROJECTS[currentProjectIndex].title}
                  description={PROJECTS[currentProjectIndex].description}
                  url={PROJECTS[currentProjectIndex].url}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* Footer fixe de la card — aligné en bas */}
          <div className="flex items-center justify-between mt-3">
            {/* Lien détail — à gauche */}
            <Link
              href={`/projects/${PROJECTS[currentProjectIndex].slug}`}
              className="text-xs text-muted-foreground hover:text-primary underline transition-colors"
            >
              En savoir plus sur ce projet →
            </Link>

            {/* Flèches navigation — à droite */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 text-white rounded-full hover:bg-accent/50 transition-colors duration-300"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 text-white rounded-full hover:bg-accent/50 transition-colors duration-300"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="w-full flex flex-col gap-2 p-4 flex-1">
          <p className="text-lg text-muted-foreground">Mon parcours</p>
          <div className="flex flex-col gap-2">
            {WORK.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
              />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">Retrouvez-moi</p>
          <ContactCard
            url="https://github.com/Olivier-RIVIERE"
            image="https://avatars.githubusercontent.com/u/164056469?v=4"
            mediumImage="https://cdn.svgporn.com/logos/github-icon.svg"
            name="Olivier Riviere"
            description="https://github.com/Olivier-RIVIERE"
          />
          <ContactCard
            url="https://www.linkedin.com/in/olivierriviere/"
            image="https://avatars.githubusercontent.com/u/164056469?v=4"
            mediumImage="https://cdn.svgporn.com/logos/linkedin-icon.svg"
            name="Olivier Riviere"
            description="https://www.linkedin.com/in/olivierriviere/"
          />
        </Card>
      </div>
    </Section>
  )
}

const WORK: WorkProps[] = [
  {
    image: "https://www.ceppic.fr/wp-content/themes/ceppic-child/dist/assets/images/header-primary/logo-ceppic-white.svg",
    title: "Ceppic",
    role: "Formation Développeur Web & Web Mobile (titre professionnel de niveau 5)",
    date: "2024 - 2025",
  },
  {
    image: "https://www.sncf-voyageurs.com/medias-publics/2023-07/logo-sncv.svg",
    title: "SNCF Voyageurs",
    role: "Conducteur de train",
    date: "2021 - 2024",
  },
  {
    image: "https://scat.fr/wp-content/uploads/2023/09/Logo-SCAT-RVB.png",
    title: "SCAT",
    role: "Agent de contrôle / Planificateur",
    date: "2014 - 2021",
  },
  {
    image: "https://imgs.search.brave.com/1Vk8vp43EU-oG2A6u0kjJfrlWHGDbd92sgueCG5h_i8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E3L0dl/bmRhcm1lcmllX25h/dGlvbmFsZV9sb2dv/LnN2Zy82NDBweC1H/ZW5kYXJtZXJpZV9u/YXRpb25hbGVfbG9n/by5zdmcucG5n",
    title: "Gendarmerie Nationale",
    role: "Gendarme Adjoint Volontaire",
    date: "2010 - 2014",
  },
]