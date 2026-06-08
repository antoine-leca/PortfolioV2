import { Link } from 'react-router'
import picture from '../../assets/img/picture.webp'

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-7 px-6 pt-20 text-center">

      <div
        className="rounded-full p-0.75 shrink-0"
        style={{ background: 'var(--bg-main)' }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-base-100">
          <img
            src={picture}
            alt="Antoine LECA"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 max-w-2xl fade-in">
        <span className="text-xs tracking-[0.3em] uppercase opacity-40 main-font-r">
          Développeur Full Stack
        </span>
        <h1 className="text-5xl md:text-7xl title-font-b leading-none tracking-tight">
          Antoine LECA
        </h1>
        <p className="text-base md:text-lg opacity-55 main-font-r max-w-md leading-relaxed">
          Je conçois et développe des applications web de A à Z —
          du backend robuste jusqu'à l'interface soignée.
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs main-font-m opacity-60">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block" />
        Disponible
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          to="/projects"
          className="btn main-font-m text-white border-none"
          style={{ backgroundColor: 'var(--bg-main)' }}
        >
          Mes projets
        </Link>
        <Link to="/contact" className="btn btn-ghost main-font-m">
          Me contacter
        </Link>
      </div>

      <div className="flex flex-col items-center animate-bounce pt-6" aria-hidden="true">
        <p className="text-center text-[11px] tracking-[0.3em] uppercase opacity-40 main-font-r">
          Stack technique
        </p>
        <div className="mt-1 opacity-40">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
