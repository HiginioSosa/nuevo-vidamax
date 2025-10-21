import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">Línea de Seguros Azteca</h3>
          <div className="footer__contact">
            <span className="footer__icon">📞</span>
            <a href="tel:5517209854" className="footer__phone">55 1720 9854</a>
          </div>
          <button className="footer__whatsapp">Escríbenos por WhatsApp</button>
          <p className="footer__hours">Disponible las 24 horas - 365 días del año</p>
          <p className="footer__email">infoseguros@segurosaz.com.mx</p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Legales</h3>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Unidad Especializada</a></li>
            <li><a href="#" className="footer__link">Condiciones Generales</a></li>
            <li><a href="#" className="footer__link">Términos y condiciones</a></li>
            <li><a href="#" className="footer__link">Aviso de Privacidad</a></li>
            <li><a href="#" className="footer__link">Ejerce tus derechos ARCO</a></li>
            <li><a href="#" className="footer__link">Políticas del agraviado</a></li>
            <li><a href="#" className="footer__link">CONDUSEF</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Sobre Seguros Azteca</h3>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">¿Quiénes somos?</a></li>
            <li><a href="#" className="footer__link">Preguntas frecuentes</a></li>
            <li><a href="#" className="footer__link">Estados de cuenta financieros</a></li>
            <li><a href="#" className="footer__link">Seguros Azteca</a></li>
            <li><a href="#" className="footer__link">Seguros Azteca Daños</a></li>
            <li><a href="#" className="footer__link">Educación financiera</a></li>
            <li><a href="#" className="footer__link">Trabaja con nosotros</a></li>
            <li><a href="#" className="footer__link">Mapa de sitio</a></li>
            <li><a href="#" className="footer__link">Otros sitios</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Seguros Azteca 2025 © Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;