const desktopModules = import.meta.glob('../assets/img/projects/desktop/*.webp', { eager: true });
const mobileModules  = import.meta.glob('../assets/img/projects/mobile/*.webp',  { eager: true });

const img = (modules, filename) => {
  const key = Object.keys(modules).find(k => k.endsWith(`/${filename}`));
  return key ? modules[key].default : undefined;
};

export const domain = 'https://antoine-leca.students-laplateforme.io/';
export const githubDomain = 'https://github.com';

const projets = [
  {
    name: 'VPS Sécurisé',
    description: 'Configuration et sécurisation complète d\'un serveur VPS OVH pour l\'hébergement de mes projets web : pare-feu UFW, Fail2ban, accès SSH par clé, reverse proxy Nginx et déploiement via Coolify.',
    compétences: ['VPS', 'Fail2ban', 'SSH', 'UFW', 'Linux', 'Nginx', 'Coolify', 'OVH'],
    ifMobile: false,
  },
  {
    name: 'MovelaV2',
    description: 'Refonte complète du site Movela en React, Node/Express avec hébergement initial sur Render/Vercel puis sur mon VPS/Coolify.',
    compétences: ['Node', 'Express', 'React', 'Tailwind', 'DaisyUI', 'API'],
    link: 'https://movela.aleca.dev',
    gitlink: '/antoine-leca/Movela',
    imageDesktop: img(desktopModules, 'Movela2Desktop.webp'),
    imageMobile:  img(mobileModules,  'Movela2Mobile.webp'),
    url: 'movela.aleca.dev',
  },
  {
    name: 'Movela',
    description: "Site répertoire de films réalisé avec PHP, Javascript et l'API TMDb.",
    compétences: ['API', 'JS', 'Tailwind'],
    link: 'Movela/',
    gitlink: '/marvin-delansorne/Movela',
    imageDesktop: img(desktopModules, 'MovelaDesktop.webp'),
    imageMobile:  img(mobileModules,  'MovelaMobile.webp'),
    url: 'antoine-leca.students-laplateforme.io/Movela',
  },
  {
    name: 'Dofus Clicker',
    description: "Création d'un jeu de type \"clicker\" inspiré de Dofus, réalisé avec Javascript.",
    compétences: ['JS', 'JSon', 'Tailwind'],
    link: 'Clicker/',
    gitlink: '/marvin-delansorne/Clicker',
    imageDesktop: img(desktopModules, 'ClickerDesktop.webp'),
    ifMobile: false,
    url: 'antoine-leca.students-laplateforme.io/Clicker',
  },
  {
    name: 'Demetech',
    description: 'Boutique en ligne de produits high-tech, réalisée avec PHP et MySQL.',
    compétences: ['PHP', 'JS', 'MySQL', 'Tailwind'],
    link: 'Demetech/',
    gitlink: '/antoine-leca/boutique-en-ligne',
    imageDesktop: img(desktopModules, 'DemetechDesktop.webp'),
    imageMobile:  img(mobileModules,  'DemectechMobile.webp'),
  },
  {
    name: 'Echo Book',
    description: "Site de livre d'or en ligne, réalisé en PHP et MySQL.",
    compétences: ['PHP', 'MySQL'],
    link: 'livre-or/views/index.php',
    gitlink: '/esteban-genty/livre-or',
    imageDesktop: img(desktopModules, 'EchoBookDesktop.webp'),
    imageMobile:  img(mobileModules,  'EchoBookMobile.webp'),
    url: 'antoine-leca.students-laplateforme.io/livre-or',
  },
  {
    name: 'Happy Meal',
    description: 'Site de recettes de repas en ligne, réalisé en PHP, JS et MySQL.',
    compétences: ['PHP', 'JS', 'MySQL'],
    link: 'happyMeal/',
    gitlink: '/antoine-leca/happyMeal',
    imageDesktop: img(desktopModules, 'TastyDesktop.webp'),
    imageMobile:  img(mobileModules,  'TastyMobile.webp'),
  },
  {
    name: 'Carteo',
    description: 'Site de recette typé admin panel, réalisé en PHP et MySQL.',
    compétences: ['PHP', 'MySQL'],
    link: 'gestionnaire-de-menu/',
    gitlink: '/esteban-genty/gestionnaire-de-menu',
    imageDesktop: img(desktopModules, 'CarteoDesktop.webp'),
    imageMobile:  img(mobileModules,  'CarteoMobile.webp'),
    url: 'antoine-leca.students-laplateforme.io/gestionnaire-de-menu',
  },
];

export default projets;
