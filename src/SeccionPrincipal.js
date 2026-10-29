import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Elegancia que trasciende el tiempo</h1>
      <p>Descubre piezas únicas diseñadas para eternizar tus momentos más especiales.</p>

      <img 
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" 
        alt="Joyas de alta gama" 
        className="imagen-destacada"
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar beneficio" : "Descubrir beneficio exclusivo"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">¡Felicidades! Tienes un 20% de descuento en tu primera adquisición.</p>
      )}
    </main>
  );
}

export default SeccionPrincipal;