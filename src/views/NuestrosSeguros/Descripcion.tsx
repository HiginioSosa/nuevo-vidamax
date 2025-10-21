import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import './Descripcion.scss';

// Importar la imagen correctamente
import familiaImage from '../../assets/images/vidamax-image.png';

// Placeholder para la imagen de familia - se usará como fallback si la imagen no carga
const familiaPlaceholder = 'https://via.placeholder.com/500x400/CFE7C5/006341?text=Familia+Sonriendo+Junta';

const Descripcion: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(familiaImage);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageError = () => {
    if (!hasError) {
      setImgSrc(familiaPlaceholder);
      setHasError(true);
    }
  };

  const faqItems = [
    {
      question: '¿Qué cubre el seguro?',
      answer: [
        'Beneficio económico para tu familia de acuerdo al plan elegido y a la edad que tengas al momento de contratarlo, el cual se incrementará en caso de fallecimiento accidental',
        'Servicio funerario* sin costo adicional que cubre:',
        '1. Asesoría jurídica testamentaria vía telefónica',
        '2. Gestión de trámites por el fallecimiento',
        '3. Recolección del cuerpo',
        '4. Arreglo estético del cuerpo',
        '5. Sala de velación',
        '6. Inhumación (Incluye: ataúd metálico y traslado del cuerpo en carroza)',
        'Liquida el adeudo de tu Crédito con Banco Azteca'
      ]
    },
    {
      question: '¿Cómo puedes pagarlo?',
      answer: 'Dependiendo de la periodicidad del crédito en cualquier sucursal de Banco Azteca o Elektra al momento de adquirir el crédito (préstamo o bien de consumo)'
    },
    {
      question: '¿Cuánto dura el seguro?',
      answer: 'Misma del crédito solicitado (préstamo o un bien de consumo)'
    },
    {
      question: '¿Qué necesitas para contratar?',
      answer: [
        'Tener entre 18 y 75 años',
        'Contar con un Préstamo Personal o Crédito al Consumo'
      ]
    },
    {
      question: '¿Qué no cubre el seguro?',
      answer: 'Suicidio (revisar todas las exclusiones en las condiciones generales)'
    }
  ];

  return (
    <div className="descripcion">
      <div className="descripcion__header">
        <div className="descripcion__text">
          <h1 className="descripcion__title">Cuidamos a tu familia</h1>
          <p className="descripcion__subtitle">
            Apoyo económico para tu familia en caso de fallecimiento natural o accidental.
          </p>
        </div>
        <div className="descripcion__image">
          <img
            src={imgSrc}
            alt="Familia sonriendo junta"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
      </div>

      <div className="descripcion__faq">
        <Accordion items={faqItems} />
      </div>

      <div className="descripcion__actions">
        <Button variant="outline">Regresar</Button>
      </div>
    </div>
  );
};

export default Descripcion;