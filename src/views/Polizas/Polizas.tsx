import React from 'react';
import './Polizas.scss';

const Polizas: React.FC = () => {
  return (
    <div className="polizas">
      <div className="polizas__container">
        <h1 className="polizas__title">Mis Pólizas</h1>
        
        <div className="polizas__content">
          <section className="polizas__section">
            <h2>Administra tus Pólizas</h2>
            <p>
              Consulta el estado de tus pólizas, realiza pagos y accede a tu información 
              de manera rápida y segura.
            </p>
          </section>

          <div className="polizas__cards">
            <div className="polizas__card">
              <div className="polizas__card-icon">📄</div>
              <h3 className="polizas__card-title">Consultar Pólizas</h3>
              <p className="polizas__card-text">
                Revisa el detalle de todas tus pólizas activas y su estado actual.
              </p>
              <button className="polizas__card-button">Consultar</button>
            </div>

            <div className="polizas__card">
              <div className="polizas__card-icon">💳</div>
              <h3 className="polizas__card-title">Realizar Pagos</h3>
              <p className="polizas__card-text">
                Paga tus primas de manera fácil y segura en línea.
              </p>
              <button className="polizas__card-button">Pagar</button>
            </div>

            <div className="polizas__card">
              <div className="polizas__card-icon">📥</div>
              <h3 className="polizas__card-title">Descargar Documentos</h3>
              <p className="polizas__card-text">
                Descarga tu póliza, recibos de pago y otros documentos importantes.
              </p>
              <button className="polizas__card-button">Descargar</button>
            </div>

            <div className="polizas__card">
              <div className="polizas__card-icon">🔔</div>
              <h3 className="polizas__card-title">Renovaciones</h3>
              <p className="polizas__card-text">
                Mantén tus pólizas al día. Consulta tus fechas de renovación.
              </p>
              <button className="polizas__card-button">Ver Renovaciones</button>
            </div>
          </div>

          <section className="polizas__info">
            <h2>Información Importante</h2>
            <ul className="polizas__list">
              <li>Mantén tus datos de contacto actualizados</li>
              <li>Revisa regularmente el estado de tus pólizas</li>
              <li>Realiza tus pagos antes de la fecha de vencimiento</li>
              <li>Guarda tus documentos en un lugar seguro</li>
              <li>Contacta a tu agente ante cualquier duda o cambio</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Polizas;