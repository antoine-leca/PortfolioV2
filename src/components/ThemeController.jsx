import { useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import PhosIcon from './PhosIcon';

const SPECIAL_THEMES = [
  { value: 'synthwave', label: 'Synthwave' },
  { value: 'cyberpunk',  label: 'Cyberpunk' },
  { value: 'dracula',    label: 'Dracula' },
  { value: 'halloween',  label: 'Halloween' },
  { value: 'forest',     label: 'Forest' },
  { value: 'aqua',       label: 'Aqua' },
  { value: 'retro',      label: 'Retro' },
  { value: 'luxury',     label: 'Luxury' },
  { value: 'coffee',     label: 'Coffee' },
  { value: 'sunset',     label: 'Sunset' },
  { value: 'nord',       label: 'Nord' },
  { value: 'dim',        label: 'Dim' },
  { value: 'cupcake',    label: 'Cupcake' },
  { value: 'valentine',  label: 'Valentine' },
  { value: 'lemonade',   label: 'Lemonade' },
]

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
      <label className="swap swap-rotate btn btn-ghost btn-sm btn-circle">
        <input type="checkbox" checked={!isLight} onChange={toggleDark} />

        {/* soleil — thème clair */}
        <PhosIcon className="swap-off h-5 w-5" name="Sun" weight="bold"/>

        {/* lune — thème sombre */}
        <PhosIcon className="swap-on h-5 w-5" name="Moon" weight="bold"/>
      </label>

      {/* Dropdown thèmes spéciaux — icône palette Phosphor */}
      <details ref={detailsRef} className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-sm btn-circle list-none">
          <PhosIcon className="h-5 w-5" name="Themes" weight="fill"/>
        </summary>

        <ul className="dropdown-content menu bg-base-200 rounded-box z-50 shadow-lg w-44 p-2 mt-1 max-h-72 overflow-y-auto flex-col flex-nowrap">
          <li>
            <button
              className={`main-font-r text-sm ${theme === 'light' ? 'active' : ''}`}
              onClick={() => handleSpecial('light')}
            >
              Light
            </button>
          </li>
          <li>
            <button
              className={`main-font-r text-sm ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => handleSpecial('dark')}
            >
              Dark
            </button>
          </li>
          <li className="menu-title text-xs opacity-40 pt-2">Autres thèmes</li>
          {SPECIAL_THEMES.map(({ value, label }) => (
            <li key={value}>
              <button
                className={`main-font-r text-sm ${theme === value ? 'active' : ''}`}
                onClick={() => handleSpecial(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </details>

    </div>
  )
}

export default ThemeController
