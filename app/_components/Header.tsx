"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Section } from "./Section"
import { buttonVariants } from "../../components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { LinkedlnIcon } from "./icons/LinkedlnIcon"

import { Menu } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type HeaderProps = {
  variant?: "client" | "portfolio"
}

export const Header = ({ variant = "client" }: HeaderProps) => {
  const isClient = variant === "client"

  return (
    <header className="sticky z-10 top-0 py-4 bg-card">
      <Section className="flex items-center">
        <Link href="/" className="text-3xl font-bold text-primary">
          Olivier RIVIERE
        </Link>

        {/* Desktop nav */}
        <div className="ml-auto hidden md:flex items-center gap-2">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "h-8 px-3")}
          >
            Accueil
          </Link>

          <Link
            href="/portfolio"
            className={cn(buttonVariants({ variant: "ghost" }), "h-8 px-3")}
          >
            Portfolio
          </Link>

          {!isClient ? (
            <>
              <Link
                href="https://github.com/Olivier-RIVIERE"
                target="_blank"
                className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-0")}
              >
                <GithubIcon size={12} className="text-foreground" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/olivierriviere/"
                target="_blank"
                className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-0")}
              >
                <LinkedlnIcon size={12} className="text-foreground" />
              </Link>
            </>
          ) : null}
        </div>

        {/* Mobile burger */}
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost" }), "size-9 p-0")}
              aria-label="Ouvrir le menu"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="bg-card border-white/10">
              <SheetHeader>
                <SheetTitle className="text-primary">Menu</SheetTitle>
              </SheetHeader>

              <nav className="mt-6 flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
                  >
                    Accueil
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/portfolio"
                    className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
                  >
                    Portfolio
                  </Link>
                </SheetClose>

                {!isClient ? (
                  <>
                    <SheetClose asChild>
                      <Link
                        href="https://github.com/Olivier-RIVIERE"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
                      >
                        GitHub
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="https://www.linkedin.com/in/olivierriviere/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
                      >
                        LinkedIn
                      </Link>
                    </SheetClose>
                  </>
                ) : null}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Section>
    </header>
  )
}
