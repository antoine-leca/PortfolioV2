import React from 'react';
import PhosIcon from './PhosIcon';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a href="/" className="link link-hover">Accueil</a>
                <a href="/projects" className="link link-hover">Projets</a>
                <a href="/about" className="link link-hover">À propos</a>
                <a href="/contact" className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                <a
                    href="/contact" 
                    rel="noopener noreferrer"
                >
                    <PhosIcon name="Envelope" size={24} weight="fill" />
                </a>
                <a 
                    href="https://github.com/antoine-leca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <PhosIcon name="Github" size={24} weight="fill" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/antoine-leca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <PhosIcon name="Linkedin" size={24} weight="fill" />
                </a>
                </div>
            </nav>
            <aside>
                <p>Antoine LECA - {new Date().getFullYear()}</p>
            </aside>
        </footer>
    );
};

export default Footer;