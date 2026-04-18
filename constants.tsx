
import { Skill, Project } from './types';

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

export const PROJECTS: Project[] = [
  {
    id: 4,
    title: "Projet - Modular Audit",
    description: "J’ai coordonné l’équipe de quatre personnes lors de ce projet, nous devions proposer une solution B2B pouvant évoluer en B2C. Le but était de viser une niche pour pouvoir proposer un business plan qui pourrait marcher dès maintenant.\n\nPour cela, j’ai dû faire :\n- conceptualiser l’idée\n- faire une étude de marché\n- trouver une niche où l'idée serait pertinente\n- créer une stratégie marketing\n- faire des maquettes\n- présenter le projet",
    tags: ["Gestion de projet", "B2B", "Stratégie", "Management"],
    image: "https://picsum.photos/seed/chefprojet/800/600",
    link: "https://projet-b2b.vercel.app/"
  },
  {
    id: 5,
    title: "Développeur Web - Jeu instant Footlocker (2026)",
    description: "Nous avons dû développer un projet pour un client Footlocker.\n\nNous devions répondre à la problématique qui était de créer un jeu instant gagnant permettant de récolter de la data sur les clients (récolte d'emails).\n\nPour ça, nous avons dû :\n- Créer un concept de jeu instant gagnant\n- Faire une maquette du concept\n- Définir un parcours UX\n- Créer les différentes pages en HTML/CSS\n- Présenter au client notre solution",
    tags: ["HTML/CSS", "Figma", "UI/UX", "Web Dev"],
    image: "https://picsum.photos/seed/footlocker/800/600",
    link: "#"
  },
  {
    id: 6,
    title: "Projet - Wikipedia learning",
    description: "J’ai coordonné une équipe de sept personnes pour créer une application/site d'e-learning.\n\nLa deadline était d'une semaine pour faire ce MVP.\n\nJ’ai fait :\n- conception de l’idée\n- conception de la gamification\n- création d’une maquette\n- gestion des tâches de chacun, des rendus et des deadlines",
    tags: ["E-learning", "Figma", "Coordination", "Roadmap"],
    image: "https://picsum.photos/seed/elearning/800/600",
    link: "https://azttttp.netlify.app/"
  },
  {
    id: 7,
    title: "Assistant gestion projet - Mitness (2025)",
    description: "J’ai aidé à coordonner une équipe de six personnes sur la création d’une campagne de communication pour une gamme de vêtements.\n\nPour réussir cela, nous avons réalisé :\n- le ciblage de la clientèle et la création d’un persona\n- l'étude du marché visé\n- la création de fiches produits\n- l'établissement d'un budget pour la communication\n- la conception de la campagne de communication",
    tags: ["Marketing", "Communication", "Stratégie", "Budget"],
    image: "https://picsum.photos/seed/mitness/800/600",
    link: "#"
  },
  {
    id: 2,
    title: "Stage Community Manager - Polywitch (2023)",
    description: "Je devais m’occuper de l’animation du compte Instagram et de la prospection client afin de promouvoir une application d’apprentissage du japonais.\n\nL’application n'en était qu'à ses premières versions, le but étant d’avoir un retour sur le gameplay de l’application.\n\nJ’ai dû prospecter pour des clients qui sont influenceurs japonais ou des influenceurs en France, promouvant le Japon et sa culture.\n\nJ’ai dû :\n- rédiger des mails personnalisés\n- faire une liste de clients à contacter\n- présenter le projet\n- collecter les feedbacks (positifs ou négatifs) des clients dans un Excel\n- planifier des rendez-vous avec les clients intéressés",
    tags: ["Community Management", "Excel", "Marketing", "Relation Client"],
    image: "https://picsum.photos/seed/marketing/800/600",
    link: "https://www.instagram.com/polywitchgames?igsh=bjk4cWk2eWRpbjc1"
  },
  {
    id: 1,
    title: "Stage Développement - lets game (2023)",
    description: "Deuxième stage après ma terminale, ici j’ai renforcé mes capacités à utiliser Python.\n\nJ’ai dû faire :\n- un jeu d'arcade fait sur Python\n- l’interface graphique sur Tkinter",
    tags: ["Python", "Tkinter", "Algorithmique"],
    image: "https://picsum.photos/seed/arcade/800/600",
    link: "#"
  },
  {
    id: 3,
    title: "Stage Développeur PowerShell - Polywitch (2022)",
    description: "C’était ma toute première expérience en entreprise et en informatique globalement.\n\nN’ayant pas énormément de compétences au début de ce stage, j’ai appris :\n- les bases de PowerShell et d'Ubuntu\n- la création d'un bot Discord",
    tags: ["PowerShell", "API Discord", "Automation", "Algorithmie"],
    image: "https://picsum.photos/seed/discord/800/600",
    link: "#"
  }
];
