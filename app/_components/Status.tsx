"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react";
import { Section } from "./Section"
import { Work, WorkProps } from "./Work"
import { ContactCard } from "./ContactCard";
import { SideProject } from "./SideProject"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


export const Status = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextSlide = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % SIDE_PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + SIDE_PROJECTS.length) % SIDE_PROJECTS.length);
  };



  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="flex flex-col p-4">
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <Carousel
            className="w-full">
            <CarouselContent className="w-full h-96 ms-0">
              <CarouselItem className="w-full">
                <SideProject
                  Image={SIDE_PROJECTS[currentProjectIndex].image}
                  title={SIDE_PROJECTS[currentProjectIndex].title}
                  description={SIDE_PROJECTS[currentProjectIndex].description}
                  url={SIDE_PROJECTS[currentProjectIndex].url || ""}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={prevSlide}
              disabled={currentProjectIndex === 0}
              className="p-2 text-white rounded-full  hover:bg-accent/50 transition-colors group duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentProjectIndex === SIDE_PROJECTS.length - 1}
              className="p-2 text-white rounded-full  hover:bg-accent/50 transition-colors group duration-300"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </Card>
      </div>

      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="w-full flex flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">Mon parcours</p>
          <div className="flex flex-col gap-2">
            {WORK.map((work, index) => (
              <Work key={index} image={work.image} title={work.title} role={work.role} date={work.date} />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">Retrouvez-moi</p>
          <ContactCard url="https://github.com/Olivier-RIVIERE" image="https://avatars.githubusercontent.com/u/164056469?v=4" mediumImage="https://cdn.svgporn.com/logos/github-icon.svg" name="Olivier Riviere" description="https://github.com/Olivier-RIVIERE" />
          <ContactCard url="https://www.linkedin.com/in/olivierriviere/" image="https://avatars.githubusercontent.com/u/164056469?v=4" mediumImage="https://cdn.svgporn.com/logos/linkedin-icon.svg" name="Olivier Riviere" description="https://www.linkedin.com/in/olivierriviere/" />
        </Card>
      </div>
    </Section>
  );
};

interface SideProjectProps {
  image: string;
  title: string;
  description: string;
  url: string;
}


const WORK: WorkProps[] = [
  {
    image: "https://www.ceppic.fr/wp-content/themes/ceppic-child/dist/assets/images/header-primary/logo-ceppic-white.svg",
    title: "Ceppic",
    role: "Formation",
    date: "2024 - En cours"
  },
  {
    image: "https://www.sncf-voyageurs.com/medias-publics/2023-07/logo-sncv.svg",
    title: "SNCF Voyageurs",
    role: "Conducteur de train",
    date: "2021 - 2024"
  },
  {
    image: "https://scat.fr/wp-content/uploads/2023/09/Logo-SCAT-RVB.png",
    title: "SCAT",
    role: "Agent de contrôle / Plannificateur",
    date: "2014 - 2021"
  },
  {
    image: "https://imgs.search.brave.com/1Vk8vp43EU-oG2A6u0kjJfrlWHGDbd92sgueCG5h_i8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E3L0dl/bmRhcm1lcmllX25h/dGlvbmFsZV9sb2dv/LnN2Zy82NDBweC1H/ZW5kYXJtZXJpZV9u/YXRpb25hbGVfbG9n/by5zdmcucG5n",
    title: "Gendarmerie Nationale",
    role: "Gendarme Adjoint Volontaire",
    date: "2010 - 2014"
  },
]

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    image: "studio_adriance.png",
    title: "Studio Adriance",
    description: "Site vitrine développé pour une décoratrice d’intérieur, mettant en valeur ses réalisations à travers un portfolio élégant. Le site intègre un système d’inscription/connexion, un espace administrateur, ainsi qu’un éditeur de moodboards interactifs permettant aux utilisateurs de créer et sauvegarder leurs inspirations déco. (Technologies : Symfony, React, MySQL)",
    url: "https://studio-adriance.adriance-creer-rever.com/",
  },
  {
    image: "systemSolar.png",
    title: "Système Solaire",
    description: "Plonge dans l'univers fascinant du Système Solaire ! Explore les planètes, leurs satellites, et découvre des informations captivantes à travers une expérience interactive et visuellement immersive. (Technologie : React)",
    url: "https://systemesolaire-rivoli.netlify.app/",
  },
  {
    image: "mealApp.png",
    title: "Meal App",
    description: "Meal App est une application qui permet de rechercher des recettes de plats en utilisant une API. (Technologie : React)",
    url: "https://meal-app-react-rivoli.netlify.app/",
  },
  {
    image: "genres.png",
    title: "Series App",
    description: "Series App est une application qui permet de rechercher des séries, acteurs et genres en utilisant l'API TVMaze. (Technologie : React)",
    url: "https://series-app-react-rivoli.netlify.app/",
  },
  {
    image: "play_screenshot.png",
    title: "Galactic Fleet",
    description: "Galactic Fleet est un jeu de tir dans l'espace où tu contrôles un vaisseau pour affronter des vagues d'ennemis. (Technologie : Phaser.js)",
    url: "https://galaticfleet.netlify.app/",
  },
]


