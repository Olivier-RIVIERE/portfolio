import { Section } from "./Section"
import { Code } from "./Code";
import AnimatedTextWord from "./AnimatedText";
import AnimatedTextCharacter from "./AnimatedTextCharacter";


export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        {/* <h2 className="text-3xl font-bold text-primary font-caption">Olivier RIVIERE</h2> */}
        {/* <h3 className="text-2xl font-medium text-primary font-caption">Développeur web en formation</h3> */}
        <AnimatedTextWord text="Olivier RIVIERE"/>
        <AnimatedTextCharacter text="Développeur web en formation"/>
        <p className="text-primary">Je m'appelle Olivier et je suis actuellement en formation pour devenir développeur web. Passionné par les nouvelles <Code>technologies</Code>, je me suis lancé dans cette reconversion professionnelle après avoir exercé différents métiers. Aujourd'hui, je me concentre sur <Code>l'apprentissage</Code> des langages et des outils du web pour créer des expériences numériques modernes et fonctionnelles. Mon <Code>objectif</Code> est de mettre mes compétences au service de projets innovants et d'évoluer dans ce domaine en pleine croissance.</p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img src="https://avatars.githubusercontent.com/u/164056469?v=4" className="rounded-full h-auto max-w-xs max-md:w-56 m-auto shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]" alt="Olivier RIVIERE" />

      </div>
    </Section>
  )
}