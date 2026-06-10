import { domain, githubDomain } from '../../data/projets';
import PhosIcon from '../PhosIcon';

const GithubIcon = () => (
  <PhosIcon name="Github" size={24} className="w-4 h-4" aria-hidden="true" weight="fill" />
);

const ProjetInfo = ({ projet }) => {
  const href = projet.link
    ? (projet.link.startsWith('http') ? projet.link : `${domain}${projet.link}`)
    : undefined;

  return (
    <div className="flex flex-col justify-center gap-3 flex-1 min-w-0">
      <h2 className="text-2xl main-font-m">{projet.name}</h2>
      <p className="text-base opacity-80 leading-relaxed">{projet.description}</p>
      <div className="flex flex-wrap gap-2">
        {projet.compétences.map((c, i) => (
          <span key={i} className="badge badge-lg border-none text-white" style={{ backgroundColor: '#0E3530' }}>
            {c}
          </span>
        ))}
      </div>
      {(projet.gitlink || href) && (
        <div className="flex gap-3 mt-1 flex-wrap">
          {projet.gitlink && (
            <a
              href={`${githubDomain}${projet.gitlink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg gap-2"
            >
              <GithubIcon />
              GitHub
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg text-white border-none"
            >
              Voir le projet
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjetInfo;
