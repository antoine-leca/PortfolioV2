const About = () => (
  <main className="min-h-[80vh]">
    <title>À propos — Antoine LECA</title>
    <meta name="description" content="Découvrez le parcours d'Antoine LECA, développeur Full Stack passionné par le Mobile First, Tailwind CSS, DaisyUI et les applications web modernes." />

    <div className='divider divider-start pl-6 py-6 text-2xl main-font-m'>À propos</div>
    <div 
      className="flex justify-center items-center flex-col gap-10 pb-12 hyphens-auto"
      style={{textJustify: "inter-word"}}
    >

      <div className="w-9/10 p-2 lg:p-0">
        <p className="text-xl font-semibold uppercase tracking-widest mb-3">Les origines</p>
        <p className="text-xl mb-4">
          Aussi loin que je me souvienne, j'ai toujours baigné dans la culture tech. Tout a commencé vers mes 5-6 ans, à regarder par-dessus l'épaule de ma grand-mère qui ponçait des jeux de stratégie comme La Reine du Nil ou Maître de l'Olympe. Depuis, j'ai toujours grandi un écran ou une console pas très loin. À l'adolescence, c'est devenu de la pure débrouillardise : dès qu'une machine avait un problème, je cherchais la solution. Ça allait de la simple mise à jour de drivers ou bidouiller le BIOS, jusqu'à changer la pâte thermique de ma PS4. J'étais le dépanneur officiel de la famille, et j'adorais ça : chercher la panne et résoudre le problème, que ce soit du hardware ou du software.
        </p>
        <p className="text-xl">
          C'est cette même logique qui m'a poussé vers la mécanique. De base, je voulais bosser sur les bateaux, mais les places étaient pleines alors je me suis rabattu sur la mécanique auto. Franchement, j'ai bien aimé le cursus. Suivre minutieusement un schéma de montage, comprendre comment les pièces s'imbriquent, être organisé… Au final, c'est exactement ce que je faisais déjà en mode perso avec l'électronique. J'ai décroché mon Bac Pro en 2019, mais après mes premières expériences en garage, le milieu (très lourd et irrespectueux) m'a vite rebuté. Je savais que ma place était ailleurs.
        </p>
      </div>

      <div className="w-9/10 p-2 lg:p-0">
        <p className="text-xl font-semibold uppercase tracking-widest mb-3">Le déclic</p>
        <p className="text-xl mb-4">
          Il m'a fallu un peu de temps pour trouver le bon cadre. Pendant quelques années, j'ai essayé plusieurs fois par an d'apprendre le dev en autodidacte. Mais je voulais tellement bien faire et tout comprendre que je finissais toujours par me noyer sous la masse d'infos et de langages possibles. Le vrai déclic est arrivé grâce à ma mère, qui m'a parlé d'un stage de découverte des métiers du numérique avec France Travail. On a testé plein de domaines pendant quelques semaines (Dev, Design UX/UI, Marketing, 3D…).
        </p>
        <p className="text-xl">
          Et là, ça a matché direct avec le dev web. Retrouver cette logique pure, construire un site de mes mains et résoudre des bugs, c'était exactement la suite logique de mon parcours : bidouilleur - mécanique - dev. Durant ce stage, j'ai aussi découvert l'UX/UI, et j'ai tout de suite vu à quel point l'accessibilité et l'expérience utilisateur étaient indissociables d'un bon code. Sur les conseils des formateurs, je me suis donc lancé à fond dans le dev web, avec l'ambition d'intégrer aussi l'UX/UI à mes compétences pour proposer des sites aussi propres à l'intérieur qu'à l'extérieur.
        </p>
      </div>

      <div className="w-9/10 p-2 lg:p-0">
        <p className="text-xl font-semibold uppercase tracking-widest mb-3">Ma façon de travailler</p>
        <p className="text-xl mb-4">
          C'est là que j'ai compris que le dev était devenu une vraie passion. Quand je suis sur un projet, je peux m'enfermer dans ma bulle pendant des heures, au travail comme chez moi, focus sur le fameux "je règle ce bug/fais cette feature et j'arrête". J'ai découvert que j'avais une vraie facilité à intégrer les concepts grâce à ma mémoire visuelle et auditive. Combiné à la rigueur que j'ai acquise, ça me permet de comprendre vite et de coder proprement.
        </p>
        <p className="text-xl">
          Et par rapport à l'IA ? On ne peut pas y échapper. Même si j'aime écrire mon code moi-même, j'ai une méthodologie stricte : je cherche toujours l'erreur et la solution par mes propres moyens avec les outils à disposition (console, doc, recherches...). Ce n'est qu'après avoir retourné le problème dans tous les sens que je vais lui demander une piste. Et je l'utilise le plus souvent en mode "Ask" : ça me permet de garder le contrôle sur ce qu'elle me donne et d'éviter de sombrer dans une montagne de modifications à accepter. C'est ce qui me permet, même ici, de rester rigoureusement dans un fonctionnement étape par étape, avec des feedbacks constants. À mon niveau de développeur en formation, c'est en tout cas la méthode qui me réussit le mieux pour apprendre à coder proprement avec l'IA.
        </p>
      </div>

      <div className="w-9/10 p-2 lg:p-0">
        <p className="text-xl font-semibold uppercase tracking-widest mb-3">La Plateforme_</p>
        <p className="text-xl mb-4">
          Après une journée portes ouvertes, j'ai sauté le pas : je me suis inscrit en Bachelor à La Plateforme_ pour la promo 2024. Après un premier trimestre de tronc commun et un Hackathon, le choix de ma spécialisation était évident : le Web.
        </p>
        <p className="text-xl mb-4">
          Au début, c'était difficile, surtout avec PHP. Mais je me suis accroché et les difficultés ont vite disparu. Quand on est passés sur JavaScript, ça a été le déclic. À partir de là, l'effet "snowball" a commencé : j'ai enchaîné sur React, Node ou Docker en captant les notions de plus en plus vite. Le format une semaine d'excercices - une semaine en projet de groupe - soutenance devant un jury était très intéressant.
        </p>
        <p className="text-xl">
          En juin 2025, après mon Bachelor, j'ai choisi de bifurquer vers un cursus CDPI de 16 mois. Au départ, c'était pour rebondir après n'avoir pas trouvé l'alternance idéale, mais ce format a été une révélation. En plus de consolider mes bases, cette formation m'a offert une liberté folle : dès que les objectifs étaient atteints, je pouvais bosser sur mes projets perso - comme la refonte de Movela, la configuration de mon propre VPS pour héberger mes projets, ou l'apprentissage de nouveaux langages.
        </p>

        <p className="text-xl mb-4">
          Le vrai plus de ce cursus est l'immersion concrète via des périodes de mise à disposition en entreprise. On est tout de suite passés aux choses sérieuses. Après un premier projet de groupe pour jauger nos compétences, on a attaqué le gros morceau : MarsAI, un site de festival de films générés par IA, en compétition avec les promos CDPI d'autres villes. Du cahier des charges au rendu final, en passant par le maquettage, chaque étape était un défi. Je suis tombé sur une équipe incroyable, ultra dynamique et compétente. Résultat : une note de 22/25 décernée par le jury ! On devait même pousser le projet jusqu'à la mise en production. Malheureusement, un contretemps administratif indépendant de notre volonté a annulé la mise en prod. C'était hyper frustrant, un vrai sentiment d'inachevé, mais on s'est battus jusqu'au bout et on est restés pros. Aujourd'hui, la suite de la formation s'annonce tout aussi stimulante avec de nouveaux projets pour de vrais clients qui arrivent grâce à une super initiative de notre nouveau formateur.
        </p>
      </div>
      <div className="w-9/10 p-2 lg:p-0">
        <p className="text-xl font-semibold uppercase tracking-widest mb-4">Objectifs & Perspectives</p>
        
        <div className="space-y-4 text-xl mb-8">
          <p>
            <strong>À court terme :</strong> Finaliser mon cursus actuel pour valider mon titre RNCP en exploitant à fond les projets réels avec de vrais clients, tout en continuant de développer mes projets persos.
          </p>
          <p>
            <strong>À moyen terme :</strong> Poursuivre sur un Bachelor 3 et enchaîner sur mes premières grosses expériences en tant que développeur web complet (Dev + UX/UI).
          </p>
          <p>
            <strong>À long terme :</strong> Pousser jusqu'au Master avec une spécialisation vers le <strong>DevOps</strong> si mon attrait pour celui-ci se confirme au fil des mes cursus. L'infrastructure, le déploiement et l'architecture système sont des domaines qui font de plus en plus écho à mon profil initial de bidouilleur.
          </p>
        </div>

        <p className="text-xl italic border-l-4 border-accent pl-4 text-accent">
          J'ai le vent en poupe et je me laisse porter par les flots en saisissant chaque opportunité qui s'offre à moi. Nous sommes en juin 2026, et pour la première fois de ma vie professionnelle, je peux le dire : je me sens pleinement épanoui, valorisé et surtout, enfin à ma place.
        </p>
      </div>
    </div>
  </main>
)

export default About
