import React from "react";
import Menu from "./Menu";
import SeccionPrincipal from "./SeccionPrincipal";
import Colecciones from "./Colecciones";
import AltaJoyeria from "./AltaJoyeria";
import { Contacto, Footer } from "./Contacto";
import "./App.css";

function App() {
  return (
    <div className="contenedor-app">
      <Menu />
      <SeccionPrincipal />
      <Colecciones />
      <AltaJoyeria />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;