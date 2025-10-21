import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import NuestrosSeguros from './views/NuestrosSeguros/NuestrosSeguros';
import CentroAyuda from './views/CentroAyuda/CentroAyuda';
import Polizas from './views/Polizas/Polizas';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/nuestros-seguros" replace />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/nuestros-seguros" element={<NuestrosSeguros />} />
            <Route path="/centro-ayuda" element={<CentroAyuda />} />
            <Route path="/polizas" element={<Polizas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;