import { frontendBackendIcons, toolsDeployIcons } from '../../data/skills'

const MASK = 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)'

function IconChip({ src, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 mx-10 shrink-0">
      <img src={src} alt={label} className="w-10 h-10 object-contain grayscale opacity-50" width={40} height={40} />
      <span className="text-[11px] main-font-r opacity-40 whitespace-nowrap">{label}</span>
    </div>
  )
}

function MarqueeRow({ icons, reverse = false }) {
  const track = [...icons, ...icons, ...icons, ...icons]
  return (
    <div
      className="overflow-hidden marquee-pause"
      style={{ maskImage: MASK, WebkitMaskImage: MASK }}
      aria-hidden="true"
    >
      <div
        className={`flex ${reverse ? 'marquee-right' : 'marquee-left'}`}
        style={{ width: 'max-content' }}
      >
        {track.map((icon, i) => (
          <IconChip key={i} src={icon.src} label={icon.label} />
        ))}
      </div>
    </div>
  )
}

function SkillsMarquee() {
  return (
    <section className="py-16 flex flex-col gap-8" aria-label="Stack technique">
      <div className="flex flex-col gap-5">
        <MarqueeRow icons={frontendBackendIcons} />
        <MarqueeRow icons={toolsDeployIcons} reverse />
      </div>
    </section>
  )
}

export default SkillsMarquee
