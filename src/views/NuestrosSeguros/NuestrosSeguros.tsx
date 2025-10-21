import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SubNavigation from '../../components/SubNavigation/SubNavigation';
import Descripcion from './Descripcion';
import Planes from './Planes';
import Siniestro from './Siniestro';
import Condiciones from './Condiciones';
import './NuestrosSeguros.scss';

// Importar la imagen correctamente
import bannerImage from '../../assets/images/familia-deseguros.webp';

// Placeholder para el banner - se usará como fallback si la imagen no carga
const bannerPlaceholder = 'https://via.placeholder.com/1200x400/006341/FFFFFF?text=Familia+Feliz+Asegurada+con+Vidamax';

const NuestrosSeguros: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Descripción');

  const tabs = ['Descripción', 'Planes', '¿Tienes un siniestro?', 'Condiciones'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Descripción':
        return <Descripcion />;
      case 'Planes':
        return <Planes />;
      case '¿Tienes un siniestro?':
        return <Siniestro />;
      case 'Condiciones':
        return <Condiciones />;
      default:
        return <Descripcion />;
    }
  };

  return (
    <div className="nuestros-seguros">
      <Banner
        title="Nuevo Vidamax"
        subtitle="Protección y tranquilidad para tu familia"
        imageSrc={bannerImage}
        imageAlt="Familia feliz asegurada con Vidamax"
        fallbackSrc={bannerPlaceholder}
      />

      <Breadcrumbs />

      <div className="nuestros-seguros__header">
        <div className="nuestros-seguros__badge">
          <div className="nuestros-seguros__badge-icon"></div>
          <span className="nuestros-seguros__badge-text">Nuevo Vidamax</span>
        </div>
      </div>

      <SubNavigation
        items={tabs}
        activeItem={activeTab}
        onItemClick={setActiveTab}
      />

      <div className="nuestros-seguros__content">
        {renderContent()}
      </div>
    </div>
  );
};

export default NuestrosSeguros;