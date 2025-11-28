import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mathieu Picart",
  initials: "MP",
  url: "https://mathieupicart.fr",
  location: "Rennes, Bretagne",
  locationLink: "https://www.google.com/maps/place/rennes",
  description:
    "Passionné par le développement web et les défis techniques, j’aime concevoir des solutions efficaces et durables. Aujourd’hui, je souhaite rejoindre une équipe où je pourrai contribuer à des projets concrets, continuer à progresser et apporter une réelle valeur technique.",
  summary:
    `J’aime comprendre ce qui se cache derrière un besoin pour y apporter une solution fiable et maintenable. J’ai développé de l’expérience sur React, Next.js, Express et TypeScript, avec une attention constante portée à la qualité du code. Aujourd’hui, je recherche un environnement stimulant où je pourrai progresser, collaborer et contribuer à des projets à forte valeur ajoutée.`,
  avatarUrl: "/me.png",
  skills: {
    "Frontend": [
      "React",
      "Next.js",
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
      "SCSS",
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
      "PHPMyAdmin",
    ],
    "Outils": [
      "Git",
      "GitLab CI/CD",
      "Postman / Bruno",
      "Docker",
      "Cursor / Antigravity",
      "PostHog",
      "Figma",
      "CodeRabbit",
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
      CV: {
        name: "CV",
        url: "/cv.pdf",
        icon: Icons.cv2,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Crédit Agricole",
      href: "https://www.credit-agricole.fr/ca-corse/particulier.html",
      badges: ["Alterance"],
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
          technologies: ["Symfony", "Laravel", "MySQL"],
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
      badges: ["Stage"],
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
          description: "Réalisation d’une application web destinée à améliorer le suivi de production au sein de l’entreprise.",
          context: "Stage de fin d’études réalisé en autonomie, avec un échange régulier avec les équipes métiers. Le projet a évolué au fil des besoins, ce qui a impliqué plusieurs ajustements techniques et organisationnels.",
          objectives: [
            "Analyse du besoin et rédaction du cahier des charges.",
            "Conception des maquettes et de l’architecture technique.",
            "Développement de l’application avec React.js et Express.js.",
            "Déploiement d’une première version sur un serveur Linux Debian."
          ],
          results: "Une première version fonctionnelle de l’application a été déployée. Bien qu’incomplète par manque de temps, elle a servi de base à l’entreprise pour envisager la suite du développement."
        }
      ],
    },
    {
      company: "IUT de Lannion",
      href: "https://iut-lannion.univ-rennes.fr/",
      badges: ["Stage"],
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
          description: "Participation au développement d’un jeu web et mobile au sein d’un groupe de travail, avec un objectif d’architecture multiplateforme et moderne.",
          context: "Stage de fin d’études réalisé en groupe, durant la période de la pandémie de Covid-19. Le contexte sanitaire a complexifié la coordination et le travail en équipe, mais nous avons poursuivi le développement en avançant le projet le plus loin possible.",
          objectives: [
            "Conception de l’architecture et des interfaces du jeu.",
            "Développement du front-end avec ReactJS, TypeScript, Ionic et Capacitor.",
            "Intégration d’une base de données PostgreSQL et gestion des états avec Redux.",
            "Travail collaboratif et coordination à distance durant la pandémie de Covid-19."
          ],
          results: "Le jeu n’a pas pu être déployé, mais une version fonctionnelle en phase avancée de développement a été livrée. Le stage a été l’occasion de découvrir le travail collaboratif à distance et de consolider mes compétences sur les technologies web et mobiles hybrides."
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
      href: "https://mpdevevents.netlify.app/",
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
          href: "https://mpdevevents.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MathieuPicart/next_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dev_events.png",
      video: "",
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
