import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logoImage from '../../assets/images/banco-azteca-icon-mx.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logoImage} alt="Seguros Azteca Logo" className="navbar__logo-image" />
          <span className="navbar__logo-text">Seguros Azteca</span>
        </div>
        
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink to="/inicio" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Inicio
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/nuestros-seguros" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Nuestros Seguros
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/centro-ayuda" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Centro de Ayuda
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/polizas" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Pólizas
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;