export type Project = {
  slug: string
  image: string
  title: string
  description: string
  url: string
  github?: string
  techs: string[]
  longDescription: string
  challenges?: string
  whatILearned?: string
  features?: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: "mon-suivi-emploi",
    image: "mon-suivi-emploi.png",
    title: "Mon Suivi Emploi",
    description:
      "Application Next.js 15 de suivi de candidatures : Kanban interactif, scoring IA des offres, préparation d'entretien par IA et mode démo sans inscription.",
    url: "https://mon-suivi-emploi.vercel.app/",
    github: "https://github.com/Olivier-RIVIERE/mon-suivi-emploi",
    techs: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Mistral AI"],
    longDescription:
      "Application complète de suivi de candidatures avec un tableau Kanban interactif. L'utilisateur peut créer des colonnes, déplacer des cartes et suivre l'avancement de chaque candidature. L'authentification est gérée via Supabase Auth avec Row Level Security pour isoler les données de chaque utilisateur. Un système de démo permet de tester toutes les fonctionnalités sans créer de compte.",
    challenges:
      "La gestion du drag & drop côté client tout en maintenant la cohérence avec la base de données en temps réel a été le principal défi technique. L'intégration de l'IA a nécessité de concevoir des prompts précis pour obtenir des résultats exploitables et cohérents.",
    whatILearned:
      "Maîtrise de Supabase (Auth + RLS), intégration de l'API Mistral dans une app Next.js, gestion d'état complexe avec React, et déploiement sur Vercel avec variables d'environnement sécurisées.",
    features: [
      "Tableau Kanban interactif avec drag & drop",
      "Scoring IA : note sur 100 de compatibilité CV / offre d'emploi",
      "Préparation d'entretien générée par IA selon le poste visé",
      "Mode démo : accès complet sans création de compte",
      "Authentification sécurisée via Supabase Auth + RLS",
    ],
  },
  {
    slug: "boulangerie-du-fournil",
    image: "boulangerie-presentation.png",
    title: "Boulangerie du Fournil",
    description:
      "Site vitrine Next.js pour une boulangerie artisanale : catalogue, horaires, localisation et SEO local.",
    url: "https://boulangerie-presentation.netlify.app/",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    longDescription:
      "Site vitrine complet pour une boulangerie artisanale fictive. Présentation de la maison, catalogue de produits avec photos, horaires d'ouverture, localisation via Google Maps embed, et formulaire de contact. Optimisé pour le SEO local.",
    challenges:
      "Rendre le site agréable et chaleureux visuellement tout en gardant des performances élevées (images optimisées, lazy loading).",
    whatILearned:
      "Optimisation des images avec next/image, bonnes pratiques SEO local, et design orienté conversion pour un public non-tech.",
  },
  {
    slug: "studio-adriance",
    image: "studio_adriance.png",
    title: "Studio Adriance",
    description:
      "Site vitrine pour une décoratrice d'intérieur avec espace admin et éditeur de moodboards interactifs.",
    url: "https://studio-adriance.adriance-creer-rever.com/",
    techs: ["Symfony", "React", "MySQL"],
    longDescription:
      "Projet fullstack développé pour une décoratrice d'intérieur. Le site présente ses réalisations sous forme de portfolio élégant. Il intègre un système d'inscription/connexion, un espace administrateur pour gérer le contenu, et un éditeur de moodboards interactifs permettant aux clients de créer et sauvegarder leurs inspirations déco.",
    challenges:
      "Faire communiquer une API Symfony avec un front React de manière fluide, et implémenter l'éditeur de moodboards avec sauvegarde en base.",
    whatILearned:
      "Architecture API REST avec Symfony, intégration React dans un projet fullstack, et gestion des rôles utilisateur.",
  },
  {
    slug: "systeme-solaire",
    image: "systemSolar.png",
    title: "Système Solaire",
    description:
      "Exploration interactive et immersive du Système Solaire : planètes, satellites et informations détaillées.",
    url: "https://systemesolaire-rivoli.netlify.app/",
    techs: ["React"],
    longDescription:
      "Application interactive permettant d'explorer les planètes du Système Solaire, leurs satellites naturels, et des données scientifiques. L'interface est pensée pour être visuellement immersive avec des animations CSS.",
    challenges:
      "Créer une expérience visuellement attrayante avec uniquement React et CSS, sans librairie d'animation tierce.",
    whatILearned:
      "Animations CSS avancées, gestion de données structurées avec React, et design créatif.",
  },
  {
    slug: "meal-app",
    image: "mealApp.png",
    title: "Meal App",
    description:
      "Application de recherche de recettes de cuisine via API externe.",
    url: "https://meal-app-react-rivoli.netlify.app/",
    techs: ["React"],
    longDescription:
      "Application React permettant de rechercher des recettes de cuisine en interrogeant une API publique. L'utilisateur peut chercher par nom de plat, consulter les ingrédients, les étapes de préparation et les informations nutritionnelles.",
    challenges:
      "Gérer les appels API asynchrones, les états de chargement et les cas d'erreur de manière propre.",
    whatILearned:
      "Consommation d'API REST avec fetch/async-await, gestion des états de chargement et d'erreur en React.",
  },
  {
    slug: "series-app",
    image: "genres.png",
    title: "Series App",
    description:
      "Application de recherche de séries TV, acteurs et genres via l';API TVMaze.",
    url: "https://series-app-react-rivoli.netlify.app/",
    techs: ["React"],
    longDescription:
      "Application React utilisant l';API TVMaze pour rechercher des séries télévisées, afficher leur casting, leurs genres et leurs descriptions. Interface simple et responsive.",
    whatILearned:
      "Exploration d'une API publique documentée, gestion de la pagination des résultats et affichage conditionnel en React.",
  },
  {
    slug: "galactic-fleet",
    image: "play_screenshot.png",
    title: "Galactic Fleet",
    description:
      "Jeu de tir spatial : contrôle un vaisseau et affronte des vagues d';ennemis.",
    url: "https://galaticfleet.netlify.app/",
    techs: ["Phaser.js"],
    longDescription:
      "Jeu de tir en scrolling vertical développé avec Phaser.js. Le joueur contrôle un vaisseau spatial et doit survivre à des vagues d';ennemis de plus en plus difficiles. Gestion des collisions, des scores et des niveaux.",
    challenges:
      "Appréhender un framework de jeu 2D (Phaser.js) très différent du développement web classique, et gérer la boucle de jeu.",
    whatILearned:
      "Logique de game loop, gestion des sprites et collisions avec Phaser.js, et approche orientée objet du JavaScript.",
  },
]