// src/pages/Proyectos.js
import React from 'react';

function Proyectos() {
  const proyectos = [
    {
      titulo: 'Análisis de Datos de Ventas',
      descripcion: 'Proyecto de análisis de datos de ventas para identificar tendencias.',
      link: 'https://github.com/tuusuario/proyecto-ventas'
    },
    {
      titulo: 'Modelo de Predicción de Precios',
      descripcion: 'Modelo de machine learning para predecir precios de viviendas.',
      link: 'https://github.com/tuusuario/proyecto-prediccion'
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Mis Proyectos</h1>
      <div className="row">
        {proyectos.map((proyecto, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{proyecto.titulo}</h5>
                <p className="card-text">{proyecto.descripcion}</p>
              </div>
              <div className="card-footer">
                <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
