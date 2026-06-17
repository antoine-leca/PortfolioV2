import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import './root.css'
import './tailwind-daisyui.css'
import soraBoldUrl from './assets/fonts/Sora-Bold.ttf?url'
import soraRegularUrl from './assets/fonts/Sora-Regular.ttf?url'

const linkBold = document.createElement('link')
linkBold.rel = 'preload'
linkBold.as = 'font'
linkBold.type = 'font/ttf'
linkBold.crossOrigin = 'anonymous'
linkBold.href = soraBoldUrl
document.head.prepend(linkBold)

const linkRegular = document.createElement('link')
linkRegular.rel = 'preload'
linkRegular.as = 'font'
linkRegular.type = 'font/ttf'
linkRegular.crossOrigin = 'anonymous'
linkRegular.href = soraRegularUrl
document.head.prepend(linkRegular)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
