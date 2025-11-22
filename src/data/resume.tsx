import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mathieu Picart",
  initials: "MP",
  url: "https://mathieupicart.fr",
  location: "Rennes, Bretagne",
  locationLink: "https://www.google.com/maps/place/rennes",
  description:
    "26 ans, passionné par l’algorithmie et la programmation web, je suis à la recherche d'une opportunité stimulante.",
  summary:
    "Fort de plusieurs années d'expérience en développement web Full Stack, je maîtrise les technologies modernes telles que React, Next.js et TypeScript, ainsi que les frameworks backend comme Laravel et Symfony. Passionné par l'algorithmie et la résolution de problèmes complexes, je m'efforce de créer des applications robustes et évolutives. Mon parcours m'a permis de développer une polyvalence technique et une capacité d'adaptation rapide. Aujourd'hui, je recherche une opportunité stimulante où je pourrai mettre à profit mes compétences pour contribuer à des projets ambitieux.",
  avatarUrl: "/me.png",
  skills: {
    "Frontend": [
      "React",
      "Next.js",
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
    ],
    "Backend": [
      "Node.js",
      "Express.js",
      "Laravel",
      "Symfony",
      "PHP",
      "Python",
      "Java",
    ],
    "Base de données": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Firebase",
    ],
    "Outils": [
      "Docker",
      "Git",
      "GitLab",
      "GitHub",
      "Postman",
      "Vercel",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "picartmathieu@outlook.fr",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MathieuPicart",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mathieu-picart/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:picartmathieu@outlook.fr",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Crédit Agricole",
      href: "https://www.credit-agricole.fr/ca-corse/particulier.html",
      badges: [],
      location: "Ajaccio, Corse",
      title: "Développeur Web Full Stack",
      logoUrl: "/ca.png",
      start: "Septembre 2021",
      end: "Octobre 2023",
      missions: [
        {
          title: "Migration Technologique Symfony vers Laravel",
          start: "Mai 2023",
          end: "Octobre 2023",
          technologies: ["Laravel", "MySQL"],
          description: "Refonte des applications internes existantes pour améliorer leur maintenabilité et leurs performances.",
          context: "Migration progressive des applications historiques Symfony vers Laravel, afin d’aligner l’écosystème technique sur les standards actuels.",
          objectives: [
            "Analyse des applications Symfony existantes et réécriture des modules principaux sous Laravel.",
            "Optimisation du code et amélioration des performances afin d’offrir une meilleure expérience utilisateur et faciliter la maintenance.",
            "Réalisation des phases de tests, validation avec les utilisateurs et mise en production des outils migrés."
          ],
          results: "Acquisition de solides compétences sur Laravel et développement des premiers modules, malgré l’arrêt du projet lié à des contraintes techniques."
        },
        {
          title: "Développement Outils Internes",
          start: "Septembre 2021",
          end: "Mai 2023",
          technologies: ["Symfony", "Twig", "MySQL"],
          description: "Conception et développement d’outils internes destinés à simplifier les processus métiers et améliorer la productivité.",
          context: "Projet mené au sein d’une équipe pluridisciplinaire, avec des échanges réguliers avec les équipes métiers.",
          objectives: [
            "Développement d’un gestionnaire de tickets et d’une plateforme de support.",
            "Conception et maintenance d’applications web avec des composants Symfony.",
            "Collaboration étroite avec les utilisateurs pour recueillir et adapter les besoins."
          ],
          results: "Outils adoptés par les collaborateurs, permettant une meilleure organisation, un accès simplifié aux informations et une optimisation du suivi des demandes."
        },
        {
          title: "Maintenance Site Vitrine - Administrateur CMS",
          start: "Septembre 2021",
          end: "Octobre 2023",
          technologies: ["Adobe (EMS)"],
          description: "Administration et mise à jour du site vitrine institutionnel afin d’assurer la communication externe et interne de la caisse régionale",
          context: "Collaboration avec les services communication, maketing et l’équipe IT pour mettre en ligne des contenus commerciaux et informatifs.",
          objectives: [
            "Gestion et publication des contenus via le CMS (actualités, offres bancaires, événements).",
            "Support technique et corrections applicatives pour assurer la stabilité et la disponibilité du site vitrine.",
            "Participation active à la mise en œuvre de campagnes numériques visant à valoriser les services et produits de la banque."
          ],
          results: "Maintenance du site vitrine en continu, assurant la visibilité des services et une communication fluide vers les clients et collaborateurs."
        },
      ]
    },
    {
      company: "Groupe Thomas Plants",
      badges: [],
      href: "https://www.groupethomasplants.com/",
      location: "Ploubazlanec",
      title: "Développeur Web Full Stack",
      logoUrl: "/grp-thomas-plants.png",
      start: "Avril 2023",
      end: "Juillet 2023",
      missions: [
        {
          title: "Développement Application Web",
          start: "Avril 2023",
          end: "Juillet 2023",
          technologies: ["React.js", "Express.js", "Linux", "Debian"],
          description: "Conception et développement d'une application web pour la gestion et le suivi de la production.",
          context: "Stage de fin d'études",
          objectives: [
            "Rédaction du cahier des charges et réalisation des maquettes.",
            "Conception et implémentation de l'application en React.js et Express.js.",
            "Déploiement de la solution sur un serveur Linux Debian."
          ],
          results: "Application fonctionnelle et déployée en production."
        }
      ],
    },
    {
      company: "IUT de Lannion",
      href: "https://iut-lannion.univ-rennes.fr/",
      badges: [],
      location: "Lannion, Bretagne",
      title: "Développeur Web",
      logoUrl: "/IUT_Lannion.png",
      start: "Mai 2020",
      end: "Juillet 2020",
      missions: [
        {
          title: "Développement d’un jeu multiplateforme",
          start: "Mai 2020",
          end: "Juillet 2020",
          technologies: ["ReactJS", "TypeScript", "Ionic", "Capacitor", "PostgreSQL", "Redux"],
          description: "Développement d’un jeu multiplateforme (Android, iOS et Desktop) avec ReactJS, TypeScript, Ionic et Capacitor, intégrant une base de données PostgreSQL et la gestion des états via Redux.",
          context: "Stage de fin d'études",
          objectives: [
            "Conception et développement d’un jeu multiplateforme (Android, iOS et Desktop) avec ReactJS, TypeScript, Ionic et Capacitor, intégrant une base de données PostgreSQL et la gestion des états via Redux.",
            "Conception et implémentation de l'application en React.js et Express.js.",
            "Déploiement de la solution sur un serveur Linux Debian."
          ],
          results: "Application fonctionnelle et déployée en production."
        }
      ],
    },
  ],
  education: [
    {
      school: "Université de Corse Pasquale Paoli",
      href: "https://www.universita.corsica/fr/",
      degree: "Master Développement Web Full Stack",
      logoUrl: "/logo_univ_corse.jpg",
      start: "Septembre 2021",
      end: "Juillet 2023",
    },
    {
      school: "Université de Bretagne Occidentale - UBO",
      href: "https://www.univ-brest.fr/fr",
      degree: "Licence Ingénierie Informatique",
      logoUrl: "/logo_UBO.png",
      start: "Septembre 2020",
      end: "Juillet 2021",
    },
    {
      school: "IUT de Lannion",
      href: "https://iut-lannion.univ-rennes.fr/",
      degree: "DUT Informatique",
      logoUrl: "/IUT_Lannion.png",
      start: "Septembre 2018",
      end: "Juillet 2020",
    },
  ],
  projects: [
    {
      title: "DevEvents",
      href: "https://magicui.design",
      dates: "Novembre 2025",
      active: true,
      description:
        "Plateforme d’événementielle avec une page d’accueil listant les événements, des routes API au format CRUD, uploads d’images via Cloudinary, des pages événements détaillées avec inscription et événements similaires, ainsi que des analyses PostHog pour suivre les interactions des utilisateurs.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MongoDB",
        "Warp",
        "Cloudinary",
        "PostHog",
        "CodeRabbit",
      ],
      links: [
        {
          type: "Website",
          href: "https://mathieupicart.fr/devevents",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MathieuPicart/next_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hackathon Corte - GoodBarber",
      dates: "Décembre 2022 - 24h",
      location: "Corte, Corse",
      description:
        "Conception d’une application web exploitant l’IA (OpenAI) pour générer automatiquement des sites vitrines ou e-commerce personnalisés; Rôle de leader technique et développeur au sein de l’équipe.",
      image: "/gb.png",
      win: "Meilleure équipe",
      links: [
      ],
    },
  ],
} as const;
