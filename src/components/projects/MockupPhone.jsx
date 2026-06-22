const MockupPhone = ({ projet }) => (
  <div className="mockup-phone border-base-300 shrink-0 max-w-72 h-fit rounded-xl">
    <div className="mockup-phone-display rounded-none">
      <img
        src={projet.imageMobile ?? projet.imageDesktop}
        alt={`Aperçu mobile du projet ${projet.name}`}
        className="w-full h-fit object-cover object-top"
        width={430}
        height={932}
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
);

export default MockupPhone;
