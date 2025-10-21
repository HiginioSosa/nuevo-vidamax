import React from 'react';
import './Condiciones.scss';

const Condiciones: React.FC = () => {
  return (
    <div className="condiciones">
      <h1 className="condiciones__title">Condiciones Generales</h1>
      
      <div className="condiciones__content">
        <section className="condiciones__section">
          <h2>Definiciones</h2>
          <p>
            Para efectos de esta póliza, se entenderá por:
          </p>
          <ul>
            <li><strong>Asegurado:</strong> Persona física que ha contratado el seguro y cuya vida es objeto del mismo.</li>
            <li><strong>Beneficiario:</strong> Persona física o moral designada por el Asegurado para recibir la indemnización.</li>
            <li><strong>Prima:</strong> Cantidad que el Asegurado está obligado a pagar a la Compañía.</li>
            <li><strong>Suma Asegurada:</strong> Cantidad máxima que la Compañía se obliga a pagar en caso de siniestro.</li>
          </ul>
        </section>

        <section className="condiciones__section">
          <h2>Coberturas</h2>
          <div className="condiciones__cobertura">
            <h3>Cobertura Básica - Fallecimiento</h3>
            <p>
              En caso de fallecimiento del Asegurado por cualquier causa durante la vigencia de la póliza, 
              la Compañía pagará a los beneficiarios la suma asegurada establecida en las condiciones particulares.
            </p>
          </div>

          <div className="condiciones__cobertura">
            <h3>Cobertura Adicional - Muerte Accidental</h3>
            <p>
              Si el fallecimiento del Asegurado ocurre como consecuencia directa de un accidente, 
              se pagará una indemnización adicional equivalente al porcentaje estipulado en la póliza.
            </p>
          </div>

          <div className="condiciones__cobertura">
            <h3>Servicio Funerario</h3>
            <p>
              Incluye servicios de asesoría legal, gestión de trámites, velación, y servicios funerarios 
              completos sin costo adicional para el Asegurado y sus beneficiarios.
            </p>
          </div>
        </section>

        <section className="condiciones__section">
          <h2>Exclusiones</h2>
          <p>
            La Compañía no será responsable del pago de indemnización cuando el fallecimiento del Asegurado sea causado por:
          </p>
          <ul className="condiciones__exclusiones">
            <li>Suicidio o intento del mismo durante los primeros dos años de vigencia de la póliza</li>
            <li>Actos delictuosos intencionales cometidos por el Asegurado</li>
            <li>Participación del Asegurado en riñas, salvo que sea en defensa propia o de terceros</li>
            <li>Enfermedades preexistentes no declaradas al momento de la contratación</li>
            <li>Uso de drogas, estupefacientes o alcohol, salvo prescripción médica</li>
            <li>Práctica de deportes extremos o actividades de alto riesgo no cubiertas</li>
            <li>Guerra, invasión, actos de enemigos extranjeros, terrorismo</li>
            <li>Radiación nuclear o contaminación radioactiva</li>
          </ul>
        </section>

        <section className="condiciones__section">
          <h2>Requisitos para la Contratación</h2>
          <ul>
            <li>Tener entre 18 y 75 años de edad</li>
            <li>Contar con un Préstamo Personal o Crédito al Consumo vigente</li>
            <li>Presentar identificación oficial vigente</li>
            <li>Llenar y firmar la solicitud de seguro</li>
            <li>Declarar el estado de salud conforme al cuestionario médico</li>
          </ul>
        </section>

        <section className="condiciones__section">
          <h2>Vigencia y Renovación</h2>
          <p>
            La vigencia del seguro será igual al plazo del crédito contratado. La póliza iniciará 
            su vigencia a partir del día siguiente de la contratación y terminará al momento de 
            liquidar completamente el crédito o al vencimiento del plazo establecido.
          </p>
        </section>

        <section className="condiciones__section">
          <h2>Prima y Forma de Pago</h2>
          <p>
            La prima se calculará de acuerdo con la edad del Asegurado y el monto del crédito. 
            El pago se realizará junto con la mensualidad del crédito en cualquier sucursal de 
            Banco Azteca o Elektra.
          </p>
        </section>

        <section className="condiciones__section">
          <h2>Procedimiento en Caso de Siniestro</h2>
          <p>
            En caso de fallecimiento del Asegurado, los beneficiarios deberán:
          </p>
          <ol>
            <li>Reportar el siniestro en un plazo no mayor a 30 días naturales</li>
            <li>Presentar la documentación requerida completa</li>
            <li>Esperar el análisis y dictamen de la Compañía</li>
            <li>Recibir el pago de la indemnización en caso de ser procedente</li>
          </ol>
          <p>
            El tiempo de respuesta es de 17 días hábiles una vez que la documentación esté completa.
          </p>
        </section>

        <section className="condiciones__section">
          <h2>Cancelación de la Póliza</h2>
          <p>
            La póliza puede ser cancelada por:
          </p>
          <ul>
            <li>Falta de pago de prima por más de 30 días naturales</li>
            <li>Liquidación total del crédito</li>
            <li>Solicitud expresa del Asegurado</li>
            <li>Fallecimiento del Asegurado</li>
          </ul>
        </section>

        <section className="condiciones__section condiciones__section--contacto">
          <h2>Contacto y Atención al Cliente</h2>
          <p>
            Para cualquier duda o aclaración sobre tu póliza, puedes contactarnos:
          </p>
          <div className="condiciones__contacto">
            <div className="condiciones__contacto-item">
              <strong>Teléfono:</strong> 55 1720 9854
            </div>
            <div className="condiciones__contacto-item">
              <strong>Correo:</strong> infoseguros@segurosaz.com.mx
            </div>
            <div className="condiciones__contacto-item">
              <strong>Horario:</strong> 24 horas, 365 días del año
            </div>
          </div>
        </section>

        <div className="condiciones__footer">
          <p>
            <strong>Nota Importante:</strong> Este documento es un resumen de las condiciones generales. 
            Para conocer los términos completos, consulta la póliza que te fue entregada al momento de la contratación 
            o solicítala en cualquier sucursal de Banco Azteca o Elektra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Condiciones;