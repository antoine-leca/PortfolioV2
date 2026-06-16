import HeroSection from '../components/home/HeroSection'
import SkillsMarquee from '../components/home/SkillsMarquee'
import { SITE_URL } from '../config/seo'

const PAGE_TITLE = "Antoine LECA — Développeur Full Stack"
const PAGE_DESCRIPTION = "Portfolio d'Antoine LECA, développeur Full Stack. Conception et développement d'applications web modernes — React, Node/Express, Tailwind/DaisyUI"

function Home() {
  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      {/* TODO: Remplacer og-image.jpg par un vrai visuel (bannière nom + titre + fond) avant mise en prod */}
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

      <HeroSection />
      <SkillsMarquee />
    </>
  )
}

export default Home
