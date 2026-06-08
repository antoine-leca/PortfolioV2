import HeroSection from '../components/home/HeroSection'
import SkillsMarquee from '../components/home/SkillsMarquee'

function Home() {
  return (
    <>
      <title>Antoine LECA - Développeur Full Stack</title>
      <meta name="description" content="Portfolio d'Antoine LECA, développeur Full Stack. Conception et développement d'applications web modernes — React, Node/Express, Tailwind/DaisyUI" />
      
      <HeroSection />
      <SkillsMarquee />
    </>
  )
}

export default Home
