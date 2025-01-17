import { Section } from "./Section"
import { buttonVariants } from "../../components/ui/button"
import { GithubIcon } from './icons/GithubIcon';
import  Link  from "next/link";
import { cn } from "@/lib/utils";
import { LinkedlnIcon } from "./icons/LinkedlnIcon";

export const Header = () => {
  return (
    <header className="sticky z-10 top-0 py-4 bg-card">
      <Section className="flex items-center">
        <h1 className="text-3xl font-bold text-primary">Olivier RIVIERE</h1>
        <div className="ml-auto">
          <ul className="items-center gap-2">
            <Link href="https://github.com/Olivier-RIVIERE" target="_blank" className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-0")}>
              <GithubIcon size={12} className="text-foreground"/>
            </Link>
            <Link href="https://www.linkedin.com/in/olivierriviere/" target="_blank" className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-0")}>
              <LinkedlnIcon size={12} className="text-foreground"/>
            </Link>
          </ul>
        </div>
      </Section>
    </header>
  )
}