const About = () => (
  <main className="min-h-[80vh]">
    <title>À propos — Antoine LECA</title>
    <meta name="description" content="Découvrez le parcours d'Antoine LECA, développeur Full Stack passionné par le Mobile First, Tailwind CSS, DaisyUI et les applications web modernes." />

    <div className='divider divider-start pl-6 py-6 text-2xl main-font-m'>À propos</div>
    <div className="flex justify-center items-center flex-col">
      <p className="w-9/10 text-xl mb-4 p-2 lg:p-0">
        Approche Mobile First tout au long de mes formations et de mes projets.<br /><br />
        Depuis ma découverte de Tailwind en Mars 2024 je l'ai introduit petit à petit dans mes projets
        et je suis aujourd'hui capable d'en faire sans même avoir de fichier css (sauf quelques exceptions ex: animations diverses).<br /><br />
        J'ai ensuite découvert l'extension de Tailwind: DaisyUI, qui améliore tailwind en un semblant de Bootstrap
        en incluant des composants modernes.
      </p>
    </div>
  </main>
)

export default About
