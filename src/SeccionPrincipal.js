import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const copiarCodigo = () => {
    navigator.clipboard.writeText("AURAVIP20");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <section id="inicio" className="seccion-principal">
      <div className="hero-contenido">
        <span className="subtitulo-destacado">Edición Limitada & Alta Orfebrería</span>
        <h1>Elegancia que trasciende el tiempo</h1>
        <p>Descubre piezas únicas confeccionadas a mano con materiales nobles y gemas certificadas.</p>

        <div className="hero-acciones">
          <button 
            className="boton-accion primario"
            onClick={() => setMostrarMensaje(!mostrarMensaje)}
          >
            {mostrarMensaje ? "Ocultar beneficio" : "Beneficio Exclusivo"}
          </button>
          
          <button 
            className="boton-accion secundario"
            onClick={() => {
              const el = document.getElementById("colecciones");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Colección
          </button>
        </div>

        {mostrarMensaje && (
          <div className="mensaje-sorpresa-card">
            <div className="badge-descuento">-20% OFF</div>
            <div className="mensaje-texto">
              <h3>¡Privilegio VIP Activado!</h3>
              <p>Utiliza este código en tu primera adquisición:</p>
              <div className="codigo-box" onClick={copiarCodigo}>
                <span>AURAVIP20</span>
                <button className="boton-copiar">
                  {copiado ? "¡Copiado!" : "Copiar"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hero-imagen-container">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80" 
          alt="Joyas de alta gama" 
          className="imagen-destacada"
        />
        <div className="marco-dorado"></div>
      </div>
    </section>
  );
}

export default SeccionPrincipal;