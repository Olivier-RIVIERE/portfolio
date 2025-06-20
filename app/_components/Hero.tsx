import { Section } from "./Section"
import { Code } from "./Code";
import AnimatedTextWord from "./AnimatedText";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Image from 'next/image';

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <AnimatedTextWord text="Olivier RIVIERE" />
        <AnimatedTextCharacter text="Développeur web diplômé" />
        <p className="text-primary">
          Je m&apos;appelle Olivier, je suis développeur web diplômé après une reconversion professionnelle. Passionné par les <Code>technologies</Code> et la création d&apos;interfaces modernes, je conçois des sites clairs, fonctionnels et adaptés aux besoins réels.
          Mon parcours m&apos;a appris à allier <Code>rigueur</Code>, <Code>écoute</Code> et <Code>créativité</Code>, pour proposer des solutions web sur-mesure. Aujourd&apos;hui, je suis disponible pour contribuer à des projets innovants, que ce soit en freelance ou en équipe.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
          src="/img/img-olivier2.jpg"
          width={300}
          height={300}
          className="w-[300px] h-[300px] rounded-full object-cover m-auto shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          alt="Olivier RIVIERE"
        />

      </div>
    </Section>
  )
}