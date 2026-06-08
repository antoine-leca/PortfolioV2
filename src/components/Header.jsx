import { useState } from 'react';
import PhosIcon from './PhosIcon';
import ThemeController from './ThemeController';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="drawer drawer-end sticky top-0 z-40" role="banner">
            <input 
                id="my-drawer-2" 
                type="checkbox" 
                className="drawer-toggle" 
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
            />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <a href="/" className="mx-2 flex-1 px-2 text-3xl main-font-m whitespace-nowrap" aria-label="Antoine LECA — Accueil">Antoine LECA</a>
                    {/* Desktop : liens + contrôleur de thème */}
                    <nav className="hidden flex-none lg:flex items-center gap-2" aria-label="Navigation principale">
                        <ul className="menu menu-horizontal">
                            <li><a className='text-xl main-font-m' href='/'>Accueil</a></li>
                            <li><a className='text-xl main-font-m' href='/about'>À propos</a></li>
                            <li><a className='text-xl main-font-m' href='/projects'>Projets</a></li>
                            <li><a className='text-xl main-font-m text-center' href='/contact'>Contactez-moi</a></li>
                        </ul>
                        <ThemeController />
                    </nav>

                    {/* Mobile : contrôleur de thème + burger */}
                    <div className="flex-none lg:hidden flex items-center gap-1 z-50">
                        <ThemeController />
                        <label htmlFor="my-drawer-2" aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} className="btn btn-square btn-ghost">
                            <div className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                                <PhosIcon name={isOpen ? "Cross" : "List"} size={24} />
                            </div>
                        </label>
                    </div>
                </div>
                {/* Page content here, à ajouter si problèmes d'affichage notamment du shadow hors de la sidebar */}
                {/* Content */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-1/2 pt-16 p-4" role="navigation" aria-label="Navigation mobile">
                    {/* Sidebar content here */}
                    <li><a className='text-xl main-font-m text-center mb-2' href='/'>Accueil</a></li>
                    <li><a className='text-xl main-font-m text-center mb-2' href='/about'>À propos</a></li>
                    <li><a className='text-xl main-font-m text-center mb-2' href='/projects'>Projets</a></li>
                    <li><a className='text-xl main-font-m text-center' href='/contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;