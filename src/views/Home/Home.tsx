import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__hero">
          <h1 className="home__title">Bienvenido a Seguros Azteca</h1>
          <p className="home__description">
            Protegemos lo que más te importa. Conoce nuestros productos y servicios 
            diseñados para brindarte tranquilidad y seguridad.
          </p>
        </div>

        <div className="home__cards">
          <div className="home__card">
            <div className="home__card-icon">🛡️</div>
            <h3 className="home__card-title">Protección Total</h3>
            <p className="home__card-text">
              Seguros diseñados para proteger a tu familia en todo momento.
            </p>
          </div>

          <div className="home__card">
            <div className="home__card-icon">💼</div>
            <h3 className="home__card-title">Respaldo Financiero</h3>
            <p className="home__card-text">
              Apoyo económico cuando más lo necesitas.
            </p>
          </div>

          <div className="home__card">
            <div className="home__card-icon">📞</div>
            <h3 className="home__card-title">Atención 24/7</h3>
            <p className="home__card-text">
              Estamos disponibles para ti las 24 horas del día, todos los días del año.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;