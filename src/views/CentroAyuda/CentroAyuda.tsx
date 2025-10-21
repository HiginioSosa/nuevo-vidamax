import React from 'react';
import './CentroAyuda.scss';

const CentroAyuda: React.FC = () => {
  return (
    <div className="centro-ayuda">
      <div className="centro-ayuda__container">
        <h1 className="centro-ayuda__title">Centro de Ayuda</h1>
        
        <div className="centro-ayuda__content">
          <section className="centro-ayuda__section">
            <h2>¿Cómo podemos ayudarte?</h2>
            <p>
              Estamos aquí para responder tus dudas y brindarte el apoyo que necesitas. 
              Encuentra respuestas rápidas a las preguntas más frecuentes o contáctanos directamente.
            </p>
          </section>

          <section className="centro-ayuda__section">
            <h2>Preguntas Frecuentes</h2>
            <div className="centro-ayuda__faq">
              <div className="centro-ayuda__faq-item">
                <h3>¿Cómo puedo contratar un seguro?</h3>
                <p>
                  Puedes contratar nuestros seguros en cualquier sucursal de Banco Azteca o Elektra, 
                  llamando a nuestra línea de atención o a través de nuestra plataforma digital.
                </p>
              </div>

              <div className="centro-ayuda__faq-item">
                <h3>¿Qué documentos necesito?</h3>
                <p>
                  Los requisitos varían según el tipo de seguro. Generalmente necesitas una identificación 
                  oficial vigente y comprobante de domicilio.
                </p>
              </div>

              <div className="centro-ayuda__faq-item">
                <h3>¿Cómo reporto un siniestro?</h3>
                <p>
                  Puedes reportar un siniestro llamando a nuestra línea de atención 55 1720 9854, 
                  disponible las 24 horas del día, los 365 días del año.
                </p>
              </div>
            </div>
          </section>

          <section className="centro-ayuda__section">
            <h2>Canales de Contacto</h2>
            <div className="centro-ayuda__contact">
              <div className="centro-ayuda__contact-item">
                <span className="centro-ayuda__contact-icon">📞</span>
                <div>
                  <h3>Teléfono</h3>
                  <p>55 1720 9854</p>
                  <p className="centro-ayuda__contact-hours">24 horas - 365 días</p>
                </div>
              </div>

              <div className="centro-ayuda__contact-item">
                <span className="centro-ayuda__contact-icon">✉️</span>
                <div>
                  <h3>Correo Electrónico</h3>
                  <p>infoseguros@segurosaz.com.mx</p>
                </div>
              </div>

              <div className="centro-ayuda__contact-item">
                <span className="centro-ayuda__contact-icon">💬</span>
                <div>
                  <h3>WhatsApp</h3>
                  <p>Escríbenos por WhatsApp</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CentroAyuda;