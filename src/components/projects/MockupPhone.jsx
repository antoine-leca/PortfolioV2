const MockupPhone = ({ projet }) => (
  <div className="mockup-phone border-[#0E3530] shrink-0 max-w-72 rounded-xl">
    <div className="mockup-phone-display rounded-none">
      <img
        src={projet.imageMobile ?? projet.imageDesktop}
        alt={`Aperçu mobile du projet ${projet.name}`}
        className="w-fit h-full object-cover object-top"
      />
    </div>
  </div>
);

export default MockupPhone;
