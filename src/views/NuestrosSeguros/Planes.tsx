import React from 'react';
import './Planes.scss';

const Planes: React.FC = () => {
  const planes = [
    {
      nombre: 'Plan Básico',
      precio: 'Desde $150/mes',
      cobertura: '$50,000',
      beneficios: [
        'Apoyo económico para tu familia',
        'Servicio funerario incluido',
        'Pago según tu crédito',
        'Sin examen médico'
      ]
    },
    {
      nombre: 'Plan Plus',
      precio: 'Desde $250/mes',
      cobertura: '$100,000',
      beneficios: [
        'Mayor apoyo económico',
        'Servicio funerario premium',
        'Doble indemnización por accidente',
        'Asesoría legal incluida',
        'Sin examen médico'
      ],
      destacado: true
    },
    {
      nombre: 'Plan Premium',
      precio: 'Desde $400/mes',
      cobertura: '$200,000',
      beneficios: [
        'Máxima protección familiar',
        'Servicio funerario de lujo',
        'Triple indemnización por accidente',
        'Asesoría legal y fiscal',
        'Cobertura internacional',
        'Sin examen médico'
      ]
    }
  ];

  return (
    <div className="planes">
      <div className="planes__header">
        <h1 className="planes__title">Planes Nuevo Vidamax</h1>
        <p className="planes__subtitle">
          Elige el plan que mejor se adapte a las necesidades de tu familia
        </p>
      </div>

      <div className="planes__grid">
        {planes.map((plan, index) => (
          <div 
            key={index} 
            className={`planes__card ${plan.destacado ? 'planes__card--destacado' : ''}`}
          >
            {plan.destacado && (
              <div className="planes__badge">Más Popular</div>
            )}
            <h2 className="planes__card-title">{plan.nombre}</h2>
            <div className="planes__card-precio">{plan.precio}</div>
            <div className="planes__card-cobertura">
              Cobertura: <strong>{plan.cobertura}</strong>
            </div>
            <ul className="planes__card-beneficios">
              {plan.beneficios.map((beneficio, idx) => (
                <li key={idx}>{beneficio}</li>
              ))}
            </ul>
            <button className="planes__card-button">Contratar</button>
          </div>
        ))}
      </div>

      <div className="planes__info">
        <h3>Información Importante</h3>
        <ul>
          <li>Los precios son referenciales y pueden variar según tu edad y monto del crédito</li>
          <li>La cobertura se ajusta automáticamente al saldo de tu crédito</li>
          <li>Todos los planes incluyen servicio funerario sin costo adicional</li>
          <li>El pago se realiza junto con tu mensualidad del crédito</li>
        </ul>
      </div>
    </div>
  );
};

export default Planes;