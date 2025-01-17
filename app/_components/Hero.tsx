import { Section } from "./Section"
import { Code } from "./Code";
import AnimatedTextWord from "./AnimatedText";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Image from 'next/image';

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <AnimatedTextWord text="Olivier RIVIERE"/>
        <AnimatedTextCharacter text="Développeur web en formation"/>
        <p className="text-primary">Je m&apos;appelle Olivier et je suis actuellement en formation pour devenir développeur web. Passionné par les nouvelles <Code>technologies</Code>, je me suis lancé dans cette reconversion professionnelle après avoir exercé différents métiers. Aujourd&#39;hui, je me concentre sur <Code>l&apos;apprentissage</Code> des langages et des outils du web pour créer des expériences numériques modernes et fonctionnelles. Mon <Code>objectif</Code> est de mettre mes compétences au service de projets innovants et d&#39;évoluer dans ce domaine en pleine croissance.</p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image src="/img/img-olivier.jpg" width={300} height={300} className="rounded-full h-auto max-w-xs max-md:w-56 m-auto shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]" alt="Olivier RIVIERE" />

      </div>
    </Section>
  )
}