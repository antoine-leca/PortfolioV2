import { useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) ?? 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // toggle between light ↔ dark (quitte le thème spécial si actif)
  const toggleDark = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const isLight = theme === 'light'

  return { theme, setTheme, isLight, toggleDark }
}
