
import { Skill, SkillCategory, ExperienceItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    period: "Juin — Sept 2026",
    statusTag: "Stage • Arcueil",
    isCurrent: true,
    company: "idGarages",
    role: "Chargé de SEO et de Réseaux sociaux",
    tasks: [
      "Rédaction de page SEO via SEMrush et en liaison avec une agence de SEO.",
      "Réalisation d’analyses SEO avec Botify.",
      "Intégration et mise à jour de contenus sur le CMS Strapi.",
      "Création de 36 publications sur Instagram, Facebook et TikTok.",
      "Création de vidéos utilisant l’intelligence artificielle pour les réseaux sociaux.",
      "Suivi et analyse des KPI : vues des publications, vues de la page et taux d’engagement.",
      "Planification et édition du calendrier éditorial de juillet à octobre."
    ],
    tags: ["SEO & SEMrush", "Botify", "CMS Strapi", "Social Media & IA", "KPI & Analytics", "Calendrier Éditorial"]
  },
  {
    id: 2,
    period: "2026",
    statusTag: "Projet B2B • Montreuil",
    isCurrent: false,
    company: "Vidal section",
    role: "Chef de Projet",
    tasks: [
      "Coordonner une équipe de quatre personnes afin de concevoir une solution B2B.",
      "Conception du projet : Analyse stratégique du marché et des tendances actuelles afin d’identifier un secteur d’activité.",
      "Création de la structure du projet : Road map, gestion des tâches, création d’une bêta (en cours).",
      "Commercialisation de la solution (à venir)."
    ],
    tags: ["Solution B2B", "Analyse Stratégique", "Roadmap & Bêta", "Management Squad"]
  },
  {
    id: 3,
    period: "2026",
    statusTag: "E-learning • Montreuil",
    isCurrent: false,
    company: "Vidal section",
    role: "Gestionnaire de projet",
    tasks: [
      "Création d’une application et d'un site d’e-learning.",
      "Coordination d’une équipe de sept personnes pour la conception d’une plateforme e-learning.",
      "Conception du produit : Road map, maquette Figma, gestion des tâches."
    ],
    tags: ["Application E-learning", "Coordination 7p", "Maquette Figma", "Roadmap"]
  },
  {
    id: 4,
    period: "2023 — 2024",
    statusTag: "Sport • Limeil-Brévannes",
    isCurrent: false,
    company: "Équipe de basket",
    role: "Coach adjoint",
    tasks: [
      "Élaboration des entraînements personnels et collectifs pour mes joueurs.",
      "Suivis physiques et mentaux.",
      "Analyse des résultats collectifs et individuels et apport de solutions selon les résultats."
    ],
    tags: ["Coaching Basket", "Leadership & Mental", "Analyse de Performance"]
  },
  {
    id: 5,
    period: "Mars — Avril 2023",
    statusTag: "Stage • Paris III",
    isCurrent: false,
    company: "Polywitch",
    role: "Stage community manager",
    tasks: [
      "Animation du compte Instagram, démarcher des clients pour le projet.",
      "Prise de contact et présentation du projet aux clients pour le tester et promouvoir le produit.",
      "Organiser un rendez-vous avec les clients et collecter les feedbacks pour améliorer le produit.",
      "Tableur Excel des collaborateurs avec les retours."
    ],
    tags: ["Community Management", "Instagram", "Prospection Client", "User Feedback"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Gestion de projet",
    icon: "📊",
    description: "Planification & gestion des tâches",
    items: ["Trello", "Notion", "Excel"]
  },
  {
    title: "Programmation",
    icon: "💻",
    items: ["Python", "C", "HTML - CSS", "SQL"]
  },
  {
    title: "Interface",
    icon: "🎨",
    items: ["Webflow", "Canva", "Figma"]
  },
  {
    title: "Utilitaire",
    icon: "🛠️",
    description: "Bureautique & outils de travail",
    items: ["PowerPoint", "Word", "Power BI"]
  },
  {
    title: "Savoir-être & Méthodes",
    icon: "🚀",
    items: ["Travail en équipe", "Gestion/Suivi de projet", "Planification", "Sens du relationnel", "SEO"]
  }
];

export const SKILLS: Skill[] = [
  { name: "Trello", icon: "📋" },
  { name: "Notion", icon: "📓" },
  { name: "Langage C", icon: "💻" },
  { name: "Git", icon: "🔀" },
  { name: "Vercel", icon: "▲" },
  { name: "SQL", icon: "🗄️" },
  { name: "Webflow", icon: "🖥️" },
  { name: "Canva", icon: "🎨" },
  { name: "Pack Office", description: "PowerPoint, Word", icon: "💼" },
  { name: "HTML / CSS", icon: "🌐" },
  { name: "Python", icon: "🐍" }
];