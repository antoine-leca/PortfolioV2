const MockupPhone = ({ projet }) => (
  <div className="mockup-phone border-base-300 shrink-0 max-w-72 rounded-xl">
    <div className="mockup-phone-display rounded-none">
      <img
        src={projet.imageMobile ?? projet.imageDesktop}
        alt={`Aperçu mobile du projet ${projet.name}`}
        className="w-full h-it object-cover object-top"
        className="h-fit"
      />
    </div>
  </div>
);

export default MockupPhone;
