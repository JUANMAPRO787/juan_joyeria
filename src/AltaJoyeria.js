import React, { useState } from "react";
import "./App.css";

function AltaJoyeria() {
  const [pestaña, setPestaña] = useState(0);

  const pilares = [
    {
      titulo: "Orfebrería de Autor",
      descripcion: "Cada pieza es moldeada por maestros orfebres con más de 20 años de experiencia, cuidando cada engaste al milímetro.",
      stats: "100% Hecho a Mano"
    },
    {
      titulo: "Diamantes Certificados GIA",
      descripcion: "Seleccionamos minuciosamente diamantes que cumplen con los más estrictos criterios éticos y de pureza de color y corte.",
      stats: "Corte Excelente"
    },
    {
      titulo: "Diseño Personalizado",
      descripcion: "Ofrecemos servicio de bespoke privado para materializar tus ideas en piezas eternas a través de bocetos y renderizado 3D.",
      stats: "Piezas Únicas"
    }
  ];

  return (
    <section id="alta-joyeria" className="seccion-bloque bg-alt">
      <div className="encabezado-seccion">
        <span className="categoria-tag">Atelier & Excelencia</span>
        <h2>Alta Joyería Aura</h2>
        <div className="linea-decorativa"></div>
      </div>

      <div className="alta-joyeria-grid">
        <div className="tabs-pilares">
          {pilares.map((pilar, idx) => (
            <div 
              key={idx} 
              className={`tab-item ${pestaña === idx ? "activa" : ""}`}
              onClick={() => setPestaña(idx)}
            >
              <h4>{pilar.titulo}</h4>
            </div>
          ))}
        </div>

        <div className="pilar-contenido-card">
          <span className="badge-pilar">{pilares[pestaña].stats}</span>
          <h3>{pilares[pestaña].titulo}</h3>
          <p>{pilares[pestaña].descripcion}</p>
        </div>
      </div>
    </section>
  );
}

export default AltaJoyeria;