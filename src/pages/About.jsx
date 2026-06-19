import { useState } from 'react';
import { SITE_URL } from '../config/seo';
import PhosIcon from '../components/PhosIcon';

const PAGE_TITLE = "À propos — Antoine LECA"
const PAGE_DESCRIPTION = "Découvrez le parcours d'Antoine LECA, développeur Full Stack passionné par le Mobile First, Tailwind CSS, DaisyUI et les applications web modernes."

function AboutCard({ number, title, children, className = '', defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`about-card bg-base-200 rounded-box overflow-hidden ${isOpen ? 'about-card--open' : ''} ${className}`}>
      <button
        type="button"
        className="relative flex items-center justify-between w-full px-6 py-5 cursor-pointer text-left select-none"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
      >
        <span
          aria-hidden="true"
          className={`absolute right-4 top-0 text-9xl font-bold leading-none pointer-events-none select-none tabular-nums transition-opacity duration-400 ${isOpen ? 'opacity-[0.07]' : 'opacity-[0.035]'}`}
        >
          {number}
        </span>
        <span className="text-lg font-semibold uppercase tracking-widest">{title}</span>
        <PhosIcon
          name="CaretDown"
          size={20}
          className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`about-card-wrapper ${isOpen ? 'about-card-wrapper--open' : ''}`}>
        <div className="about-card-inner">
          <div className="px-6 pb-6 pt-1 about-card-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const About = () => (
  <main className="min-h-[80vh]">
    <title>{PAGE_TITLE}</title>
    <meta name="description" content={PAGE_DESCRIPTION} />
    <link rel="canonical" href={`${SITE_URL}/about`} />
    <meta property="og:url" content={`${SITE_URL}/about`} />
    <meta property="og:title" content={PAGE_TITLE} />
    <meta property="og:description" content={PAGE_DESCRIPTION} />
    {/* TODO: Remplacer og-image.jpg par un vrai visuel (bannière nom + titre + fond) avant mise en prod */}
    <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
    <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

    <h1 className='divider divider-start pl-6 py-6 text-2xl main-font-m'>À propos</h1>

    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12 w-9/10 mx-auto hyphens-auto"
      style={{ textJustify: "inter-word" }}
    >

      <AboutCard number="01" title="Les origines" defaultClose>
        <div className="space-y-4">
          <p className="text-xl">
            Aussi loin que je me souvienne, j'ai toujours baigné dans la culture tech. Tout a commencé vers mes 5-6 ans, à regarder par-dessus l'épaule de ma grand-mère qui ponçait des jeux de stratégie comme La Reine du Nil ou Maître de l'Olympe. À l'adolescence, c'est devenu de la pure débrouillardise : drivers, BIOS, pâte thermique de ma PS4… J'étais le dépanneur officiel de la famille, et j'adorais ça.
          </p>
          <p className="text-xl">
            C'est cette même logique qui m'a poussé vers la mécanique auto (Bac Pro 2019). Suivre un schéma de montage, comprendre comment les pièces s'imbriquent, être rigoureux - c'était exactement ce que je faisais déjà avec l'électronique. Mais le milieu m'a vite rebuté. Je savais que ma place était ailleurs.
          </p>
        </div>
      </AboutCard>

      <AboutCard number="02" title="Le déclic">
        <div className="space-y-4">
          <p className="text-xl">
            Pendant quelques années, j'ai essayé d'apprendre le dev en autodidacte - sans succès. Je me noyais sous la masse d'infos. Le vrai déclic est arrivé grâce à ma mère, qui m'a parlé d'un stage de découverte des métiers du numérique avec France Travail. On a testé plein de domaines (Dev, Design UX/UI, Marketing, 3D…).
          </p>
          <p className="text-xl">
            Ça a matché direct avec le dev web. Retrouver cette logique pure, construire un site et résoudre des bugs - c'était la suite naturelle de mon parcours : bidouilleur - mécanique - dev. Durant ce stage, j'ai aussi découvert l'UX/UI, et j'ai tout de suite compris à quel point l'accessibilité et l'expérience utilisateur sont indissociables d'un bon code.
          </p>
        </div>
      </AboutCard>

      <AboutCard number="03" title="Ma façon de travailler">
        <div className="space-y-4">
          <p className="text-xl">
            Quand je suis sur un projet, je peux m'enfermer dans ma bulle pendant des heures, focus sur le fameux "je règle ce bug et j'arrête". J'ai une vraie facilité à intégrer les concepts grâce à ma mémoire visuelle et auditive - combinée à la rigueur que j'ai acquise, ça me permet de comprendre vite et de coder proprement.
          </p>
          <div className="border-l-4 border-accent pl-4 space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Mon rapport à l'IA</p>
            <p className="text-xl">
              J'ai une méthodologie stricte : je cherche toujours l'erreur par mes propres moyens (console, doc, recherches…). Ce n'est qu'après avoir retourné le problème dans tous les sens que je demande une piste. Je l'utilise le plus souvent en mode "Ask" - pour garder le contrôle et éviter de sombrer dans une montagne de modifications à accepter. C'est la méthode qui me réussit le mieux pour apprendre à coder proprement avec l'IA.
            </p>
          </div>
        </div>
      </AboutCard>

      <AboutCard number="04" title="La Plateforme_">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Bachelor - Promo 2024</p>
            <p className="text-xl">
              Après une journée portes ouvertes, j'ai sauté le pas. Après un tronc commun et un Hackathon, le choix de ma spécialisation était évident : le Web.
            </p>
            <p className="text-xl">
              Au début difficile (PHP), les choses se sont débloquées dès qu'on est passés sur JavaScript. L'effet "snowball" a commencé : React, Node, Docker… Le format exercices - projet de groupe - soutenance jury était très formateur.
            </p>
          </div>

          <div className="divider my-0" />

          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">CDPI 16 mois - depuis juin 2025</p>
            <p className="text-xl">
              Ce format a été une révélation : consolider mes bases tout en ayant la liberté de bosser sur mes projets perso dès les objectifs atteints (refonte de Movela, configuration de mon VPS, nouveaux langages).
            </p>
            <p className="text-xl">
              Le vrai plus : l'immersion en entreprise. On a attaqué MarsAI - un site de festival de films générés par IA, en compétition avec d'autres villes. Du cahier des charges au rendu, chaque étape était un défi. Résultat : <strong>22/25</strong> décerné par le jury. J'ai eu la chance de tomber sur une équipe incroyable, ultra dynamique et compétente. La mise en prod a été annulée pour un contretemps administratif, frustrant, mais on s'est battus jusqu'au bout. La suite s'annonce tout aussi stimulante avec de vrais projets clients.
            </p>
          </div>
        </div>
      </AboutCard>

      <AboutCard number="05" title="Objectifs & Perspectives" className="md:col-span-2" defaultOpen>
        <div className="space-y-6">
          <ul className="space-y-4 text-xl">
            <li className="flex gap-3 items-start">
              <span className="badge badge-accent badge-outline mt-1 shrink-0 whitespace-nowrap">Court terme</span>
              <span>Finaliser mon cursus CDPI et valider mon titre RNCP en exploitant à fond les projets réels avec de vrais clients.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="badge badge-accent badge-outline mt-1 shrink-0 whitespace-nowrap">Moyen terme</span>
              <span>Poursuivre sur un Bachelor 3 et enchaîner sur mes premières grosses expériences en tant que développeur web complet (Dev + UX/UI).</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="badge badge-accent badge-outline mt-1 shrink-0 whitespace-nowrap">Long terme</span>
              <span>Pousser jusqu'au Master avec une spécialisation <strong>DevOps</strong> si mon attrait se confirme. L'infrastructure, le déploiement et l'architecture système font de plus en plus écho à mon profil de bidouilleur.</span>
            </li>
          </ul>

          <p className="text-xl italic border-l-4 border-accent pl-4 text-accent">
            J'ai le vent en poupe et je me laisse porter par les flots en saisissant chaque opportunité qui s'offre à moi. Nous sommes en juin 2026, et pour la première fois de ma vie professionnelle, je peux le dire : je me sens pleinement épanoui, valorisé et surtout, enfin à ma place.
          </p>
        </div>
      </AboutCard>

    </div>
  </main>
)

export default About
