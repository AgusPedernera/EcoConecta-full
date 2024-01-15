import React, { useState } from 'react';
import './HamburgerLugares.css';
import imagenActiva from '../../public/img/hambu.png'
import imagenInactiva from '../../public/img/cruz.png'

const HamburgerLugares = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activo, setActivo] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setActivo(!activo);
  };
 
  let imagenFuente = activo ? imagenActiva : imagenInactiva

  return (
    <nav className="HamburgerLugares">
      <div className="nombre">Cambiar Categoría</div>

      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <a href="/compra/cosmetica">Cosmética</a>
        <a href="/compra/ropa">Ropa</a>
        <a href="/compra/libros">Libros</a>
        <a href="/compra/juguetes">Juguetes</a>
        <a href="/compra/DecoHogar">Deco y hogar</a>
        <a href="/compra/ferias">Ferias</a>
      </div>
      <img src={imagenFuente} alt="" onClick={toggleMenu} />
    </nav>
  );
};

export default HamburgerLugares;