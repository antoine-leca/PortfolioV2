import ProjetRow from '../components/projects/ProjetRow';
import projets from '../data/projets';

const Projets = () => (
  <div>
    <main className="min-h-[80vh]">
      <title>Projets — Antoine LECA</title>
      <meta name="description" content="Projets web d'Antoine LECA : applications mobiles et desktop développées avec React, Vue, Node.js, PHP, Tailwind CSS et DaisyUI." />

      <div className='divider divider-start pl-6 py-6 text-2xl main-font-m'>Projets</div>
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
