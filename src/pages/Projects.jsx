import ProjetRow from '../components/projects/ProjetRow';
import projets from '../data/projets';
import { SITE_URL } from '../config/seo';

const PAGE_TITLE = "Projets — Antoine LECA"
const PAGE_DESCRIPTION = "Projets web d'Antoine LECA : applications mobiles et desktop développées avec React, Vue, Node.js, PHP, Tailwind CSS et DaisyUI."

const Projets = () => (
  <div>
    <main className="min-h-[80vh]">
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <link rel="canonical" href={`${SITE_URL}/projects`} />
      <meta property="og:url" content={`${SITE_URL}/projects`} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      {/* TODO: Remplacer og-image.jpg par un vrai visuel (bannière nom + titre + fond) avant mise en prod */}
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

      <h1 className='divider divider-start pl-6 py-6 text-2xl main-font-m'>Projets</h1>
      <section className="px-6 md:px-12 max-w-6xl mx-auto">
        {(() => {
          let imageRowCounter = 0;
          return projets.map((projet, idx) => {
            const hasFullLayout = !!projet.imageDesktop && projet.ifMobile !== false;
            const imageIndex = hasFullLayout ? imageRowCounter++ : null;
            return <ProjetRow key={idx} projet={projet} imageIndex={imageIndex} />;
          });
        })()}
      </section>
    </main>
  </div>
);

export default Projets;
