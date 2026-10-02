// Contenu du portfolio. Modifier ici, puis lancer : node tools/build.js
// Les textes sont des gabarits (backticks) pour pouvoir écrire des apostrophes librement.

const profile = {
  name: `Hassimiou BARRY`,
  first: `Hassimiou`,
  role: `Étudiant BUT2 Informatique`,
  status: `BUT2 INFORMATIQUE | Grenoble | Pentester éthique`,
  tagline: `Cybersécurité · DevSecOps · Pentest éthique`,
  location: `Grenoble, France`,
  email: `mamadou.barry1@etu.univ-grenoble-alpes.fr`,
  phone: `+33 7 49 98 09 36`,
  phoneHref: `+33749980936`,
  github: `https://github.com/hassimiou07`,
  linkedin: `https://www.linkedin.com/in/hassimiou-barry-712016383/`,
  cv: `cv.pdf`,
  photo: `Img/hassimiou.jpeg`,
  siteUrl: `https://hassimiou07.github.io/Portfolio-Hassimiou/`,
  searching: `Stage DevSecOps / cybersécurité, avril 2027`,
  availability: `Du 19 avril au 25 juin 2027, prolongation possible pour l'été`,
  bio: [
    `Bonjour ! Je suis Hassimiou BARRY, étudiant en 2ème année de BUT Informatique à l'IUT2 de Grenoble. Je suis passionné de cybersécurité, de réseaux et de développement, et je veux devenir pentester éthique.`,
    `Je combine une expérience pratique en IT (réseaux d'entreprise, sécurité physique et logique, projets d'équipe) avec des compétences modernes en développement. Je cherche un stage DevSecOps ou cybersécurité pour avril 2027.`,
  ],
  qualities: [`Curiosité`, `Discipline`, `Sens du relationnel`],
  languages: [
    [`Français`, `langue maternelle`],
    [`Anglais`, `avancé`],
    [`Fulani`, `avancé`],
    [`Sosso`, `avancé`],
    [`Espagnol`, `B1`],
  ],
  interests: [
    [`Basketball`, `fa-basketball`, `L'esprit d'équipe et la persévérance.`],
    [`Arts martiaux`, `fa-hand-fist`, `La discipline et la concentration.`],
    [`Musique`, `fa-music`, `Explorer différents genres et instruments.`],
    [`Lecture`, `fa-book-open`, `Des domaines variés pour apprendre en permanence.`],
  ],
};

const nav = [
  { label: `Accueil`, href: `index.html`, id: `home` },
  { label: `À propos`, href: `About.html`, id: `about` },
  { label: `Compétences`, href: `Skills.html`, id: `skills` },
  { label: `Projets`, href: `Projects.html`, id: `projects` },
  { label: `Pentest`, href: `Pentest.html`, id: `pentest` },
  { label: `Contact`, href: `Contact.html`, id: `contact` },
];

// Référentiel BUT : une page par compétence, qui liste automatiquement les projets associés.
const competences = [
  {
    id: `tester`, title: `Tester`, icon: `fa-user-secret`, file: `Skills/Pentest.html`,
    summary: `Évaluer la sécurité de systèmes dans un cadre autorisé, identifier les vulnérabilités et proposer des corrections.`,
  },
  {
    id: `administrer`, title: `Administrer`, icon: `fa-network-wired`, file: `Skills/skill3.html`,
    summary: `Installer, configurer, mettre à disposition et maintenir des services et des réseaux.`,
  },
  {
    id: `realiser`, title: `Réaliser`, icon: `fa-code`, file: `Skills/skill1.html`,
    summary: `Développer : concevoir, coder, tester et intégrer une solution informatique pour un client.`,
  },
  {
    id: `optimiser`, title: `Optimiser`, icon: `fa-gears`, file: `Skills/skill2.html`,
    summary: `Optimiser des applications selon des critères précis : temps d'exécution, consommation de ressources.`,
  },
  {
    id: `gerer`, title: `Gérer`, icon: `fa-database`, file: `Skills/skill4.html`,
    summary: `Concevoir, administrer et exploiter les données de l'entreprise, et mettre à disposition les informations utiles au pilotage.`,
  },
  {
    id: `collaborer`, title: `Collaborer`, icon: `fa-people-group`, file: `Skills/skill6.html`,
    summary: `Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.`,
  },
];

const skillGroups = [
  { title: `Développement web`, icon: `fa-code`, items: [`HTML5`, `CSS3`, `JavaScript`, `PHP`, `React`] },
  { title: `Back-end et données`, icon: `fa-database`, items: [`Java (POO)`, `C / C++`, `FastAPI`, `SQL`, `PostgreSQL`] },
  { title: `Systèmes et réseaux`, icon: `fa-server`, items: [`Linux`, `Shell`, `Architecture des réseaux`] },
  { title: `DevOps et outils`, icon: `fa-screwdriver-wrench`, items: [`Git`, `GitHub`, `GitLab`, `Docker`, `IntelliJ IDEA`, `VS Code`, `Figma`] },
  { title: `Sécurité`, icon: `fa-shield-halved`, items: [`Metasploit`, `Burp Suite`, `Ghidra`, `Root-Me`, `Cryptographie`] },
  { title: `Méthodes`, icon: `fa-diagram-project`, items: [`Agile`, `En cascade`, `Architecture MVC`, `Tests unitaires`] },
];

const experiences = [
  {
    title: `Réseautique Entreprise et Gestion Systèmes`,
    org: `Compagnie des Bauxites de Guinée (CBG)`,
    when: `1 mois · stage de Terminale`,
    points: [
      `Architecture VLAN et LAN pour plus de 3000 employés`,
      `Interconnexions réseau inter-villes et routage de données`,
      `Optimisation et maintenance des systèmes`,
      `Protocoles de cybersécurité sur systèmes critiques`,
    ],
  },
  {
    title: `Implémentation Sécurité Physique et Logique`,
    org: `Great Expert Team, Guinée`,
    when: `1 mois · stage de 3ème`,
    points: [
      `Installation et configuration de systèmes de surveillance (caméras CCTV)`,
      `Contrôle d'accès RFID et biométrique`,
      `Configuration de portails automatisés avec protocoles de sécurité avancés`,
      `Dépannage et maintenance au niveau terminal`,
    ],
  },
];

const timeline = [
  {
    when: `2026 – 2027`, title: `BUT Informatique, 2ème année`, org: `IUT2 / UGA Grenoble`, current: true,
    text: `Cryptographie et sécurité, architecture des réseaux, développement web, SQL dans les langages de programmation, gestion de projet. Deux projets universitaires en cours.`,
    tags: [`Sécurité`, `Réseaux`, `Web`, `SQL`],
  },
  {
    when: `2025 – 2026`, title: `BUT Informatique, 1ère année`, org: `IUT2 / UGA Grenoble`,
    text: `Linux, Java, bases de données, HTML et CSS. Quatre projets universitaires (SAÉ) documentés dans ce portfolio.`,
    tags: [`Linux`, `Java`, `PostgreSQL`, `HTML/CSS`],
  },
  {
    when: `2024 – 2025`, title: `Certification PIX`, org: `Plateforme PIX`,
    text: `Certification officielle des compétences numériques.`,
    link: { label: `Voir la certification`, href: `Certif/pix.pdf` },
  },
  {
    when: `2024 – 2025`, title: `Baccalauréat général`, org: `Lycée Blaise Pascal, Guinée`,
    text: `Mathématiques, SVT, Numérique et Sciences Informatiques, Histoire-Géographie.`,
  },
  {
    when: `2020 – 2021`, title: `Diplôme National du Brevet`, org: `Collège`,
    text: `Premiers contacts avec l'informatique et la programmation.`,
  },
];

// Projets. `competences` pilote les pages de compétences et le filtre de Projects.html.
// `page` = page de détail (facultatif). `section` : steps | cards | list | table.
const projects = [
  {
    id: `blaiseconnect`, page: `projects/blaiseconnect.html`,
    title: `BlaiseConnect`, subtitle: `Plateforme web de gestion scolaire`,
    kind: `Projet d'équipe`, period: ``, icon: `fa-school`,
    competences: [`realiser`, `collaborer`, `administrer`],
    stack: [`React`, `FastAPI`, `PostgreSQL`, `Docker`],
    summary: `Co-développement d'un portail de gestion scolaire, une sorte de Pronote pour l'école internationale française dont je suis issu : élèves, familles, enseignants, classes et notes.`,
    links: [
      { label: `Dépôt GitHub`, href: `https://github.com/Gaston667/blaise-connect`, icon: `fa-brands fa-github` },
      { label: `Portail (accès sur identifiants)`, href: `https://portail.blaiseconnect.fr/login`, icon: `fa-solid fa-arrow-up-right-from-square` },
    ],
    overview: [
      `BlaiseConnect est une plateforme web de gestion scolaire : un portail qui joue le rôle d'un Pronote pour l'établissement français à l'international dont je suis issu. J'y ai participé en tant que co-développeur, au sein d'une équipe.`,
      `Le projet est découpé en quatre parties (frontend, backend, base de données, documentation) et se déploie avec Docker Compose.`,
    ],
    sections: [
      {
        title: `Ce que gère la plateforme`, type: `cards`,
        items: [
          { icon: `fa-user-graduate`, title: `Élèves, familles, enseignants`, text: `Gestion des comptes et des relations entre les différents acteurs de l'école.` },
          { icon: `fa-chalkboard`, title: `Classes et notes`, text: `Organisation des classes, saisie et consultation des notes.` },
          { icon: `fa-calendar-days`, title: `Emploi du temps et présences`, text: `Emploi du temps et suivi des présences, avec des fiches détaillées.` },
          { icon: `fa-user-lock`, title: `Rôles et accès`, text: `Pages réservées à l'administrateur, connexion distincte pour les élèves.` },
        ],
      },
      {
        title: `Sécurité et déploiement`, type: `list`,
        items: [
          `Renforcement de la sécurité des échanges HTTP et de la création de comptes.`,
          `Gestion des rôles et des accès (administrateur, élève).`,
          `Déploiement conteneurisé avec Docker Compose.`,
          `Documentation du déploiement en production.`,
        ],
      },
    ],
  },
  {
    id: `genevent`, page: `projects/genevent.html`,
    title: `GenEvent`, subtitle: `Application de gestion d'évènements`,
    kind: `Projet universitaire`, period: `2026`, icon: `fa-calendar-check`,
    competences: [`realiser`, `collaborer`],
    stack: [`Java`, `JavaFX`, `Maven`, `GitLab`],
    summary: `Application Java développée en équipe selon le patron MVC. J'ai travaillé sur la logique métier, les tests unitaires, la Javadoc et l'interface.`,
    overview: [
      `GenEvent est une application de gestion d'évènements développée en équipe dans le cadre d'un projet universitaire de l'IUT2. Elle suit le patron MVC (modèle, vue, contrôleur) et propose deux interfaces : une interface en ligne de commande et une interface graphique JavaFX.`,
      `Les données sont rendues persistantes par sérialisation. Le travail d'équipe s'est fait avec Git sur le GitLab de l'université.`,
    ],
    sections: [
      {
        title: `Ma contribution`, type: `cards`,
        items: [
          { icon: `fa-gears`, title: `Logique métier`, text: `Lecture, amélioration et finalisation de la logique métier de l'application.` },
          { icon: `fa-vial`, title: `Tests unitaires`, text: `Écriture et finalisation des tests des opérations CRUD et de la logique métier, avec leurs commentaires.` },
          { icon: `fa-book`, title: `Javadoc`, text: `Génération de la documentation Javadoc du projet.` },
          { icon: `fa-window-maximize`, title: `Interface`, text: `Fenêtres redimensionnables, ouverture de plusieurs fiches, couleurs des boutons de fermeture.` },
        ],
      },
      {
        title: `L'application`, type: `list`,
        items: [
          `Création et consultation de fiches d'évènements.`,
          `Tableau de bord, avec une carte des départs imminents.`,
          `File d'attente avec promotion des inscrits.`,
          `Architecture MVC : packages modèle, vue et contrôleur.`,
        ],
      },
    ],
  },
  {
    id: `aidants`,
    title: `Application client-serveur sécurisée`, subtitle: `Plateforme pour les aidants familiaux`,
    kind: `Projet universitaire · en cours`, period: `2026 – 2027`, icon: `fa-hands-holding-circle`,
    competences: [`realiser`, `gerer`, `collaborer`],
    stack: [`Client-serveur`, `Base de données`, `Sécurité`],
    summary: `Création en équipe (6 à 7 étudiants) d'une application client-serveur sécurisée s'appuyant sur une base de données : recueil du besoin, modélisation, architecture, développement et tests.`,
  },
  {
    id: `reseau`,
    title: `Déployer et sécuriser des services dans un réseau`, subtitle: `Projet réseau`,
    kind: `Projet universitaire · en cours`, period: `2026 – 2027`, icon: `fa-network-wired`,
    competences: [`administrer`],
    stack: [`Réseau`, `Sécurité`, `Déploiement`],
    summary: `Déploiement et sécurisation de services dans un réseau.`,
  },
  {
    id: `chatbot`, page: `SAE3.html`,
    title: `Chatbot de culture générale`, subtitle: `Java · indexation et thésaurus`,
    kind: `Projet universitaire`, period: `2025 – 2026`, icon: `fa-robot`,
    competences: [`realiser`, `optimiser`],
    stack: [`Java`, `Indexation`, `Thésaurus`, `Algorithmes`],
    summary: `Un chatbot capable de répondre à des questions de culture générale grâce à une recherche en entonnoir : thème d'abord, forme de la question ensuite.`,
    links: [{ label: `Dépôt GitHub`, href: `https://github.com/hassimiou07/ProjetChatbot`, icon: `fa-brands fa-github` }],
    overview: [
      `Développement d'un chatbot capable de répondre à des questions de culture générale. Le système utilise une approche en entonnoir à deux étapes : une recherche thématique des réponses candidates à partir des mots-clés, puis une sélection selon la cohérence de forme avec la question.`,
      `Objectif : créer un chatbot rapide et fiable, avec des index optimisés, la gestion des synonymes, un contexte conversationnel et la possibilité d'apprendre de façon interactive.`,
    ],
    sections: [
      {
        title: `Architecture et approche`, type: `cards`,
        items: [
          { icon: `fa-magnifying-glass`, title: `Étape 1 : recherche thématique`, text: `Index sur le contenu pour retrouver rapidement les réponses candidates qui contiennent tous les mots-clés de la question.` },
          { icon: `fa-filter`, title: `Étape 2 : sélection par la forme`, text: `Index sur la forme pour garder les réponses cohérentes avec la structure grammaticale de la question.` },
          { icon: `fa-spell-check`, title: `Thésaurus et variantes`, text: `Gestion des synonymes et des variantes de mots (peint/peinte, nomme/appellent) pour mieux couvrir les questions.` },
          { icon: `fa-comments`, title: `Contexte conversationnel`, text: `Les questions incomplètes sont comprises grâce au thème de la question précédente.` },
        ],
      },
    ],
  },
  {
    id: `tourmentin`, page: `SAE2.html`,
    title: `Base de données Le Tourmentin`, subtitle: `SQL · modélisation et implémentation`,
    kind: `Projet universitaire`, period: `2025 – 2026`, icon: `fa-database`,
    competences: [`gerer`],
    stack: [`PostgreSQL`, `MySQL`, `SQL`, `Modélisation`],
    summary: `Conception et implémentation de la base de données d'une association maritime : adhérents, bateaux, activités, équipages et cotisations.`,
    overview: [
      `Conception et implémentation d'une base de données pour l'association « Le Tourmentin », qui organise des activités maritimes (sorties et rallyes de voiliers). Le projet inclut la modélisation complète des adhérents, bateaux, activités, équipages et cotisations, avec normalisation et mise en place de contraintes d'intégrité.`,
      `Contexte : l'association doit informatiser sa gestion pour mieux suivre ses adhérents de plus en plus nombreux, les bateaux disponibles, les rallyes organisés et les participations. J'ai conçu la structure des données et développé les requêtes pour retrouver facilement les informations importantes et assurer leur cohérence.`,
    ],
    sections: [
      {
        title: `Méthodologie`, type: `steps`,
        items: [
          { title: `Analyse des règles de gestion`, text: `Lecture et compréhension des 9 règles métier qui définissent le système.` },
          { title: `Modélisation`, text: `Schéma entité-association : entités, associations et cardinalités.` },
          { title: `Schéma relationnel`, text: `Dérivation du schéma logique relationnel à partir du modèle entité-association.` },
          { title: `Implémentation SQL`, text: `Scripts CREATE et DROP, requêtes de test et validation des contraintes.` },
        ],
      },
    ],
  },
  {
    id: `hardis`, page: `SAE4.html`,
    title: `Site web institutionnel HARDIS GROUPE`, subtitle: `HTML et CSS · site pour la génération Alpha`,
    kind: `Projet universitaire`, period: `2025 – 2026`, icon: `fa-laptop-code`,
    competences: [`collaborer`, `realiser`],
    stack: [`HTML5`, `CSS3`, `Responsive`, `Whimsical`],
    summary: `Un site institutionnel complémentaire pour une ESN, pensé pour présenter l'entreprise à des élèves de 3ème en recherche de stage, loin du jargon technique.`,
    overview: [
      `Création d'un site web institutionnel complémentaire pour HARDIS GROUPE, une ESN du secteur numérique. Il présente l'entreprise de manière accessible à des élèves de 3ème en recherche de stage, loin du jargon technique et de la communication commerciale habituelle.`,
      `Le projet a deux phases : recueil et organisation des informations (fiche de renseignements), puis conception (maquettes) et implémentation (site final). L'accent est mis sur la vulgarisation du contenu et la sobriété visuelle et écologique.`,
    ],
    sections: [
      {
        title: `Phases du projet`, type: `steps`,
        items: [
          { title: `Fiche de renseignements`, text: `Recueil des informations sur l'entreprise, dans un document à deux colonnes : informations sources et informations vulgarisées pour le public cible.` },
          { title: `Conception des maquettes`, text: `Architecture des pages et maquettes réalisées, avec les retours de l'enseignant intégrés.` },
          { title: `Implémentation`, text: `Développement du site final en respectant les maquettes : contenu vulgarisé, affichage adapté à tous les écrans.` },
          { title: `Présentation`, text: `Présentation orale, démonstration du site et justification des choix de conception.` },
        ],
      },
      {
        title: `Résultats`, type: `list`,
        items: [
          `Un site complet, conforme aux maquettes, qui s'adapte à l'ordinateur, à la tablette et au téléphone.`,
          `Un contenu clair et adapté aux élèves de 3ème, sans jargon technique.`,
          `Une documentation du projet : structure, maquettes et fiche de renseignements.`,
        ],
      },
    ],
  },
  {
    id: `debian`, page: `SAE1.html`,
    title: `Installation Debian 13 et IntelliJ IDEA`, subtitle: `Linux · environnement de développement`,
    kind: `Projet universitaire`, period: `Novembre 2025`, icon: `fa-linux fa-brands`,
    competences: [`administrer`],
    stack: [`Debian 13`, `KDE Plasma`, `JDK`, `Git`, `Snap`, `Flatpak`],
    summary: `Installer et valider un environnement de développement complet sur Debian 13, avec IntelliJ IDEA installé de trois façons : archive, snap et flatpak.`,
    overview: [
      `Évaluation pratique : installer et configurer un environnement de développement complet sur une machine virtuelle Debian 13 avec le bureau KDE Plasma. Installation et validation du JDK, de Git et d'IntelliJ IDEA par trois méthodes différentes (archive, snap, flatpak).`,
      `Format : travail individuel de 3 heures, avec des captures d'écran qui documentent chaque étape d'installation et de validation, déposées sur Chamilo.`,
    ],
    sections: [
      {
        title: `Installation du système`, type: `steps`,
        items: [
          { title: `Vérification SHA-512`, text: `Empreinte de référence du site officiel Debian comparée à l'empreinte locale calculée avec sha512sum.`, img: `Img/capture 1.png`, alt: `Vérification de l'empreinte SHA-512 de l'image Debian` },
          { title: `Création de l'utilisateur`, text: `Écran de l'installateur Debian qui demande le nom de login.`, img: `Img/capture 2.png`, alt: `Création de l'utilisateur dans l'installateur Debian` },
          { title: `Bureau KDE Plasma`, text: `Bureau en 1440x900 avec un terminal qui affiche le login et le résultat de kinfo.`, img: `Img/capture 3.png`, alt: `Bureau KDE Plasma avec un terminal` },
          { title: `Accès root`, text: `Validation de la commande sudo -i, avec accès administrateur.`, img: `Img/capture 4.png`, alt: `Commande sudo -i dans un terminal` },
        ],
      },
      {
        title: `Outils de développement`, type: `steps`,
        items: [
          { title: `Git`, text: `Vérification de la version de Git (2.47.3), en root puis en utilisateur.`, img: `Img/capture 5.png`, alt: `Résultat de git --version` },
          { title: `JDK et archive d'IntelliJ`, text: `Installation du JDK avec apt (OpenJDK 21), vérifiée avec java -version, puis extraction de l'archive d'IntelliJ IDEA.`, img: `Img/capture 6.png`, alt: `Installation du JDK et extraction de l'archive IntelliJ` },
          { title: `Méthode 1 : archive`, text: `Lancement d'IntelliJ IDEA depuis l'archive extraite, et relevé de l'espace disque occupé.`, img: `Img/capture 7.png`, alt: `Lancement d'IntelliJ IDEA depuis l'archive` },
          { title: `Méthode 2 : snap`, text: `Installation de snap avec apt, puis de intellij-idea-community avec snap, vérifiée avec snap list.`, img: `Img/capture 8.png`, alt: `Installation d'IntelliJ IDEA avec snap` },
          { title: `Méthode 3 : flatpak`, text: `Lancement d'IntelliJ IDEA Community avec flatpak, et relevé de l'espace disque occupé.`, img: `Img/capture 9.png`, alt: `Lancement d'IntelliJ IDEA avec flatpak` },
          { title: `Espace disque`, text: `Relevé df : la partition racine est remplie à 97 % une fois les trois installations faites. Le coût en espace disque est un critère de choix entre les méthodes.`, img: `Img/capture 10.png`, alt: `Résultat de la commande df avec la partition racine à 97 %` },
        ],
      },
      {
        title: `Espace disque relevé (du -h)`, type: `table`,
        head: [`Méthode`, `Ce qui a été mesuré`, `Taille`],
        rows: [
          [`Archive`, `Dossier d'IntelliJ IDEA extrait dans /usr/local/bin`, `4,7 Go`],
          [`Snap`, `Fichier intellij-idea-community.snap`, `1,3 Go`],
          [`Flatpak`, `Application com.jetbrains.IntelliJ-IDEA-Community`, `3,4 Go`],
        ],
      },
    ],
  },
  {
    id: `metasploit`, page: `Pentest/metasploit.html`,
    title: `Tests avec Metasploit`, subtitle: `Pentest en environnement isolé`,
    kind: `Lab pentest`, period: `2024`, icon: ``, logo: `Img/metasploit.svg`,
    competences: [`tester`], tags: [`pentest`],
    stack: [`Metasploit`, `Metasploitable`, `Validation de vulnérabilité`],
    summary: `Mettre en place une cible volontairement vulnérable, identifier les services concernés et tester un module adapté, dans un environnement isolé et autorisé.`,
    overview: [
      `Mettre en place une cible volontairement vulnérable (Metasploitable), identifier les services concernés et tester un module Metasploit adapté, dans un environnement isolé et autorisé. L'objectif est de valider qu'une vulnérabilité est bien exploitable, pas de causer des dégâts.`,
    ],
    sections: [
      {
        title: `Déroulé`, type: `steps`,
        items: [
          { title: `Mise en place de la cible`, text: `Une machine volontairement vulnérable (Metasploitable), dans un réseau isolé.` },
          { title: `Identification des services`, text: `Repérer les services exposés par la cible et ceux qui sont concernés par une vulnérabilité.` },
          { title: `Choix et test d'un module`, text: `Sélectionner dans Metasploit le module adapté au service visé et le tester.` },
          { title: `Validation de la vulnérabilité`, text: `Confirmer le résultat obtenu, en restant dans le périmètre autorisé.` },
        ],
      },
      {
        title: `Cadre`, type: `list`,
        items: [
          `Environnement isolé : la cible n'est pas accessible depuis Internet.`,
          `Cible prévue pour cet usage : aucune machine tierce n'est testée.`,
          `Démarche documentée de bout en bout.`,
        ],
      },
    ],
  },
  {
    id: `ghidra`, page: `Pentest/ghidra.html`,
    title: `Reverse engineering`, subtitle: `Analyse de programmes avec Ghidra`,
    kind: `Lab pentest`, period: ``, icon: ``, logo: `Img/ghidra.png`,
    competences: [`tester`], tags: [`pentest`],
    stack: [`Ghidra`, `Analyse statique`, `Désassemblage`],
    summary: `Examiner un programme pour comprendre son fonctionnement, repérer les chaînes et les fonctions importantes, puis analyser son comportement sans son code source.`,
    overview: [
      `Examiner un programme pour comprendre son fonctionnement, repérer les chaînes de caractères et les fonctions importantes, puis analyser son comportement sans disposer de son code source.`,
    ],
    sections: [
      {
        title: `Déroulé`, type: `steps`,
        items: [
          { title: `Ouverture du binaire`, text: `Charger le programme dans Ghidra et laisser l'outil l'analyser.` },
          { title: `Repérage`, text: `Chercher les chaînes de caractères et les fonctions importantes.` },
          { title: `Analyse du comportement`, text: `Comprendre ce que fait le programme à partir du désassemblage, sans code source.` },
        ],
      },
    ],
  },
  {
    id: `rootme`, page: `Pentest/root-me.html`,
    title: `Challenges Root-Me`, subtitle: `Entraînement pratique en cybersécurité`,
    kind: `Entraînement`, period: ``, icon: ``, logo: `Img/rootme.svg`,
    competences: [`tester`], tags: [`pentest`],
    stack: [`Root-Me`, `Web`, `Réseau`, `Analyse de fichiers`],
    summary: `Résoudre des exercices de sécurité en étudiant les indices, en testant des pistes et en documentant la démarche.`,
    overview: [
      `Root-Me est une plateforme d'entraînement à la cybersécurité. J'y résous des exercices en étudiant les indices, en testant des pistes et en documentant ma démarche, notamment autour du web, du réseau et de l'analyse de fichiers.`,
    ],
    sections: [
      {
        title: `Démarche`, type: `steps`,
        items: [
          { title: `Étudier les indices`, text: `Lire l'énoncé et repérer ce qui est exposé.` },
          { title: `Tester des pistes`, text: `Formuler des hypothèses, les tester une à une.` },
          { title: `Documenter`, text: `Garder une trace de la démarche pour pouvoir l'expliquer.` },
        ],
      },
      {
        title: `Domaines travaillés`, type: `list`,
        items: [`Web`, `Réseau`, `Analyse de fichiers`],
      },
    ],
  },
];

// Pages pentest (hors labs, qui sont dans `projects`).
const pentest = {
  intro: `Mon objectif est de devenir pentester éthique. Je m'entraîne dans des environnements isolés et autorisés, et je documente chaque démarche : ce que je cherche, ce que je teste, ce que j'obtiens, et comment corriger.`,
  principles: [
    { icon: `fa-file-signature`, title: `Toujours autorisé`, text: `Un test d'intrusion n'a de sens qu'avec une autorisation et un périmètre clairs.` },
    { icon: `fa-vial-circle-check`, title: `Environnement isolé`, text: `Je m'entraîne sur des cibles prévues pour cela, dans un réseau fermé.` },
    { icon: `fa-clipboard-list`, title: `Démarche documentée`, text: `Chaque lab suit un déroulé écrit qu'on peut relire et reproduire.` },
    { icon: `fa-screwdriver-wrench`, title: `Proposer des corrections`, text: `Trouver une faille ne suffit pas : l'objectif est de la faire corriger.` },
  ],
  phases: [
    { title: `Reconnaissance`, text: `Rassembler les informations disponibles sur la cible, sans interaction agressive.` },
    { title: `Identification des services`, text: `Repérer les machines, les ports ouverts et les services qui tournent.` },
    { title: `Analyse des vulnérabilités`, text: `Rapprocher les services et leurs versions des failles connues.` },
    { title: `Exploitation`, text: `Tester qu'une faille est réellement exploitable, dans le périmètre autorisé.` },
    { title: `Post-exploitation`, text: `Mesurer l'impact réel d'une compromission, toujours dans le périmètre.` },
    { title: `Rapport et remédiation`, text: `Expliquer les failles, leur impact, et proposer des corrections.` },
  ],
  rules: [
    `Obtenir une autorisation écrite et un périmètre précis avant tout test.`,
    `S'entraîner sur des cibles prévues pour cela (Metasploitable, plateformes de challenges).`,
    `Ne jamais tester un système qui ne m'appartient pas ou que je n'ai pas le droit de tester.`,
    `Rester dans le périmètre et limiter l'impact des tests.`,
    `Signaler les failles de façon responsable.`,
  ],
  coverage: [
    { lab: `metasploit`, phases: `Identification des services · Exploitation (validation)` },
    { lab: `ghidra`, phases: `Analyse (reverse engineering, sans code source)` },
    { lab: `rootme`, phases: `Web, réseau et analyse de fichiers · Démarche documentée` },
  ],
  tools: [
    { name: `Metasploit`, logo: `Img/metasploit.svg`, text: `Framework de test d'intrusion : il regroupe des modules d'exploitation que l'on choisit selon le service visé.`, use: `Utilisé dans mon lab Metasploit.`, lab: `metasploit` },
    { name: `Metasploitable`, text: `Machine virtuelle volontairement vulnérable, conçue pour s'entraîner légalement.`, use: `La cible de mon lab Metasploit.`, lab: `metasploit` },
    { name: `Ghidra`, logo: `Img/ghidra.png`, text: `Suite de reverse engineering : désassemblage et analyse de programmes dont on n'a pas le code source.`, use: `Utilisé dans mon lab de reverse engineering.`, lab: `ghidra` },
    { name: `Root-Me`, logo: `Img/rootme.svg`, text: `Plateforme d'entraînement avec des challenges de sécurité sur le web, le réseau, l'analyse de fichiers.`, use: `Mon terrain d'entraînement régulier.`, lab: `rootme` },
    { name: `Burp Suite`, icon: `fa-bug`, text: `Proxy d'interception pour tester la sécurité des applications web en observant et en modifiant les requêtes HTTP.`, use: `Dans ma boîte à outils web.` },
  ],
};

module.exports = { profile, nav, competences, skillGroups, experiences, timeline, projects, pentest };
