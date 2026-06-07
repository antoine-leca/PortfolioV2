import PhosIcon from '../PhosIcon';

const links = [
    {
        href: 'mailto:aleca.dev@gmail.com',
        icon: 'EnvelopeSimple',
        label: 'Email',
        value: 'aleca.dev@gmail.com',
    },
    {
        href: 'https://github.com/antoine-leca',
        icon: 'GithubLogo',
        label: 'GitHub',
        value: 'antoine-leca',
    },
    {
        href: 'https://linkedin.com/in/antoine-leca',
        icon: 'LinkedinLogo',
        label: 'LinkedIn',
        value: 'antoine-leca',
    },
];

const ContactInfos = () => (
    <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body gap-6">
                <h2 className="card-title title-font-sm text-xl">Me retrouver</h2>
                {links.map(({ href, icon, label, value }) => (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 group">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-colors">
                            <PhosIcon name={icon} size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-base-content/50 main-font-r">{label}</p>
                            <p className="main-font-m text-sm">{value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default ContactInfos;
