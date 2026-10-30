import React, { useState, useEffect } from "react";
import "./App.css";

function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuAbierto(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header-fijo ${scrolled ? "scrolled" : ""}`}>
      <nav className="menu-navegacion">
        <h2 className="logo" onClick={() => scrollToSection("inicio")}>
          AURA <span>JOYERÍA</span>
        </h2>

        <div 
          className={`hamburguesa ${menuAbierto ? "activa" : ""}`} 
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu-lista ${menuAbierto ? "abierto" : ""}`}>
          <li onClick={() => scrollToSection("inicio")}>Inicio</li>
          <li onClick={() => scrollToSection("colecciones")}>Colecciones</li>
          <li onClick={() => scrollToSection("alta-joyeria")}>Alta Joyería</li>
          <li onClick={() => scrollToSection("contacto")}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;