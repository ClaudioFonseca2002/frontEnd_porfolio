import React from "react";
import "./Header.css";
import "../../../mediaqueries.css";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Fonseca Claudio</div>
        <div>
          <ul className="nav-links">
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
              <button className="button-primary">Ingresar</button>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Fonseca </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Conditional class to show/hide the menu */}
          <ul className={`menu-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#about">Sobre mí</a>
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
              <button className="button-primary">Ingresar</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
