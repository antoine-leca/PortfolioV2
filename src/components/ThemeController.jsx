import { useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import PhosIcon from './PhosIcon';

const SPECIAL_THEMES = [
  { value: 'cupcake',      label: 'Cupcake' },
  { value: 'bumblebee',    label: 'Bumblebee' },
  { value: 'emerald',      label: 'Emerald' },
  { value: 'corporate',    label: 'Corporate' },
  { value: 'retro',        label: 'Retro' },
  { value: 'cyberpunk',    label: 'Cyberpunk' },
  { value: 'valentine',    label: 'Valentine' },
  { value: 'halloween',    label: 'Halloween' },
  { value: 'garden',       label: 'Garden' },
  { value: 'forest',       label: 'Forest' },
  { value: 'aqua',         label: 'Aqua' },
  { value: 'lofi',         label: 'Lo-Fi' },
  { value: 'pastel',       label: 'Pastel' },
  { value: 'fantasy',      label: 'Fantasy' },
  { value: 'wireframe',    label: 'Wireframe' },
  { value: 'black',        label: 'Black' },
  { value: 'luxury',       label: 'Luxury' },
  { value: 'dracula',      label: 'Dracula' },
  { value: 'cmyk',         label: 'CMYK' },
  { value: 'autumn',       label: 'Autumn' },
  { value: 'business',     label: 'Business' },
  { value: 'acid',         label: 'Acid' },
  { value: 'lemonade',     label: 'Lemonade' },
  { value: 'night',        label: 'Night' },
  { value: 'coffee',       label: 'Coffee' },
  { value: 'winter',       label: 'Winter' },
  { value: 'dim',          label: 'Dim' },
  { value: 'nord',         label: 'Nord' },
  { value: 'sunset',       label: 'Sunset' },
  { value: 'synthwave',    label: 'Synthwave' },
  { value: 'caramellatte', label: 'Caramellatte' },
  { value: 'abyss',        label: 'Abyss' },
  { value: 'silk',         label: 'Silk' },
]

const CheckIcon = () => (
  <PhosIcon name="Check" className="h-3 w-3 text-accent shrink-0" weight="fill" />
)

function ThemeItem({ value, label, isActive, onClick }) {
  return (
    <button className="flex items-center gap-3 px-2 w-full main-font-r text-sm rounded-lg hover:bg-base-300 transition-colors py-1.5" onClick={onClick}>
      <div data-theme={value} className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
        <div className="bg-base-content size-1 rounded-full" />
        <div className="bg-primary size-1 rounded-full" />
        <div className="bg-secondary size-1 rounded-full" />
        <div className="bg-accent size-1 rounded-full" />
      </div>
      <span className="flex-1 text-left truncate">{label}</span>
      <span className={isActive ? 'visible' : 'invisible'}><CheckIcon /></span>
    </button>
  )
}

function ThemeController() {
  const { theme, setTheme, isLight, toggleDark } = useTheme()
  const detailsRef = useRef(null)

  const handleSpecial = (value) => {
    setTheme(value)
    detailsRef.current?.removeAttribute('open')
  }

  return (
    <div className="flex items-center gap-1">

      {/* Toggle light / dark */}
      <label 
        className="swap swap-rotate btn btn-ghost btn-sm btn-circle"
        aria-label={isLight ? "Activer le thème sombre" : "Activer le thème clair"}
      >
        <input type="checkbox" checked={!isLight} onChange={toggleDark} />

        {/* soleil — thème clair */}
        <PhosIcon className="swap-off h-5 w-5" name="Sun" weight="bold"/>

        {/* lune — thème sombre */}
        <PhosIcon className="swap-on h-5 w-5" name="Moon" weight="bold"/>
      </label>

      {/* Dropdown thèmes spéciaux — icône palette Phosphor */}
      <details ref={detailsRef} className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-sm list-none gap-1">
          <PhosIcon className="h-5 w-5" name="Themes" weight="fill"/>
          <span className="text-sm main-font-r hidden md:block">Themes</span>
        </summary>

        <ul className="dropdown-content bg-base-200 rounded-box z-50 shadow-lg w-52 p-2 mt-1 max-h-80 overflow-y-auto flex flex-col gap-0.5">
          <li><ThemeItem value="light" label="Light" isActive={theme === 'light'} onClick={() => handleSpecial('light')} /></li>
          <li><ThemeItem value="dark"  label="Dark"  isActive={theme === 'dark'}  onClick={() => handleSpecial('dark')} /></li>
          <li className="text-[10px] uppercase opacity-40 main-font-r px-2 pt-2 pb-0.5 tracking-widest">Autres thèmes</li>
          {SPECIAL_THEMES.map(({ value, label }) => (
            <li key={value}>
              <ThemeItem value={value} label={label} isActive={theme === value} onClick={() => handleSpecial(value)} />
            </li>
          ))}
        </ul>
      </details>

    </div>
  )
}

export default ThemeController
