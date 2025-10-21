import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './Siniestro.scss';

// Importar la imagen correctamente
import vidamaxImage from '../../assets/images/vidamax-image.png';

// Placeholder para la imagen de familia - se usará como fallback si la imagen no carga
const familiaPlaceholder = 'https://via.placeholder.com/500x400/CFE7C5/006341?text=Familia+Sonriendo+Junta';

const Siniestro: React.FC = () => {
  const [tipoSiniestro, setTipoSiniestro] = useState<'fallecimiento' | 'funerario'>('fallecimiento');
  const [imgSrc, setImgSrc] = useState<string>(vidamaxImage);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageError = () => {
    if (!hasError) {
      setImgSrc(familiaPlaceholder);
      setHasError(true);
    }
  };

  const pasosFallecimiento = [
    {
      paso: 1,
      titulo: 'El beneficiario',
      descripcion: 'acude a la sucursal Elektra o Banco Azteca más cercana y reportar el fallecimiento del Asegurado'
    },
    {
      paso: 2,
      titulo: 'El ejecutivo',
      descripcion: 'registra el siniestro en el portal de Siniestros de Seguros Azteca'
    },
    {
      paso: 3,
      titulo: 'El ejecutivo',
      descripcion: 'imprime el check list de los documentos así como el formato de declaración y los entrega al beneficiario'
    },
    {
      paso: 4,
      titulo: 'El beneficiario',
      descripcion: 'reúne todos los documentos y acude a la sucursal para entregarlos'
    },
    {
      paso: 5,
      titulo: 'El ejecutivo',
      descripcion: 'recibe, revisa, registra y envía los documentos a Seguros Azteca'
    },
    {
      paso: 6,
      titulo: 'Seguros Azteca',
      descripcion: 'recibe los documentos y emite dictamen'
    },
    {
      paso: 7,
      titulo: 'Seguros Azteca',
      descripcion: 'en caso de ser procedente se indemniza al beneficiario y en caso contrario se entregan las cartas de rechazo o se solicita documentación faltante'
    }
  ];

  const pasosFunerario = [
    {
      paso: 1,
      titulo: 'El solicitante',
      descripcion: 'llama a la línea de Seguros Azteca al 1720 9854'
    },
    {
      paso: 2,
      titulo: 'El ejecutivo',
      descripcion: 'valida que la póliza siga vigente'
    },
    {
      paso: 3,
      titulo: 'El ejecutivo',
      descripcion: 'solicita los siguientes datos al solicitante: Nombre completo del finado, Número de póliza, Nombre del solicitante, Teléfonos de contacto del solicitante'
    },
    {
      paso: 4,
      titulo: 'El ejecutivo',
      descripcion: 'transfiere la llamada al prestador del Servicio Funerario'
    },
    {
      paso: 5,
      titulo: 'Inicia Servicio funerario',
      descripcion: ''
    },
    {
      paso: 6,
      titulo: 'El solicitante',
      descripcion: 'deberá presentar la siguiente documentación a la funeraria: Certificado de defunción, Identificación Oficial del Finado, Se le entregará un "acuse de recibo" de documentos impreso'
    }
  ];

  const documentosFallecimiento = [
    'Formato de reclamación (Solicitud de Indemnización lllenado) Se entrega enencial',
    'Acta de defunción del asegurado Original',
    'Certificado de defunción expedido por la Secretaría de Salud Original',
    'INE del asegurado por ambos lados física',
    'Acta de matrimonio Original',
    'Acta de nacimiento del asegurado Original',
    'Actas de nacimiento de los beneficiarios Original',
    'INE de beneficiario por ambos lados legible Copia',
    'Comprobante de domicilio del beneficiario aceptado (No mayor a 3 meses Copia',
    'En caso de muerte accidental, se requieren los oficios del ministerio público que contengan: De traslado, identificación de cadáver, dictamen de necropsia y acta judicial de los susesos narcológicos y de alcohol'
  ];

  const pasos = tipoSiniestro === 'fallecimiento' ? pasosFallecimiento : pasosFunerario;

  return (
    <div className="siniestro">
      <div className="siniestro__header">
        <div className="siniestro__text">
          <h1 className="siniestro__title">Pasos a seguir en caso de siniestro</h1>
          <p className="siniestro__subtitle">
            Selecciona el tipo de cobertura o plan que contrataste y consulta lo que debes hacer:
          </p>
        </div>
        <div className="siniestro__image">
          <img
            src={imgSrc}
            alt="Familia sonriendo junta"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
      </div>

      <div className="siniestro__buttons">
        <Button
          variant={tipoSiniestro === 'fallecimiento' ? 'primary' : 'outline'}
          onClick={() => setTipoSiniestro('fallecimiento')}
        >
          Fallecimiento
        </Button>
        <Button
          variant={tipoSiniestro === 'funerario' ? 'primary' : 'outline'}
          onClick={() => setTipoSiniestro('funerario')}
        >
          Servicio funerario
        </Button>
      </div>

      <div className="siniestro__pasos">
        {pasos.map((paso) => (
          <div key={paso.paso} className="siniestro__paso">
            <div className="siniestro__paso-numero">{paso.paso}</div>
            <div className="siniestro__paso-content">
              <strong>{paso.titulo}</strong> {paso.descripcion}
            </div>
          </div>
        ))}
      </div>

      {tipoSiniestro === 'fallecimiento' && (
        <>
          <div className="siniestro__tiempo">
            <strong>Tiempo de respuesta:</strong> 17 días hábiles una vez que los documentos estén completos
          </div>

          <div className="siniestro__documentos">
            <h3 className="siniestro__documentos-title">
              Lista de documentos en caso de fallecimiento
            </h3>
            <ul className="siniestro__documentos-list">
              {documentosFallecimiento.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
            <p className="siniestro__documentos-nota">
              <strong>Importante:</strong> Seguros Azteca se reserva el derecho de solicitar documentación 
              adicional o lista de documentos para evaluar el siniestro.
            </p>
          </div>
        </>
      )}

      {tipoSiniestro === 'funerario' && (
        <div className="siniestro__info">
          <h3>Información del Servicio Funerario</h3>
          <p>
            El servicio funerario está incluido en tu póliza sin costo adicional. 
            Nuestro prestador de servicios te atenderá las 24 horas del día, los 365 días del año.
          </p>
          <p>
            <strong>Línea de atención:</strong> 55 1720 9854
          </p>
        </div>
      )}
    </div>
  );
};

export default Siniestro;