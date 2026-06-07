import { useState } from 'react';
import MockupBrowser from './MockupBrowser';
import MockupPhone from './MockupPhone';
import ProjetInfo from './ProjetInfo';

const ProjetRow = ({ projet, index }) => {
  const [mobileView, setMobileView] = useState('phone');
  const isEven = index % 2 === 0;
  const showMobile  = projet.ifMobile !== false;
  const showDesktop = !!projet.imageDesktop;

  const info = <ProjetInfo projet={projet} />;

  if (!showDesktop) {
    return (
      <div className="py-12 border-b border-base-300 last:border-none">
        {info}
      </div>
    );
  }

  const stack = (
    <div className="flex flex-col gap-4 flex-1">
      <MockupBrowser projet={projet} />
      {info}
    </div>
  );

  if (!showMobile) {
    return (
      <div className="flex flex-col lg:flex-row items-stretch gap-6 py-12 border-b border-base-300 last:border-none">
        {stack}
      </div>
    );
  }

  const phone = (
    <div className={`flex shrink-0 ${isEven ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'}`}>
      <MockupPhone projet={projet} />
    </div>
  );

  return (
    <div className="py-12 border-b border-base-300 last:border-none">
      {/* Toggle visible uniquement sur mobile */}
      <div className="flex lg:hidden justify-center mb-6">
        <div className="join">
          <button
            className={`join-item btn btn-sm ${mobileView === 'phone' ? 'btn-active' : 'btn-ghost'}`}
            onClick={() => setMobileView('phone')}
          >
            Mobile
          </button>
          <button
            className={`join-item btn btn-sm ${mobileView === 'desktop' ? 'btn-active' : 'btn-ghost'}`}
            onClick={() => setMobileView('desktop')}
          >
            Desktop
          </button>
        </div>
      </div>

      {/* Vue mobile : un seul mockup à la fois */}
      <div key={mobileView} className="flex lg:hidden flex-col gap-6 fade-in">
        {mobileView === 'phone' ? <div className="flex justify-center">{phone}</div> : stack}
        {mobileView === 'phone' && info}
      </div>

      {/* Vue desktop : les deux côte à côte */}
      <div className="hidden lg:flex items-stretch gap-6">
        {isEven ? <>{phone}{stack}</> : <>{stack}{phone}</>}
      </div>
    </div>
  );
};

export default ProjetRow;
