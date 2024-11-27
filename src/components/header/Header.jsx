import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav id="desktop-nav">
        <div class="logo">Fonseca Claudio</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">Sobre Mí</a>
            </li>
            <li>
              <a href="#experience">Experiencia</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
            <li>
              <button class="button-primary">Ingresar</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
