import { useState } from 'react';
import PhosIcon from './PhosIcon';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="drawer drawer-end">
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
                    <a href="/" className="mx-2 text-xl main-font-m flex-1">Antoine LECA</a>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                            <li><a className='text-xl main-font-m' href='/'>Accueil</a></li>
                            <li><a className='text-xl main-font-m' href='/projects'>Projets</a></li>
                            <li><a className='text-xl main-font-m text-center' href='/contact'>Contactez-moi</a></li>
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden z-50">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
                <ul className="menu bg-base-200 min-h-full w-1/2 pt-16 p-4">
                    {/* Sidebar content here */}
                    <li><a className='text-xl main-font-m text-center mb-2' href='/'>Accueil</a></li>
                    <li><a className='text-xl main-font-m text-center mb-2' href='/projects'>Projets</a></li>
                    <li><a className='text-xl main-font-m text-center' href='/contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;