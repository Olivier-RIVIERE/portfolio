import { Section } from "./Section"
import { Code } from "./Code"
import AnimatedTextWord from "./AnimatedText"
import AnimatedTextCharacter from "./AnimatedTextCharacter"
import Image from "next/image"

export const PortfolioHero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <AnimatedTextWord text="Portfolio" />
                <AnimatedTextCharacter text="Mes projets & compétences" />

                <p className="text-primary">
                    Vous trouverez ici une sélection de projets <Code>variés</Code> que j’ai réalisés pendant ma formation et en autonomie.
                    L’objectif : vous montrer concrètement mon <Code>style</Code>, ma façon de structurer une page, et le niveau de <Code>finition</Code>.
                </p>

                <p className="text-primary">
                    Certains projets sont orientés <Code>site vitrine</Code>, d’autres sont plus <Code>interactifs</Code>.
                    Dans tous les cas, je cherche à faire <Code>simple</Code>, <Code>clair</Code> et agréable à utiliser.
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
