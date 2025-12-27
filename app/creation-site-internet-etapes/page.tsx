import type { Metadata } from "next"
import { Header } from "../_components/Header"
import { Footer } from "../_components/Footer"
import { Spacing } from "../_components/Spacing"
import { Section } from "../_components/Section"
import { Code } from "../_components/Code"

export const metadata: Metadata = {
    title: "Étapes de création d’un site internet (A à Z) | Olivier Rivière",
    description:
        "Les étapes, simplement : cadrage, contenus, design, développement, SEO, mise en ligne et suivi. Méthode claire, packs transparents, aucun coût caché.",
    alternates: { canonical: "/creation-site-internet-etapes" },
    openGraph: {
        title: "Étapes de création d’un site internet (A à Z) | Olivier Rivière",
        description:
            "Cadrage → contenus → design → développement → SEO → mise en ligne → suivi. Simple, clair, sans surprise.",
        url: "https://olivier-riviere-web.vercel.app/creation-site-internet-etapes",
        siteName: "Olivier Rivière",
        locale: "fr_FR",
        type: "article",
    },
    twitter: { card: "summary_large_image" },
}

const MAILTO_DEVIS =
    "mailto:olivier.riviere.dev@gmail.com?subject=Demande%20devis%20site%20vitrine&body=Bonjour%20Olivier,%0A%0AJe%20souhaite%20un%20devis%20pour%20un%20site%20vitrine.%0AActivit%C3%A9%20:%20%0AVille%20:%20%0ABesoins%20:%20%0AD%C3%A9lai%20:%20%0A%0AMerci"

const steps = [
    {
        id: "1-cadrage",
        title: "Cadrage du projet",
        intro:
            "On clarifie votre objectif et on cadre le périmètre (pages, options, délai).",
        bullets: [
            "Ce qu’on valide : pages du site + contenu attendu.",
            "Ce que vous m’envoyez : activité + ville/zone + services + exemples (facultatif).",
            "Résultat : un plan simple, sans surprise.",
        ],
    },
    {
        id: "2-contenus",
        title: "Contenus (textes + photos)",
        intro:
            "Un site vitrine efficace, c’est surtout un message clair et des infos pratiques faciles à trouver.",
        bullets: [
            "Textes : même brouillons, ça suffit pour démarrer.",
            "Photos : idéalement réelles (même smartphone si propres).",
            "Si vous ne savez pas quoi écrire : je vous donne une trame courte à remplir.",
        ],
    },
    {
        id: "3-structure",
        title: "Structure (pages + sections)",
        intro:
            "Je construis une structure logique (menu court) et orientée prise de contact.",
        bullets: [
            "Accueil : votre promesse + preuves + appel à l’action.",
            "Services : clair, concret, sans jargon.",
            "Contact : ultra simple (email) + infos pratiques.",
        ],
    },
    {
        id: "4-design",
        title: "Design (sobre + mobile)",
        intro:
            "Le design doit inspirer confiance et rendre la lecture facile, surtout sur téléphone.",
        bullets: [
            "Typo lisible + sections aérées.",
            "Version mobile incluse (standard).",
            "Allers-retours : ajustements simples pour valider le rendu.",
        ],
    },
    {
        id: "5-dev",
        title: "Développement",
        intro:
            "J’intègre les pages validées et je mets en place ce qui est utile (pas de complexité inutile).",
        bullets: [
            "Site rapide et fluide.",
            "Formulaire de contact (messages reçus par email).",
            "Ajout de pages possible (+ page supplémentaire).",
        ],
    },
    {
        id: "6-seo",
        title: "SEO de base (fondations)",
        intro:
            "Le but : que Google comprenne votre site et que ça charge vite.",
        bullets: [
            "Structure propre (titres, sections).",
            "Métadonnées cohérentes (titres / descriptions).",
            "Performance et accessibilité au minimum.",
        ],
    },
    {
        id: "7-mise-en-ligne",
        title: "Mise en ligne (domaine + hébergement)",
        intro:
            "On met le site en ligne avec vos accès à votre nom.",
        bullets: [
            "Nom de domaine + hébergement configurés.",
            "Frais techniques : facturés au réel, sans marge, avec facture.",
            "Vérifications finales (mobile, formulaire, liens).",
        ],
    },
    {
        id: "8-suivi",
        title: "Suivi après livraison",
        intro:
            "Après la mise en ligne, je reste disponible pour sécuriser le lancement.",
        bullets: [
            "3 mois de suivi inclus (petites corrections / ajustements légers).",
            "Puis maintenance optionnelle si vous voulez (sinon rien d’obligatoire).",
            "Vous gardez la propriété du site et des accès.",
        ],
    },
] as const

export default function CreationSiteInternetEtapesPage() {
    return (
        <main className="relative">
            <Header variant="client" />
            <Spacing size="md" />

            <Section className="flex flex-col gap-4 max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold tracking-tight text-primary">
                    Comment se passe la création d’un site internet ?
                </h1>

                <p className="text-primary leading-relaxed">
                    Voici le déroulé complet, expliqué simplement. L’objectif est que vous sachiez <Code>exactement</Code> comment ça se passe avant de choisir un pack.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                        href={MAILTO_DEVIS}
                        className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
                    >
                        Demander un devis
                    </a>

                    <a
                        href="/#tarifs"
                        className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium border border-white/15 hover:bg-white/5 transition"
                    >
                        Voir les packs & tarifs
                    </a>
                </div>

                <p className="text-xs text-primary/80 pt-1">
                    Packs transparents, prix affichés, <Code>aucun coût caché</Code>.
                </p>
            </Section>

            <Spacing size="md" />

            <Section className="flex flex-col gap-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold tracking-tight text-primary">
                    Sommaire
                </h2>

                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <ul className="text-primary leading-relaxed list-disc pl-5">
                        {steps.map((s, i) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className="underline decoration-white/20 hover:decoration-white/40 transition"
                                >
                                    Étape {i + 1} : {s.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <Spacing size="md" />

            <Section className="flex flex-col gap-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold tracking-tight text-primary">
                    Les étapes (A à Z)
                </h2>

                <div className="flex flex-col gap-4">
                    {steps.map((s, i) => (
                        <article
                            key={s.id}
                            id={s.id}
                            className="rounded-lg border border-white/10 bg-white/5 p-5 scroll-mt-24"
                        >
                            <p className="text-xs text-primary/70">Étape {i + 1}</p>

                            <h3 className="text-xl font-semibold tracking-tight text-primary">
                                {s.title}
                            </h3>

                            <p className="text-primary leading-relaxed pt-2">
                                {s.intro}
                            </p>

                            <ul className="text-primary leading-relaxed list-disc pl-5 pt-3">
                                {s.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>

            <Spacing size="md" />

            <Section className="flex flex-col gap-4 max-w-3xl mx-auto">
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-primary">
                        On en parle ?
                    </h2>

                    <p className="text-primary leading-relaxed pt-2">
                        Envoyez-moi votre activité, votre ville, le nombre de pages souhaitées et votre délai.
                        Je vous réponds avec une proposition claire (pack conseillé + options si besoin). [page:1]
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        <a
                            href={MAILTO_DEVIS}
                            className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
                        >
                            Demander un devis
                        </a>

                        <a
                            href="/faq"
                            className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium border border-white/15 hover:bg-white/5 transition"
                        >
                            Lire la FAQ
                        </a>
                    </div>
                </div>
            </Section>

            <Spacing size="md" />
            <Footer />
        </main>
    )
}
