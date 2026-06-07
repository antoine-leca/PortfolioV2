const MockupBrowser = ({ projet }) => (
  <div className="mockup-browser border border-base-300 w-full">
    <div className="mockup-browser-toolbar">
      <a
        href={projet.url ? `https://${projet.url}` : ''}
        className="input border border-base-300 text-sm truncate"
      >
        {projet.url ? `https://${projet.url}` : projet.name}
      </a>
    </div>
    <div className="border-t border-base-300 overflow-hidden">
      <img
        src={projet.imageDesktop}
        alt={`Aperçu desktop du projet ${projet.name}`}
        className="w-full h-fit object-cover object-top"
      />
    </div>
  </div>
);

export default MockupBrowser;
