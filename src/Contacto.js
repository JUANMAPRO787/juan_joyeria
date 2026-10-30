import React, { useState } from "react";
import "./App.css";

export function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section id="contacto" className="seccion-bloque">
      <div className="encabezado-seccion">
        <span className="categoria-tag">Atención Privada</span>
        <h2>Agenda una Cita</h2>
        <div className="linea-decorativa"></div>
      </div>

      <div className="contacto-container">
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          <div className="campo-grupo">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
          </div>
          <div className="campo-grupo">
            <select required>
              <option value="">Selecciona interés</option>
              <option value="alta-joyeria">Alta Joyería</option>
              <option value="bespoke">Atelier a Medida</option>
              <option value="general">Consulta General</option>
            </select>
          </div>
          <textarea placeholder="Mensaje o requerimiento especial..." rows="4"></textarea>
          <button type="submit" className="boton-accion primario full-width">
            Solicitar Cita Privada
          </button>
          {enviado && <p className="confirmacion-envio">✓ Cita solicitada con éxito. Un asesor VIP se comunicará contigo.</p>}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pie-pagina">
      <div className="footer-contenido">
        <div className="footer-col">
          <h3 className="logo">AURA <span>JOYERÍA</span></h3>
          <p>Creando legados de belleza eterna e inigualable orfebrería.</p>
        </div>
        <div className="footer-col">
          <h4>Boutique</h4>
          <p>Av. Alvear 1850, Madrid / Buenos Aires</p>
          <p>contacto@aurajoyeria.com</p>
        </div>
        <div className="footer-col">
          <h4>Horario Privado</h4>
          <p>Lun - Vie: 10:00 - 19:00 HS</p>
          <p>Sábados: Con Cita Previa</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aura Joyería. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}