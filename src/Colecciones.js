import React, { useState } from "react";
import "./App.css";

const PRODUCTOS = [
  { id: 1, categoria: "anillos", nombre: "Anillo Solitario Éter", precio: "$2,450 USD", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
  { id: 2, categoria: "collares", nombre: "Gargantilla Aura Gold", precio: "$3,800 USD", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { id: 3, categoria: "pulseras", nombre: "Brazalete Dinastía", precio: "$1,950 USD", img: "https://www.shutterstock.com/image-photo/jewelry-diamond-bracelet-on-black-260nw-2014209293.jpg" },
  { id: 4, categoria: "pendientes", nombre: "Pendientes Gota de Luz", precio: "$1,200 USD", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80" },
  { id: 5, categoria: "anillos", nombre: "Anillo Sello Real", precio: "$3,100 USD", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80" },
  { id: 6, categoria: "collares", nombre: "Colgante Prisma Esmeralda", precio: "$4,500 USD", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
];

function Colecciones() {
  const [filtro, setFiltro] = useState("todos");

  const productosFiltrados = filtro === "todos" 
    ? PRODUCTOS 
    : PRODUCTOS.filter(p => p.categoria === filtro);

  return (
    <section id="colecciones" className="seccion-bloque">
      <div className="encabezado-seccion">
        <span className="categoria-tag">Catálogo Exclusivo</span>
        <h2>Colecciones Destacadas</h2>
        <div className="linea-decorativa"></div>
      </div>

      <div className="filtros-container">
        {["todos", "anillos", "collares", "pulseras", "pendientes"].map((cat) => (
          <button
            key={cat}
            className={`btn-filtro ${filtro === cat ? "activo" : ""}`}
            onClick={() => setFiltro(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid-productos">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="tarjeta-producto">
            <div className="img-wrapper">
              <img src={prod.img} alt={prod.nombre} />
            </div>
            <div className="info-producto">
              <h3>{prod.nombre}</h3>
              <p className="precio-producto">{prod.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Colecciones;